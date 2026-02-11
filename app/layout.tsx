import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'aliceqi.com | BlackRoad OS',
  description: 'AliceQI - Quantum AI Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
      }}>
        {children}
      </body>
    </html>
  )
}
