# IPOR Fusion Landing Page — Text Corrections

Audit of Figma AI output vs. official IPOR documentation, GitHub repos, and on-chain data.

---

## ✅ VERIFIED — No Changes Needed

| Claim on mockup | Source |
|---|---|
| "ERC-4626 compliant, immutable vaults" | Docs, GitHub, research report — all confirm ERC-4626 + immutable |
| "Composable, non-upgradable smart contract connectors" (Fuses) | Docs: "Fuses are immutable and non-upgradable" — confirmed |
| "Privacy-preserving strategy execution" | Research report: off-chain Alpha layer keeps strategy IP private — confirmed |
| "Python SDK, no Solidity required" | GitHub repo `ipor-fusion.py` exists, maintained by IPOR Labs AG — confirmed |
| "Siloed risk, no socialized losses" | Docs + ipor.io/ipor-fusion both state siloed risk exposure — confirmed |
| "One-click vault deployment via Factory" | Docs reference FusionFactory for vault creation — confirmed |
| "Earn fees as an Atomist" | Docs: Atomists configure management + performance fees — confirmed |
| "Referral system built-in" | DeepWiki: "Referral System and Zaps" is a documented module — confirmed |
| "10+ Independent security audits" | Research report: "10+ audits by Blocsec, Protofire, Ackee, Zokyo" — confirmed |
| "Audited by Blocsec, Ackee Blockchain, Zokyo, Protofire" | Research report — confirmed |
| "0 Admin keys over depositor funds" | Blog: "vault is always the owner of the assets, depositors retain pro rata ownership" — confirmed |
| Architecture section (Plasma Vaults, Fuse Modules, Alpha Execution) | All three concepts match docs terminology exactly |
| Solutions cards (Institutions, Builders, LPs, Protocols) | Match docs segmentation: Capital Providers, Curators, Protocols |
| Protocol logos: Aave V3, Morpho, Euler V2, Compound, Uniswap, Pendle, Curve | All confirmed via GitHub fuses directory and/or deepwiki Protocol Integrations |
| "Lido" in integrated protocols list on vault detail | Confirmed: `BalanceFuseAaveV3Lido` exists in ipor-abi repo |
| "Balancer" in integrated protocols list on vault detail | Confirmed via contracts/fuses directory on deepwiki |
| Comparison table: Fusion vs Merkle Proof Vaults concept | Valid comparison — Veda/Aera use Merkle tree verification per ExaGroup article |
| "Xerberus" risk rating on vault card | Xerberus is a real DeFi risk rating provider — OK |
| "© 2026 IPOR Labs AG" | Correct — IPOR Labs AG is the registered entity |

---

## ❌ NEEDS CORRECTION

### 1. "Why Fusion" section — "Gasless Rebalancing"

**Current text:** "Off-chain intent engine batches rebalances across vaults, reducing gas costs by up to 80% compared to manual execution."

**Problem:** The "80% gas reduction" claim has **no source** in IPOR documentation, blog posts, research reports, or GitHub. Fusion does use off-chain Alphas for execution, but the specific "gasless" framing and "80%" figure appear to be fabricated by Figma AI.

**Fix:** Replace with language that reflects actual documented behavior:

> **Efficient Off-Chain Execution**
> Alpha engines execute strategy logic off-chain and batch operations onchain through governance-approved parameters, minimizing transaction overhead while maintaining full transparency.

---

### 2. "Why Fusion" section — "Institutional-Grade Risk Engine" → "automated circuit breakers"

**Current text:** "Real-time exposure monitoring, automated circuit breakers, and configurable risk limits ensure capital protection at every layer of the stack."

**Problem:** "Automated circuit breakers" is not documented terminology. Fusion does support **Guardian roles** (security firms can be assigned guardian roles to pause vaults) and **configurable market limits** (caps on % of total assets per market). The term "circuit breaker" is not used in any IPOR source.

**Fix:**

> **Institutional-Grade Risk Controls**
> Real-time exposure monitoring, Guardian roles for emergency actions, and configurable market limits ensure capital protection at every layer of the stack.

---

### 3. "Why Fusion" section — "Transparent Performance Analytics"

**Current text:** "On-chain verifiable P&L, historical NAV tracking, and strategy attribution, all queryable via API or dashboard."

**Problem:** While the app does show performance charts and allocation data, the specific claim "queryable via API" is not documented. The TypeScript examples repo reads vault data but there is no documented public analytics API.

**Fix:**

> **Transparent Performance Analytics**
> On-chain verifiable P&L, historical NAV tracking, and strategy attribution — all visible on the Fusion dashboard and verifiable directly from smart contracts.

---

### 4. Hero subhead — tone adjustment

**Current text:** "Earn via existing vault strategies or build your own. Fusion is the modular execution layer for deploying, managing, and scaling onchain asset management."

**Problem:** Not inaccurate, but "Earn via existing vault strategies" is LP-focused and slightly undersells the institutional angle. The institutional positioning should lead.

**Suggested fix (optional — tone preference):**

> Deploy, manage, and scale onchain asset management strategies — or earn via professionally curated vaults. Fusion is the modular execution layer behind the next generation of DeFi structured products.

---

### 5. Chains — mockup says "4 Chains" but reality is 6+

**Current text (Security section):** "4 — Chains live: ETH · ARB · Base · Uni"

**Problem:** DefiLlama (current data) shows Fusion deployed on **Ethereum, Base, Unichain, Arbitrum, TAC, and Ink** — that's 6 chains, not 4. The ipor.io main site also references Unichain. Even the hero badge says "Ethereum · Arbitrum · Base · Unichain" (4 chains), but actual deployment data shows more.

**Fix — two options:**

**Option A (conservative, list only significant TVL chains):**
> **4** — Primary chains: ETH · ARB · Base · Uni

This is defensible if TAC and Ink are considered negligible/early. Keep hero badge as is.

**Option B (accurate count):**
> **6** — Chains deployed: ETH · ARB · Base · Uni · TAC · Ink

Update hero badge accordingly.

**Recommendation:** Go with Option A — TAC and Ink have near-zero TVL ($289K and $0 respectively) and listing them dilutes the institutional feel. But be aware the number should be updated as deployment scales.

---

### 6. Comparison table — "Trust minimized but opaque" for Merkle vaults

**Current text:** Merkle Proof Vaults row says "Trust minimized but opaque" under Trust assumptions.

**Problem:** This is a competitive claim that's roughly accurate based on the ExaGroup comparison article (Veda/Aera Merkle tree verification is transparent in structure but execution details can be opaque). However, calling competitors "opaque" is an editorial judgment. This is fine for marketing but should be reviewed by the IPOR team for competitive accuracy and tone.

**Status:** Flag for team review — no text change needed from a factual standpoint, but team should validate competitive claims.

---

### 7. "$165M+" TVM figure may be outdated

**Current text (hero stats):** Not in the current mockup's hero, but was in original spec. The app.ipor.io shows $165M TVM while DefiLlama shows ~$24M TVL.

**Note:** The mockup doesn't show a specific TVM number in the hero (good — it shows a dynamic vault card instead). If TVM stats are added later, use the app.ipor.io figure as source and make it clear it's "Total Value Managed" not "TVL" since TVM includes leveraged positions.

---

### 8. "Fluid" in protocol trust bar

**Current text:** Fluid appears in the "Plug into the protocols that matter" protocol row.

**Problem:** Fluid was mentioned in the 2024 Fusion blog post as an upcoming integration, but I cannot confirm a deployed Fluid fuse in the current ipor-abi repo or docs. The GitHub ABI repo (last updated April 2025) does not list a Fluid fuse.

**Fix:** Either remove Fluid from the trust bar, or replace with a protocol that has confirmed fuse deployment. Candidates from the ABI repo: **Moonwell** (confirmed in docs dependency graph), **Ramses** (confirmed in Python SDK), or **Beefy** (price feed factory confirmed).

**Suggested replacement row:**
> Aave V3 · Morpho · Euler V2 · Compound · Uniswap · Pendle · Curve · Moonwell

---

### 9. Footer — "IPOR Index" link

**Status:** OK for footer (legacy products go here per brief), but note that the correct current framing per docs is "IPOR Benchmarks" not just "IPOR Index." The stETH Index is separate from the stablecoin index.

**Optional fix:**
> Change "IPOR Index" → "IPOR Benchmarks" in footer

---

## Summary of Required Changes

| # | Section | What to change |
|---|---------|---------------|
| 1 | Why Fusion → Gasless Rebalancing | Remove "gasless" + "80%" claim. Replace with "Efficient Off-Chain Execution" |
| 2 | Why Fusion → Risk Engine | Replace "circuit breakers" with "Guardian roles" + "market limits" |
| 3 | Why Fusion → Analytics | Replace "queryable via API" with "verifiable from smart contracts" |
| 4 | Hero subhead | Optional tone tweak — lead with institutional angle |
| 5 | Security stat → Chains | Either keep "4" (primary) or update to "6" (all deployed) |
| 6 | Comparison table | Flag competitive claims for team review |
| 7 | Protocol bar → Fluid | Replace with Moonwell or remove until fuse is confirmed |
| 8 | Footer → IPOR Index | Optional: rename to "IPOR Benchmarks" |