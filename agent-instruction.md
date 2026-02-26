# 🌿 Agent Instructions — Korean Skincare E-Commerce (Next.js)

> This file governs all agent behavior for building the Korean skincare brand e-commerce platform. Read this fully before writing any code, creating any files, or making any decisions.

---

## 📌 Project Overview

A clean, minimal Korean skincare e-commerce brand website built with **Next.js** (full-stack — frontend + API routes). The design language is pastel, soft, and premium — evoking the simplicity and elegance of K-beauty culture. User management will be added in a later phase.
NOTE All prices would be in pkr with ability to change currency.
---

## 🎨 Design System

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background / Base | `#F6F0D7` | Page backgrounds, cards, primary surfaces |
| Accent Light | `#C5D89D` | Buttons, tags, highlights, hover states |
| Accent Mid | `#9CAB84` | Secondary buttons, borders, dividers |
| Accent Dark | `#89986D` | Text on light backgrounds, active states, CTAs |

### Typography
- **Primary Font**: Use a clean serif or soft sans-serif (e.g., `Playfair Display` for headings, `Inter` or `DM Sans` for body)
- Headings: Large, airy, letter-spaced
- Body: 15–16px, comfortable line-height (~1.7)
- Avoid heavy/bold weights — keep it light and refined

### Spacing & Layout
- Generous whitespace — do not crowd elements
- Max content width: `1280px`, centered
- Section padding: `80px–120px` vertical
- Card padding: `24px–32px`
- Border radius: `12px–16px` for cards, `8px` for buttons

### Design Principles
- **Minimal** — remove anything that doesn't serve a purpose
- **Airy** — whitespace is a feature, not wasted space
- **Soft** — no harsh shadows; use subtle, diffused shadows
- **Intentional** — every element should feel placed with care
- **Korean aesthetic** — clean lines, understated elegance, nature-inspired

---

## 🖼️ Reference Images

> Attach your reference images below. The agent will use these to align visual decisions with the intended look and feel.

### Reference Image 1

![alt text](image.png)
_Description / notes: this is website logo 

### Reference Image 2
![alt text](image-1.png)
_Description / notes:_ this is the product hero reference design 1

### Reference Image 3
![alt text](image-2.png)
_Description / notes:_ this is the product hero reference design 2 

### Reference Image 4
![alt text](image-3.png)
_Description / notes:_ this is the product hero reference design 3


### Reference Image 4
![alt text](image-3.png)
_Description / notes:_ this is the product hero reference design 3
---

### Reference Image 5 
![alt text](image-4.png)
_Description / notes:_ this is the product hero reference design 4

### Reference Image 6
![alt text](image-5.png)
_Description / notes:_ this is the product hero reference design 5

### Reference Image 7
![alt text](image-6.png)
_Description / notes:_ this is the product hero reference design 6
 
### Reference Image 8
![alt text](image-7.png)
_Description / notes:_ this is the webpage refernce 
## 🗂️ Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── (store)/                # Store-facing pages
│   │   ├── page.tsx            # Homepage
│   │   ├── shop/               # Product listing
│   │   │   └── page.tsx
│   │   ├── product/[slug]/     # Product detail
│   │   │   └── page.tsx
│   │   ├── cart/               # Cart page
│   │   │   └── page.tsx
│   │   ├── checkout/           # Checkout flow
│   │   │   └── page.tsx
│   │   └── about/              # Brand story page
│   │       └── page.tsx
│   ├── api/                    # Next.js API routes
│   │   ├── products/
│   │   │   └── route.ts
│   │   ├── products/[id]/
│   │   │   └── route.ts
│   │   ├── cart/
│   │   │   └── route.ts
│   │   └── orders/
│   │       └── route.ts
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles + CSS variables
├── components/
│   ├── ui/                     # Reusable primitives (Button, Badge, etc.)
│   ├── layout/                 # Navbar, Footer, etc.
│   ├── product/                # ProductCard, ProductGrid, etc.
│   └── cart/                   # Cart drawer, CartItem, etc.
├── lib/
│   ├── db.ts                   # Database client (placeholder)
│   └── utils.ts                # Helper functions
├── types/
│   └── index.ts                # Shared TypeScript types
├── public/
│   └── images/                 # Static assets
└── styles/
    └── tokens.css              # Design token overrides
```

---

## 🧱 Pages to Build

### 1. Homepage (`/`)
- Full-width hero section with brand tagline and CTA
- Featured products section (4–6 cards)
- Brand values/philosophy strip (icons + short copy)
- "Best Sellers" horizontal scroll or grid
- Newsletter signup section
- Footer

### 2. Shop / Product Listing (`/shop`)
- Filter sidebar (skin type, concern, category)
- Product grid (responsive, 3–4 columns desktop)
- Sort dropdown
- Pagination or infinite scroll

### 3. Product Detail (`/product/[slug]`)
- Product images (gallery or carousel)
- Product name, price, short description
- Ingredient highlights
- Add to cart button
- How to use section
- Related products

### 4. Cart (`/cart`)
- Line items with thumbnail, name, quantity, price
- Subtotal + proceed to checkout CTA
- Empty cart state

### 5. Checkout (`/checkout`)
- Address form
- Order summary sidebar
- Payment placeholder (no real payment gateway yet)

### 6. About (`/about`)
- Brand story
- Founder note (optional)
- Brand values

---

## ⚙️ API Routes to Build

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/products` | List all products (with optional filters) |
| GET | `/api/products/[id]` | Get single product |
| POST | `/api/cart` | Add item to cart |
| GET | `/api/cart` | Get cart contents |
| DELETE | `/api/cart` | Remove item from cart |
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/[id]` | Get order details |

> All routes should return consistent JSON response shapes: `{ success: boolean, data: any, error?: string }`

---

## 🧩 Component Guidelines

### Buttons
- Primary: Background `#C5D89D`, text `#3D4A2E`, hover darken to `#9CAB84`
- Secondary: Outlined with `#9CAB84` border, transparent background
- Ghost: No border, subtle hover state
- Rounded corners: `8px`
- No harsh shadows — none or very soft

### Cards (Product Cards)
- Background: `#FFFFFF` or `#F6F0D7`
- Border: `1px solid #E8E2C8` or none with shadow
- Shadow: `0 2px 12px rgba(0,0,0,0.05)`
- Image: Aspect ratio 4:5 or 1:1, object-fit cover
- On hover: slight lift (`translateY(-4px)`), smooth transition

### Navigation
- Sticky top nav, minimal
- Logo left, links center or right
- Cart icon with item count badge
- Mobile: hamburger menu with slide-in drawer
- Background: `#F6F0D7` with subtle bottom border

### Footer
- 3–4 columns: Brand, Shop, Info, Social
- Background: `#9CAB84` or dark green tone
- Text: Off-white or `#F6F0D7`

---

## 🔧 Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (with custom theme tokens) |
| State (Cart) | Zustand or React Context |
| Database | Placeholder / JSON seed data to start |
| ORM | Prisma (set up schema, wire up later) |
| Auth | Deferred — placeholder routes only |
| Deployment | Vercel-ready |

---

## 🚫 Do Not

- Do not use harsh drop shadows or bright colors outside the palette
- Do not use default Tailwind blue/purple/red colors anywhere
- Do not build user authentication yet (deferred to Phase 2)
- Do not add payment gateway integration yet
- Do not use heavy component libraries (no MUI, no Chakra) — keep it custom
- Do not use serif fonts for body copy — only for display/headings

---

## ✅ Phase 1 Deliverables Checklist

- [ ] Project initialized with Next.js + TypeScript + Tailwind
- [ ] Design tokens configured in Tailwind config
- [ ] Global styles and CSS variables set up
- [ ] Navbar component
- [ ] Footer component
- [ ] Homepage built
- [ ] Shop listing page built
- [ ] Product detail page built
- [ ] Cart page built
- [ ] Checkout page (UI only, no payment)
- [ ] About page built
- [ ] All API routes scaffolded
- [ ] Seed data (JSON or mock) for products
- [ ] Responsive on mobile, tablet, desktop
- [ ] Consistent pastel theme across all pages

---

## 📝 Notes for Agent

- Always check this file before starting a new task
- When in doubt about visual decisions, refer to the reference images above
- Maintain the pastel theme strictly — no deviation in colors
- Every page should feel like it belongs to the same brand
- Keep components small, focused, and reusable
- Write clean, readable TypeScript — no `any` types unless absolutely unavoidable
- Use meaningful variable and component names
- Comment complex logic sections

---

*Last updated: Phase 1 — E-Commerce Foundation*
*Next phase: User Management, Auth, Payment Integration*