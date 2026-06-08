# TALLER BC Landing — Setup Report

**Date:** 2026-06-08  
**Author:** Masha-Kostil  
**Local path:** `C:\Projects\taller_landing`  
**GitHub repo (target):** `Vh301/TALLER_LANDING` — create empty repo on GitHub, then `git push -u origin main`  
**Vercel project:** `taller-landing`  
**Production URL:** https://taller-landing.vercel.app

---

## Summary

Separate public landing for **TALLER BC — TALLER Builders Club**. No jetton deploy scripts, no poster bot, no Supabase, no secrets.

| Item | Value |
|------|-------|
| Stack | Next.js 16, TypeScript, Tailwind CSS v4 |
| Branch | `main` |
| Storage backend | N/A (static frontend) |
| On-chain ops | **None** |
| `.env.local` | **Not used / not committed** |

---

## Token contract (inserted from TALLER docs)

Source: `Taller_jetton` → `reports/TALLER_TLR_MAINNET_FINAL_LIFECYCLE_REPORT_2026-06-08.md`

| Field | Value |
|-------|-------|
| Master (Jetton) | `EQBbbUvr84qdfAAWUL8ZjRvO3FzEDKsLEFMiKlXg7d9u17Rq` |
| Explorer | https://tonviewer.com/EQBbbUvr84qdfAAWUL8ZjRvO3FzEDKsLEFMiKlXg7d9u17Rq |

---

## Placeholders

| Item | Status |
|------|--------|
| Join Community link | `#community` section — channels TBD |
| OpenGraph image | not set (metadata title/description only) |
| Community Telegram/URL | not linked yet |

---

## Files created

- `app/layout.tsx` — SEO + OpenGraph metadata
- `app/page.tsx` — one-page landing (all sections)
- `app/globals.css` — dark calm theme
- `lib/constants.ts` — public token facts
- `README.md`
- `reports/TALLER_LANDING_SETUP_REPORT_2026-06-08.md`

---

## Moderation-safe copy

Landing avoids investment/trading/yield language. Utility framing only: club access, participation, contributor recognition.

---

## Git safety

- No `.env.local`
- No API keys, tokens, or database URLs in tracked files
- Separate repo from `Taller_jetton`
