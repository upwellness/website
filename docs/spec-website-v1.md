# Spec · UP Wellness Main Website · v1

> **Status:** ✅ v1 shipped (25 พ.ค. 2569)
> **Repo:** github.com/upwellness/website
> **Tech:** Next.js 16 App Router · Tailwind v4 · React 19 · Lucide icons · Framer Motion

---

## 1 · Problem & Audience

UP Wellness ยังไม่มี landing page ที่:
- บอกอย่างชัดเจนว่าเราคือใคร / ทำอะไร
- แสดงความเป็นมืออาชีพ (ต่างจาก Amway distributor ทั่วไป)
- เปลี่ยน visitor → lead ผ่าน assessment quiz

**Target audience:**
- คนสุขภาพดีที่อยากดูแลตัวเองยาว (Longevity-minded · 30-55 ปี)
- คนน้ำหนักเกิน · ต้องการ structured program
- คนสนใจ community ใหม่ (Run · Bike · Ice Bath · Forest Bathing)

---

## 2 · Goals

| # | Goal | Metric |
|---|------|--------|
| 1 | Visitor เข้าใจ UP Wellness ใน 10 วินาที | Time to understand · scroll-depth Hero+Pillars |
| 2 | Lead capture ผ่าน assessment quiz | Conversion ~5-10% ของ traffic |
| 3 | ดูเหมือน Health Wellness Premium brand · ไม่เหมือน MLM | Subjective design quality + brand consistency |
| 4 | Community gateway | Community section click-through ≥ 15% |
| 5 | Mobile-first responsive | Lighthouse mobile ≥ 90 |

---

## 3 · Non-Goals

- ❌ E-commerce / Cart / Payment (Phase 2)
- ❌ Customer login / Dashboard (use UPLABS app · separate domain)
- ❌ Multi-language (Thai-first · English Phase 2)
- ❌ Blog/Articles (Phase 2)
- ❌ Heavy CMS (content in `lib/content.ts` for now · move to Notion/Sanity later)

---

## 4 · Information Architecture

Single-page scroll · 8 sections:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Header** | Brand · Nav · CTA · sticky liquid glass |
| 2 | **Hero** | Tagline · 3 pillar preview · 4 stats · 2 CTAs |
| 3 | **Pillars** | 3 cards · ลดน้ำหนัก / ดูแลสุขภาพ / Longevity |
| 4 | **Community** | 7 activities · Run · Bike · Ice Bath · Forest · Board · Finance · Education |
| 5 | **Services** | 4 service tiers · Free · UP Labs · CGM · Full Course + Supplement strip |
| 6 | **Assessment** | 5-question quiz → recommend path |
| 7 | **Testimonials** | 3 customer voices |
| 8 | **Contact** | LINE OA primary · Email · Meta info |
| - | **Footer** | Site links · brand · disclaimer |

---

## 5 · Brand Application

### Colors (UP Wellness CI)
- **Old Rose** `#8C4C4C` — primary · brand anchor
- **Wellness Green** `#396755` — secondary · Longevity hint
- **Cream** `#F5F0EB` — base background
- **Gold** `#B8965A` — accent for premium tier
- **Ink** `#1F1E1B` — primary text
- **Status:** darkened green/amber/red for accessibility on glass

### Typography
- **Cormorant Garamond** (serif · italic) — headlines · brand metric · pull quotes
- **Sarabun** — Thai body
- **JetBrains Mono** — eyebrows · labels · numerals

### Liquid Glass System
- `.liquid` core (55% white · blur 24px · saturate 180% · double inset shadow)
- `.liquid-hover` lift on hover
- `.liquid-header` sticky frosted (70% white)
- `.liquid-shine` reflective highlight
- `.liquid-dark` for footer
- `.liquid-rose / .liquid-green` tinted variants
- Aurora background · 3 floating orbs (rose · green · gold) with blur 140px

### A11y
- `prefers-reduced-motion` · disable orb animations
- `prefers-reduced-transparency` · collapse glass to solid
- ARIA on tabs · buttons · form fields
- Focus rings 2px rose

---

## 6 · Assessment Quiz Logic

5 questions → suggestion engine in `lib/content.ts` · `suggestPath()`

**Routing rules:**
- `urgency=urgent` → Full Course (health-first override)
- `weight=10+` OR `budget=high` → Full Course
- `goal=longevity` OR `age=50+` → UP Labs + CGM Add-on
- `goal=community` → Community Activities
- `weight=5-10` OR `budget=mid` → UP Labs
- Default → Health Check (free)

Each result includes: recommended service · reason · CTA + alternative CTA

---

## 7 · Tech Stack

- **Framework:** Next.js 16 (App Router · Turbo)
- **Styling:** Tailwind v4 + custom CSS in globals.css
- **Icons:** Lucide React (consistent stroke 2.25)
- **Fonts:** next/font for Cormorant + Sarabun + JetBrains
- **Quiz:** Pure client component · no backend yet
- **Lead capture:** TBD · Phase 1.5 will POST to LINE webhook or Supabase

---

## 8 · Phase Plan

| Phase | Scope |
|-------|-------|
| **v1 (now)** | 8 sections · assessment quiz · liquid glass · responsive |
| **v1.5** | Lead capture API → LINE webhook or Supabase healthcheck_leads |
| **v2** | English version · OG images · Sitemap · Analytics |
| **v3** | Blog · Customer stories · Photo gallery |

---

## 9 · File Structure

```
upwellness/
├── app/
│   ├── globals.css       # UP Wellness brand + liquid glass system
│   ├── layout.tsx        # Aurora bg + fonts + meta
│   └── page.tsx          # Composes all sections
├── components/
│   ├── Header.tsx        # Sticky frosted nav + mobile toggle
│   ├── Hero.tsx          # Tagline + stats + pillar preview
│   ├── Pillars.tsx       # 3 service pillars
│   ├── Community.tsx     # 7 activity cards
│   ├── Services.tsx      # 4-tier ladder + supplement strip
│   ├── Assessment.tsx    # 5-question quiz + suggestion
│   ├── Testimonials.tsx  # 3 voices
│   ├── Contact.tsx       # LINE + Email
│   └── Footer.tsx        # Site links + disclaimer
├── lib/
│   └── content.ts        # ALL copy · stats · quiz · suggestion engine
└── docs/
    └── spec-website-v1.md
```

---

## 10 · Editorial Guidelines

Per UP Wellness `CLAUDE.md`:
- Voice: **Sage + Everyman + Caregiver · "หมอที่เป็นเพื่อน"**
- Tone: warm + knowledgeable · evidence-based · never MLM-hype
- No filler openers · open with insight/fact
- Use research citations where possible
- ⚖️ Always disclose: "ไม่ทดแทนการวินิจฉัยทางการแพทย์"
