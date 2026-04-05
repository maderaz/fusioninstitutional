# IPOR Fusion — Landing Page Spec for Figma AI

## Global Design Direction

**Tone:** Institutional, confident, minimal. Think BlackRock meets crypto-native.  
**Palette:** Near-black background (#09090B), zinc grays for text hierarchy, purple (#8B5CF6) as the singular accent — used sparingly for emphasis, hover states, and one or two key words in headings. Never gratuitous.  
**Typography:** Serif display font (e.g., Instrument Serif, Playfair Display, or similar editorial serif) for all headings. Clean sans-serif (DM Sans, Söhne, or Untitled Sans) for body text. The serif/sans contrast creates the "institutional but modern" feel seen in Metrik's inspiration.  
**Layout principle:** Generous negative space. Content centered and constrained (~1200px max). Grid-based card layouts use 1px dividers rather than individual card borders (monochrome, austere).  
**Background:** Consider a very subtle noise/grain texture overlay on the dark bg for depth. The hero and final CTA sections have soft purple radial glows (not blobs — think atmospheric haze). Optional: an abstract orbital/constellation particle field behind the hero (IPOR's atom motif reinterpreted as a generative visual, NOT a stock 3D render).

---

## NAV

**Layout:** Fixed top. Transparent bg with blur-backdrop.  
**Left:** IPOR atom icon (purple rounded square, 32px) + "Fusion" wordmark.  
**Right:** Links — How It Works | Solutions | Security | Docs — then a purple "Launch App →" CTA button.  
**Border:** 1px bottom border in #222228.  
**Behavior:** Stays visible on scroll.

---

## SECTION 1 — HERO (full viewport)

**Layout:** Centered vertically and horizontally. Full viewport height.

**Elements top-to-bottom:**

1. **Badge pill** — Small rounded pill: green pulsing dot + "Live on Ethereum · Arbitrum · Base · Unichain". Subtle border, dark fill.

2. **Headline** — Large serif, ~72-88px:  
   `Vault infrastructure`  
   `for *intelligent* yield.`  
   The word "intelligent" is in italic serif AND colored purple. Everything else is white.

3. **Subhead** — 18px sans-serif, #A1A1AA:  
   "Deploy, manage, and scale onchain asset management strategies. Fusion is the modular execution layer behind the next generation of DeFi structured products."

4. **CTA pair** — Purple filled button "Start Earning →" + bordered outline button "Read the Docs"

5. **Stats bar** — Horizontal row, separated by thin top border. 4 stat columns:  
   - $165M+ / Total Value Managed  
   - 35+ / Active Vaults  
   - 10+ / Security Audits  
   - 20+ / Protocol Integrations  
   Values in large serif. Labels in 12px uppercase tracking.

**Background:** Soft purple radial gradient centered behind the headline. Very low opacity (~15%). Optional constellation/particle animation.

---

## TRUST BAR (thin divider section)

**Layout:** Centered, full-width with top/bottom borders.

**Content:**  
Label: "PLUG INTO THE PROTOCOLS THAT MATTER" (12px uppercase, muted)  
Row of protocol names with small icon squares: Aave V3 · Morpho · Euler V2 · Compound · Uniswap · Pendle · Fluid · Curve  

**Style:** Logos/names are muted (#71717A), brighten on hover. In Figma, use actual protocol logos in monochrome/grayscale. This is the "social proof" strip.

---

## SECTION 2 — HOW IT WORKS (Architecture)

**Layout:** Left-aligned section label + heading + paragraph, followed by a 3-column grid.

**Header area:**  
- Label: "ARCHITECTURE" (purple, 12px uppercase)  
- Title: "One vault. Every strategy. Zero complexity." (serif, ~48-52px)  
- Description: "Fusion's modular architecture separates execution from custody. Deploy capital into ERC-4626 vaults, connect strategy logic through composable fuses, and let Alpha engines optimize across protocols — all without moving assets between contracts." (17px, gray)

**Grid — 3 equal columns with 1px gap borders (no individual card borders):**

| 01 | 02 | 03 |
|----|----|----|
| **Plasma Vaults** | **Fuse Modules** | **Alpha Execution** |
| ERC-4626 compliant, immutable vaults that hold your assets. Each vault is fully isolated — siloed risk, no cross-contamination. Deposit once, access every integrated market. | Composable, non-upgradable smart contract connectors to external protocols. Supply, borrow, swap, loop — each action is a fuse. Snap new ones in, never touch the vault. | Off-chain strategy engines execute onchain through governance-approved parameters. Automated rebalancing, carry trades, looping, and arbitrage — intelligence-driven, risk-bounded. |

Each cell: dim purple serif number top-left, bold 18px title, 14px gray paragraph.

**Optional enhancement:** Above the grid, a thin horizontal flow diagram:  
`Deposit → PlasmaVault → Fuses → Protocols → Yield`  
Rendered as a minimal pipeline with thin lines and small circles/nodes. Purple accent on the arrows.

---

## SECTION 3 — SOLUTIONS (Who it's for)

**Layout:** Left-aligned header, then 2×2 card grid.

**Header area:**  
- Label: "SOLUTIONS" (purple, 12px uppercase)  
- Title: "Built for every participant in the yield stack." (serif)  
- Description: "Whether you're allocating treasury capital or building the next yield product — Fusion is the infrastructure layer underneath."

**Cards (2×2 grid, 24px gap):**

### Card 1 — INSTITUTIONS & FUND MANAGERS ⭐ (visually emphasized: default purple border)
- Icon: 🏛 in a small dark box
- Title: "Institutions & Fund Managers"
- Body: "Sovereign vault infrastructure for onchain asset management. Deploy capital with institutional-grade security, full transparency, and customizable risk parameters. Your vault, your rules, your alpha."
- Feature list (arrow-prefixed):
  - Privacy-preserving strategy execution
  - Configurable fee structures & governance
  - Python SDK — no Solidity required
  - White-label ready for distribution partners

### Card 2 — BUILDERS & CURATORS
- Icon: ⚡
- Title: "Builders & Curators"
- Body: "Create automated onchain vaults without writing a single smart contract. Pick your fuses, set your parameters, and launch. Earn curator fees from the strategies you design."
- Features:
  - Plug-and-play fuse library
  - One-click vault deployment via Factory
  - Composable across 20+ protocols
  - Earn fees as an Atomist

### Card 3 — LIQUIDITY PROVIDERS
- Icon: 💰
- Title: "Liquidity Providers"
- Body: "Access professionally curated, auto-optimized yield strategies with a single deposit. From lending optimization to leveraged looping — risk-adjusted to your preference."
- Features:
  - One-click deposit into curated strategies
  - Automated rebalancing & compounding
  - Siloed risk — no socialized losses
  - Instant liquidity, no lockups

### Card 4 — PROTOCOLS & DISTRIBUTORS
- Icon: 🔌
- Title: "Protocols & Distributors"
- Body: "Embed Fusion vaults as plug-and-play yield products. Wallets, exchanges, fintechs — offer 'Earn' features powered by Fusion infrastructure without building from scratch."
- Features:
  - Embed vaults into any interface
  - White-label for wallets & CEXs
  - Referral system built-in
  - Invisible infrastructure, visible yield

**Card style:** Dark surface (#111114), 1px border (#222228), 16px rounded. On hover: border turns purple, subtle purple radial glow from top-right corner.

---

## SECTION 4 — SECURITY

**Layout:** Left-aligned header + 4-column stat grid.

**Header area:**  
- Label: "SECURITY" (purple)  
- Title: "Battle-tested infrastructure." (serif)  
- Description: "Immutable vault logic. Non-upgradable fuses. Role-based access control. Fusion is built by engineers from banking, payments, and insurance — and audited by the best in Web3."

**Stat grid (same 1px-divider style as architecture grid, 4 columns):**

| 10+ | 100% | 0 | 4 |
|-----|------|---|---|
| Independent security audits | Immutable vault & fuse contracts | Admin keys over depositor funds | Chains live: ETH · ARB · Base · Uni |

Big serif numbers centered. Small muted label below.

**Optional:** Below the grid, a muted row of audit firm names: Blocsec · Ackee Blockchain · Zokyo · Protofire

---

## FINAL CTA (breathing close)

**Layout:** Centered, generous vertical padding (160px top/bottom).

- Title: "The yield layer is ready." (serif, ~56-64px)
- Sub: "Deploy your first vault, deposit into a curated strategy, or embed Fusion into your product."
- Two buttons: "Launch App →" (purple) + "Documentation" (outlined)

**Background:** Soft purple radial glow behind text, subtle.

---

## FOOTER

**Layout:** Max-width 1200px, centered.

**Top row (flex, space-between):**  
- Left: IPOR atom logo + "IPOR" name + tagline: "The prime brokerage protocol of DeFi. Vault infrastructure, interest rate derivatives, and onchain benchmarks."  
- Right: 3 link columns:

| Product | Developers | Community |
|---------|-----------|-----------|
| Fusion Vaults | Documentation | X / Twitter |
| Interest Rate Swaps | GitHub | Discord |
| IPOR Index | Python SDK | Telegram |
| Governance | Smart Contracts | Blog |

**Bottom bar:** Copyright left, social links right. Thin top border.

**NOTE:** Legacy products (Interest Rate Swaps, IPOR Index, Governance) appear ONLY in footer. The rest of the page is 100% Fusion.

---

## Key Copywriting Decisions

1. **"Vault infrastructure for intelligent yield"** — positions Fusion as infra, not an app. Institutional framing.
2. **"The Earn Button of Web3"** tagline is referenced in the app, not the homepage. The homepage speaks to builders and institutions.
3. **$165M+ TVM** — using Total Value Managed (not TVL) as the primary metric, since leveraged vaults inflate this meaningfully and it's the number IPOR uses.
4. **Purple accent only on:** the word "intelligent" in hero, section labels, hover states, the Institutions card border, CTA buttons, and arrow prefixes. Never backgrounds, never gradients on text, never overdone.
5. **Atom motif** kept to the nav icon and optional background constellation. The current IPOR branding uses the atom/orbital symbol — it should appear but not dominate.