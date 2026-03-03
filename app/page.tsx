import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav style={{
        background: '#0a0a0a',
        borderBottom: '1px solid #2a2a2a',
        padding: '0 34px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, Fira Code, monospace',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
          }}>BlackRoad OS</a>
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '10px',
            color: '#555',
            background: '#1a1a1a',
            padding: '2px 8px',
            borderRadius: '3px',
          }}>v2.0</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#4ade80',
            }} />
            <span style={{
              fontFamily: 'SF Mono, monospace',
              fontSize: '11px',
              color: '#555',
            }}>Operational</span>
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '12px',
                padding: '6px 16px',
                borderRadius: '5px',
                border: '1px solid #2a2a2a',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
              }}>Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Main */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 120px)',
        padding: '89px 34px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          padding: '5px 13px',
          borderRadius: '4px',
          marginBottom: '34px',
        }}>
          aliceqi.com · BlackRoad OS, Inc.
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: '-1px',
          marginBottom: '21px',
          background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          AliceQI
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#777',
          maxWidth: '560px',
          lineHeight: 1.618,
          marginBottom: '13px',
        }}>
          Quantum-native AI infrastructure. Route every AI call through your own stack — not through vendors.
        </p>

        <p style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '12px',
          color: '#444',
          marginBottom: '55px',
        }}>
          Powered by @blackboxprogramming · @lucidia · BlackRoad OS
        </p>

        <div style={{ display: 'flex', gap: '13px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '13px',
                padding: '13px 34px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 100%)',
                color: '#000',
              }}>
                Get Started — Free
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <a href="/dashboard" style={{
              fontFamily: 'SF Mono, monospace',
              fontSize: '13px',
              padding: '13px 34px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
              background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 100%)',
              color: '#000',
            }}>
              Go to Dashboard
            </a>
          </SignedIn>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '13px',
            padding: '13px 34px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 500,
            background: 'transparent',
            color: '#777',
            border: '1px solid #2a2a2a',
          }}>
            Explore BlackRoad OS
          </a>
        </div>

        {/* Products */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: '#2a2a2a',
          marginTop: '89px',
          maxWidth: '800px',
          width: '100%',
        }}>
          {[
            {
              label: 'AI PROXY',
              value: 'AliceQI Core',
              desc: 'Route OpenAI, Anthropic, Gemini calls through your infrastructure. No vendor lock-in.',
            },
            {
              label: 'AUTH',
              value: 'BlackRoad Auth',
              desc: 'OAuth 2.0 & SSO via Clerk. Secure, production-ready authentication for every service.',
            },
            {
              label: 'BILLING',
              value: 'Stripe Payments',
              desc: 'Subscription management, metered usage, and enterprise billing — all in one place.',
            },
            {
              label: 'INFRA',
              value: 'Cloudflare Edge',
              desc: 'Global edge deployment. Tailscale mesh for private routing. Zero cold starts.',
            },
          ].map((p) => (
            <div key={p.label} style={{
              background: '#111',
              padding: '34px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '10px',
                color: '#555',
                marginBottom: '8px',
                letterSpacing: '0.08em',
              }}>{p.label}</div>
              <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{p.value}</div>
              <div style={{ fontFamily: 'SF Mono, monospace', fontSize: '11px', color: '#444', lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#2a2a2a',
          marginTop: '21px',
          maxWidth: '600px',
          width: '100%',
        }}>
          {[
            { label: 'REPOS', value: '200+' },
            { label: 'DOMAINS', value: '20' },
            { label: 'AI AGENTS', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#111',
              padding: '34px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '11px',
                color: '#555',
                marginBottom: '8px',
              }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 600 }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        borderTop: '1px solid #2a2a2a',
        padding: '21px 34px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
        }}>© 2026 BlackRoad OS, Inc. · CEO: Alexa Amundson</span>
        <div style={{ display: 'flex', gap: '21px' }}>
          {[
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'GitHub', href: 'https://github.com/BlackRoad-OS/aliceqi-com' },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{
              fontFamily: 'SF Mono, monospace',
              fontSize: '11px',
              color: '#555',
              textDecoration: 'none',
            }}>{link.label}</a>
          ))}
        </div>
      </footer>
    </>
  )
}

