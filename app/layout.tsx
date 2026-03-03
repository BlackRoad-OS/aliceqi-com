import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'aliceqi.com | BlackRoad OS',
  description: 'Your quantum-native AI assistant for the modern age.',
}

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const body = (
    <html lang="en">
      <head>
        <link rel="icon" href="https://blackroad.io/favicon.ico" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
      }}>
        {/* Accent gradient strip */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
        }} />
        {children}
      </body>
    </html>
  )

  if (!publishableKey) return body

  return <ClerkProvider publishableKey={publishableKey}>{body}</ClerkProvider>
}
