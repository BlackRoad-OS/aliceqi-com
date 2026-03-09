import { NextResponse } from 'next/server'

export const runtime = 'edge'

export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'aliceqi.com',
    organization: 'BlackRoad OS, Inc.',
    timestamp: new Date().toISOString(),
  })
}
