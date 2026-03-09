# AliceQI — BlackRoad OS, Inc.

## Status: 🟢 GREEN LIGHT — Production Ready

**Maintained by:** BlackRoad OS, Inc. · CEO: Alexa Amundson
**Powered by:** @blackboxprogramming · @lucidia

---

## 🌌 What Is AliceQI?

AliceQI is the **primary AI gateway and web presence** for BlackRoad OS, Inc. It routes all AI model traffic through BlackRoad's own infrastructure — not directly to OpenAI, Anthropic, or any other vendor.

> **You → BlackRoad AI Gateway → Vendor APIs**
> Never: You → OpenAI directly

---

## 📦 Products

| Product | Description | Status |
|---------|-------------|--------|
| **AliceQI Core** | AI proxy layer. Route OpenAI, Anthropic, Gemini calls through your infra. | 🟢 Live |
| **BlackRoad Auth** | OAuth 2.0 & SSO via Clerk. Production-ready authentication. | 🟢 Live |
| **Stripe Billing** | Subscriptions, metered usage, enterprise billing. | 🟢 Live |
| **Cloudflare Edge** | Global edge deployment. Zero cold starts. | 🟢 Live |
| **Tailscale Mesh** | Private routing through your own network. No vendor snooping. | 🟡 Setup Required |

---

## 🏗️ Architecture

```
Browser / Client
      │
      ▼
Cloudflare Pages (aliceqi.com)
      │  ├── /api/health          — health check
      │  ├── /api/ai?vendor=...   — AI proxy (→ BlackRoad gateway)
      │  ├── /api/checkout        — Stripe checkout
      │  └── /api/stripe-webhook  — Stripe events
      │
      ▼
BlackRoad AI Gateway  (BLACKROAD_AI_ENDPOINT)
      │  ├── /v1/openai    → OpenAI
      │  ├── /v1/anthropic → Anthropic
      │  └── /v1/gemini    → Gemini
```

All AI calls are authenticated via Clerk and proxied through `BLACKROAD_AI_ENDPOINT`. No API key for any vendor is ever stored in this repository.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- A [Clerk](https://clerk.com) application
- A [Stripe](https://stripe.com) account
- A [Cloudflare](https://cloudflare.com) account (for deployment)

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Fill in values — see .env.example for details

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Deploy (Cloudflare Pages)

Set the following **GitHub Actions secrets** in your repository:

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `DEPLOY_URL` | Your production URL (e.g. `https://aliceqi.com`) |

Push to `main`/`master` — the CI/CD pipeline deploys automatically.

---

## 🔐 OAuth / Authentication (Clerk)

1. Create an app at [dashboard.clerk.com](https://dashboard.clerk.com)
2. Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to `.env.local`
3. Protected routes (e.g. `/dashboard`) require sign-in via `middleware.ts`

---

## 💳 Stripe Setup

1. Create products + prices in your [Stripe Dashboard](https://dashboard.stripe.com)
2. Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` to `.env.local`
3. Register webhook endpoint: `POST https://aliceqi.com/api/stripe-webhook`
4. Listen for `checkout.session.completed` and `customer.subscription.deleted`

---

## 🤖 Custom AI Proxy

All AI API calls go through your `BLACKROAD_AI_ENDPOINT` — not directly to vendors:

```ts
// Client usage
const res = await fetch('/api/ai?vendor=openai', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gpt-4o', messages: [...] }),
})
```

Supported vendors: `openai`, `anthropic`, `gemini`

---

## 🌐 Infrastructure

| Component | Provider | Notes |
|-----------|----------|-------|
| Hosting | Cloudflare Pages | Edge, global CDN |
| Auth | Clerk | OAuth 2.0, SSO |
| Payments | Stripe | Subscriptions + webhooks |
| Private network | Tailscale | Mesh VPN for Pi cluster |
| DNS / CDN | Cloudflare | DDoS protection, caching |
| AI gateway | BlackRoad OS | Routes all vendor calls |

---

## 🏢 About BlackRoad OS, Inc.

| Property | Value |
|----------|-------|
| CEO | Alexa Amundson |
| GitHub | [@BlackRoad-OS](https://github.com/BlackRoad-OS) |
| Repositories | 200+ across 15 organizations |
| Scale | 30,000 AI agents + 30,000 human employees |
| Operator | One operator: Alexa Amundson (CEO) |

---

## 📜 License & Copyright

**Copyright © 2026 BlackRoad OS, Inc. All Rights Reserved.**

**PROPRIETARY AND CONFIDENTIAL** — Not for commercial resale.

- ✅ **Permitted:** Testing, evaluation, educational purposes
- ❌ **Prohibited:** Commercial use, resale, or redistribution without written permission

**Contact:** blackroad.systems@gmail.com

See [LICENSE](LICENSE) for complete terms.

