import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export const runtime = 'edge'

// Supported vendor targets routed through BlackRoad infrastructure.
// All calls go through BLACKROAD_AI_ENDPOINT — no direct vendor access.
const VENDOR_PATHS: Record<string, string> = {
  openai: '/v1/openai',
  anthropic: '/v1/anthropic',
  gemini: '/v1/gemini',
}

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const baseUrl = process.env.BLACKROAD_AI_ENDPOINT
  if (!baseUrl) {
    return NextResponse.json({ error: 'AI endpoint not configured' }, { status: 503 })
  }

  const secret = process.env.BLACKROAD_AI_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'AI secret not configured' }, { status: 503 })
  }

  const vendor = req.nextUrl.searchParams.get('vendor') ?? 'openai'
  const vendorPath = VENDOR_PATHS[vendor]
  if (!vendorPath) {
    return NextResponse.json({ error: `Unsupported vendor: ${vendor}` }, { status: 400 })
  }

  const body = await req.text()
  const upstream = await fetch(`${baseUrl}${vendorPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': req.headers.get('Content-Type') ?? 'application/json',
      Authorization: `Bearer ${secret}`,
      'X-BlackRoad-User': userId,
    },
    body,
  })

  const data = await upstream.text()
  return new NextResponse(data, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('Content-Type') ?? 'application/json' },
  })
}
