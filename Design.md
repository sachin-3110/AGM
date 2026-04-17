# Divya Gems — E-Commerce Design Guide
> Gems & Rudraksha Store | HTML + CSS | Indian Market Focus

---

## Project Folder Structure

```
divya-gems/
├── DESIGN_GUIDE.md               ← This file
├── shared/
│   ├── navbar.html               ← Reusable navbar snippet
│   ├── footer.html               ← Reusable footer snippet
│   ├── styles/
│   │   ├── global.css            ← CSS variables, reset, typography
│   │   ├── navbar.css
│   │   └── footer.css
│   └── images/                   ← Logos, icons, trust badges
│
├── pages/
│   ├── home/
│   │   ├── index.html
│   │   └── home.css
│   ├── shop/
│   │   ├── index.html
│   │   └── shop.css
│   ├── product-detail/
│   │   ├── index.html
│   │   └── product-detail.css
│   ├── gemstones/
│   │   ├── index.html
│   │   └── gemstones.css
│   ├── rudraksha/
│   │   ├── index.html
│   │   └── rudraksha.css
│   ├── bracelets/
│   │   ├── index.html
│   │   └── bracelets.css
│   ├── mala/
│   │   ├── index.html
│   │   └── mala.css
│   ├── cart/
│   │   ├── index.html
│   │   └── cart.css
│   ├── checkout/
│   │   ├── index.html
│   │   └── checkout.css
│   ├── about/
│   │   ├── index.html
│   │   └── about.css
│   ├── contact/
│   │   ├── index.html
│   │   └── contact.css
│   ├── blog/
│   │   ├── index.html
│   │   └── blog.css
│   ├── gem-recommendation/
│   │   ├── index.html
│   │   └── gem-recommendation.css
│   └── buying-guide/
│       ├── index.html
│       └── buying-guide.css
```

---

## Global Design Tokens (`global.css`)

```css
:root {
  /* Brand Colors */
  --color-bg:         #0e0b07;   /* deep dark brown-black */
  --color-surface:    #1a1510;   /* card/section background */
  --color-border:     #2e2618;   /* subtle dividers */
  --color-gold:       #c9a84c;   /* primary accent — gold */
  --color-gold-light: #e8c97a;   /* hover gold */
  --color-cream:      #f5efe0;   /* primary text */
  --color-muted:      #8a7d65;   /* secondary text */
  --color-red:        #8b1a1a;   /* sale / urgency badges */

  /* Typography */
  --font-display: 'Cormorant Garamond', serif;  /* headings — luxe editorial */
  --font-body:    'Nunito Sans', sans-serif;    /* body — clean, readable */
  --font-hindi:   'Tiro Devanagari Sanskrit', serif; /* Hindi labels */

  /* Spacing scale */
  --space-xs: 4px;  --space-sm: 8px;  --space-md: 16px;
  --space-lg: 24px; --space-xl: 48px; --space-2xl: 80px;

  /* Radii */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px;
}
```

**Font imports (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600&family=Tiro+Devanagari+Sanskrit&display=swap" rel="stylesheet">
```

---

## Shared Components

---

### NAVBAR (`shared/navbar.html`)

**Layout:** Two-row sticky header on dark background.

**Row 1 — Utility Bar** (thin, `background: #000`, small text)
- Left: "Pay Online" | "New Arrival" | "Cash on Delivery" | "Free Shipping" | "Blogs"
- Right: WhatsApp icon + number | Wishlist (heart icon + count) | Login/Register

**Row 2 — Main Navbar**
- Left: Hamburger menu icon
- Center: Logo (text-based or `images/logo.png`)
- Right: Search bar (pill-shaped) | Cart icon (bag) + count badge | Store Locator dropdown

**Mega Menu** — activates on hover over nav items:
- `Gemstones` → 4-column mega dropdown: Rashi Navratna | Exclusive Collection | Semi Precious | Birthstones (each with small gem icon + name)
- `Rudraksha` → 4-column grid: 1 Mukhi through 21 Mukhi + Special types
- `Bracelets`, `Mala`, `Rings` → 2-column dropdowns with product links

**Mobile:**
- Collapses to hamburger → full-screen slide-in drawer
- Logo centered, cart + search icons right side

---

### FOOTER (`shared/footer.html`)

**Layout:** Dark background (`--color-bg`), 4-column grid on desktop, stacked on mobile.

**Col 1 — Brand**
- Logo + tagline: "100% Natural | Lab Certified | Since 2010"
- Social icons: Facebook, Instagram, Twitter, LinkedIn, YouTube
- Trust badges: Google Rating 4.9★, 1 Lakh+ satisfied customers

**Col 2 — Gem Mines Advantage**
- Links: Free Gems Recommendation, Buying Guide, Customer Reviews, FAQs, Education Center, Contact Us, Birthstone Selection

**Col 3 — About**
- Links: About Us, Corporate Gifting, Cart, Checkout, Must Watch, Testimonials & Awards, Shop, Privacy Policy

**Col 4 — Location**
- Karol Bagh Head Office (address, phone, working hours, map link + 3 store photos)
- Gurugram Branch (address, phone, working hours, map link + 2 store photos)

**Bottom Bar:**
- Policy links: Privacy | Shipping | Return & Exchange | Terms
- Payment icons (Visa, Mastercard, UPI, Paytm, COD)
- Copyright text
- WhatsApp floating button (fixed bottom-right, green circle)

---

## Pages

---

### 1. HOME PAGE (`pages/home/`)

**Purpose:** Trust-first landing page. Convert visitors via authority, product browsing, astrology hook.

**Sections top to bottom:**

- **Hero Carousel** — Full-width slider, 3–4 dummy poster slides. Dark overlay with centered headline like _"India's Most Trusted Gemstone Store"_, subtext in Hindi, and two CTAs: "Shop Gemstones" + "Free Recommendation". Auto-play with dot indicators.

- **Category Quick Links** — Horizontal icon row: Gemstone | Rudraksha | Bracelets | Mala | Rings | Free Gems | Crystal Products. Each is a circular image + label. Scrollable on mobile.

- **Gem Finder Widget** — Card with 3 dropdowns: Select Gemstone / Select Carat / Select Price. "Search" button in gold. Light bg card on dark section.

- **Navratna Products Grid** — Section heading: _"Products Of Trusted Excellence"_. 5-column responsive grid (2-col on mobile). Each card: product image, Hindi + English name, planet/benefit line (e.g. "Brihaspati | Marriage | Career"), "Shop Now" link.

- **Collections Tabbed Section** — Tabs: Rings | Mala | Bracelets. Each tab shows a horizontal scroll row of 10 product cards (image + name only).

- **Rudraksha Banner Strip** — 6 poster-style cards in a horizontal scroll: Nepali Mala, Kamal, Ganesh, Nag, Gauri Shankar, Premium. Each has image + title overlay.

- **Certification Strip** — Heading: _"Every Gemstone comes with Govt. or International Lab Certificate"_. Auto-scrolling logo ticker of 8–10 lab cert logos (dummy placeholder rectangles).

- **Free Horoscope CTA** — Split layout: Left side text (_"Which Birthstone will solve your problem?"_) with WhatsApp + Call buttons. Right side: illustration/dummy astrology chart image.

- **Celebrity Testimonials Carousel** — Heading: _"Transformed more than 1.5 Million Lives"_. Slider with celeb photo (circle) + quote + name + designation. 3 visible at a time on desktop, 1 on mobile.

- **Trust Logos Strip** — Auto-scrolling ticker of media/trust partner logos (dummy rectangles with text labels).

- **Customer Reviews** — 2-column grid of text review cards. Each: star rating, quote, customer name, location.

- **Gem Directory** — Accordion-style or tabbed: Rashi Navratna | Exclusive | Semi Precious | Birthstones. Icon grid inside each tab.

---

### 2. SHOP PAGE (`pages/shop/`)

**Purpose:** Full product catalog with filtering.

**Layout:**
- **Left Sidebar** (sticky, 260px wide): Filter panels (collapsible accordions)
  - Category checkboxes
  - Price range slider (₹0 – ₹5,00,000)
  - Carat weight checkboxes
  - Planet / Rashi filter
  - Certification filter
  - "Apply Filters" gold button + "Clear All" link
- **Right Content Area:**
  - Top bar: "Showing X products" + Sort dropdown (Relevance / Price Low-High / Newest) + Grid/List toggle
  - Product grid: 3-col desktop, 2-col tablet, 1-col mobile
  - **Product Card:** Image (hover shows second image), badges (CERTIFIED / NEW / BESTSELLER), gem name + Hindi name, price (with ₹ symbol), star rating (1–5), "Add to Cart" button on hover
  - Pagination bar at bottom

**Mobile:** Sidebar hidden behind "Filter" sticky bottom bar button; slides up as drawer.

---

### 3. PRODUCT DETAIL PAGE (`pages/product-detail/`)

**Purpose:** Convert a single product. High-trust page with certification proof.

**Layout:**
- **Breadcrumb** — Home > Gemstones > Yellow Sapphire > Product Name
- **Left — Image Gallery:**
  - Main large image
  - Thumbnail strip below (4–5 images)
  - "Lab Certificate" image thumbnail with lock icon
  - Zoom on hover
- **Right — Product Info:**
  - Category tag (pill) + Stock badge ("Only 3 Left!")
  - Product name (large, `--font-display`) + Hindi name
  - Planet + Benefit tags (e.g. 🪐 Jupiter | 💼 Career | 💍 Marriage)
  - Price: ₹XX,XXX with original crossed-out price
  - Weight selector: Ratti options (3, 5, 7, 9 Ratti) as toggle buttons
  - Metal selector: Panchdhatu | Silver | Gold
  - "Add to Cart" (gold fill) + "Buy Now" (outline) buttons
  - Trust icons row: ✅ Lab Certified | 🚚 Free Shipping | 🔁 Easy Return | 📞 Expert Advice
  - WhatsApp inquiry button
- **Below fold:**
  - Tabbed section: Description | How to Wear | Certification | FAQs
  - Certification images gallery (dummy cert images)
  - "Related Products" horizontal scroll row

---

### 4. GEMSTONES CATEGORY PAGE (`pages/gemstones/`)

**Purpose:** Landing for all gemstone categories. Educational + browsing.

**Sections:**
- **Hero Banner** — Full-width dummy poster: "Natural Certified Gemstones" with shimmer overlay
- **Filter Tabs** — Rashi Navratna | Exclusive Collection | Semi Precious | Birthstones (horizontal pill tabs)
- **Category Cards Grid** — 4-col grid (2-col mobile). Each card: gem image, name in English + Hindi, "Planet: X" label, "Shop Now" CTA. Hover lifts card with gold border glow.
- **Educational Strip** — "Why wear a Gemstone?" — 3 columns: icon + short para (Astrological Benefits | Healing Properties | Certified Quality)
- **Birthstone Calendar** — 12-month grid, each cell: month name, gem name, small gem image, link

---

### 5. RUDRAKSHA PAGE (`pages/rudraksha/`)

**Purpose:** Category hub for all Rudraksha types. Spiritual tone.

**Sections:**
- **Hero Banner** — Warm amber/brown tones dummy poster: "100% Nepali Rudraksha — Energised & Certified"
- **Mukhi Selector Grid** — Large number grid (1 to 21 Mukhi) — each cell: big number, name, deity, benefit. Hover reveals "Shop Now" overlay.
- **Special Rudrakshas** — Horizontal card row: Gauri Shankar | Ganesh | Nag | Kamal | Garbh Gauri (image + title + short description)
- **Rudraksha Mala Section** — 3-col grid of mala products
- **Benefits Infographic** — Illustrated vertical infographic (dummy): How Rudraksha works, How to wear, How to energise
- **Mukhi to Planet Mapping Table** — Clean table: Mukhi # | Ruling Planet | Benefits

---

### 6. BRACELETS PAGE (`pages/bracelets/`)

**Purpose:** Category page for crystal & gemstone bracelets.

**Sections:**
- **Hero Banner** — Dummy poster with stacked bracelets visual. Headline: "Healing Bracelets for Every Purpose"
- **Purpose Filter Pills** — Horizontal scrollable tags: All | Healing | Wealth | Protection | Love | 7 Chakra | Rudraksha
- **Product Grid** — 4-col grid (2 on mobile). Card: image, bracelet name, benefit tag, price, Add to Cart
- **7 Chakra Feature** — Full-width banner card: "Balance Your 7 Chakras" with chakra colour strip + CTA

---

### 7. MALA PAGE (`pages/mala/`)

**Purpose:** Category page for all malas (prayer beads).

**Sections:**
- **Hero Banner** — Earthy dummy poster: "Sacred Jaap Malas — 108 Beads, Pure Intentions"
- **Filter by Material** — Tabs: All | Rudraksha | Gemstone | Tulsi | Sandalwood | Crystal
- **Product Grid** — Same structure as bracelets page
- **How to Use a Mala** — 3-step visual guide (dummy icons): Choose → Energise → Chant

---

### 8. CART PAGE (`pages/cart/`)

**Purpose:** Review items before checkout.

**Layout (2-col desktop, stacked mobile):**
- **Left — Cart Items:**
  - Each row: product image (small) | name + variant | quantity stepper | unit price | row total | remove ✕
  - "Continue Shopping" link
- **Right — Order Summary Card:**
  - Subtotal, Discount, Shipping (Free), GST
  - Bold Total
  - Coupon code input + "Apply" button
  - "Proceed to Checkout" gold button
  - Trust icons below: Free Shipping | Secure Payment | Easy Returns

---

### 9. CHECKOUT PAGE (`pages/checkout/`)

**Purpose:** Complete purchase. Clean, distraction-free.

**Layout (2-col desktop):**
- **Left — Form:**
  - Billing details: Name, Phone, Email, Address, Pincode, City, State
  - Shipping same as billing checkbox
  - Order notes textarea
- **Right — Order Summary:**
  - Itemised list (compact), total
  - Payment method radio buttons: UPI | Card | Net Banking | COD
  - UPI QR code shown when UPI selected (dummy QR image)
  - "Place Order" gold button
  - SSL badge + payment logos

---

### 10. ABOUT US PAGE (`pages/about/`)

**Purpose:** Build trust. Story of the brand.

**Sections:**
- **Hero** — Full-width dummy poster: founder image + "Trusted Since 2010"
- **Our Story** — 2-col: Left image of showroom (dummy), Right text about founding, mission, 1.5M+ customers
- **Why Choose Us** — 4-icon grid: Lab Certified | 15+ Years Experience | Expert Astrologers | Pan India Delivery
- **Awards & Recognition** — Horizontal scroll of award badges/plaques (dummy images)
- **Celebrity Endorsements** — Grid of celeb photo cards (dummy posters) + quote
- **Our Showrooms** — 2-col cards: Karol Bagh + Gurugram — address, hours, map link, 3 store photo thumbnails
- **Team** — 3 member cards (dummy): photo, name, designation

---

### 11. CONTACT PAGE (`pages/contact/`)

**Purpose:** Enable inquiries, showroom visits, callback requests.

**Sections:**
- **Hero** — Simple banner: "We're Here to Help"
- **Contact Methods Strip** — 3 cards: 📞 Call Us | 💬 WhatsApp | 📧 Email
- **Contact Form** — Name, Phone, Email, Query type dropdown, Message, Submit button
- **Showroom Info** — 2-col: each with address, phone, hours, embedded Google Maps placeholder (dummy grey box with "Map" label)
- **FAQ Accordion** — 5–6 common questions expanded by default

---

### 12. BLOG PAGE (`pages/blog/`)

**Purpose:** SEO + education hub. Topics: gem benefits, how-to-wear, astrology.

**Layout:**
- **Featured Post** — Full-width card at top: large image, category tag, title, excerpt, Read More
- **Post Grid** — 3-col grid of blog cards: image, category pill, title, date, 2-line excerpt, Read More
- **Sidebar (desktop):** Popular posts list, category tags cloud, Subscribe widget (email input)
- **Pagination** at bottom

---

### 13. FREE GEM RECOMMENDATION PAGE (`pages/gem-recommendation/`)

**Purpose:** Lead capture via astrology consultation. High-converting page.

**Sections:**
- **Hero** — Centered: "Find Your Perfect Gemstone — Free" subtext: "Based on your birth chart & life goals". Background: dark with subtle mandala pattern (CSS only).
- **Step-by-step Form (Wizard style):**
  - Step 1: Basic info — Name, DOB, Birth Time, Birth Place
  - Step 2: Your concerns — checkboxes: Career | Marriage | Health | Business | Education | Other
  - Step 3: Budget range — slider or radio: Under ₹5000 | ₹5000–₹20000 | ₹20000+
  - Submit: "Get My Recommendation" gold button
- **How It Works** — 3-step: Fill Form → Expert Review → Get Recommendation (within 24 hrs)
- **Testimonials** — 3 cards from people who used the free service
- **WhatsApp CTA** — Large banner: "Prefer to talk? Chat with our Gemologist now" + WhatsApp button

---

### 14. BUYING GUIDE PAGE (`pages/buying-guide/`)

**Purpose:** Educate buyers, build SEO, reduce purchase anxiety.

**Sections:**
- **Hero Banner** — "How to Buy the Right Gemstone — Expert Guide"
- **Guide Index** — Sticky left sidebar with anchor links; content on right
- **Guide Sections:**
  - What is a Ratti / Carat?
  - How to check authenticity
  - What is a Lab Certificate?
  - How to wear a gemstone (metal, finger, day, time)
  - Gemstone for each planet (table)
  - Red flags when buying online
- **Each section:** Has a dummy illustrative image + bullet points
- **CTA at end:** "Still confused? Get a Free Recommendation →"

---

## Design Notes for All Pages

- **Every page includes:** `shared/navbar.html` at top + `shared/footer.html` at bottom
- **Images:** All images are dummy posters — use `<div class="poster-placeholder">` with CSS gradient backgrounds and overlaid text if actual images are not available. Folder: `pages/[page]/images/`
- **Hover states:** All product cards lift (`transform: translateY(-4px)`) with a gold border glow (`box-shadow: 0 0 0 2px var(--color-gold)`)
- **Buttons:** Primary = gold fill + dark text; Secondary = outlined gold; Destructive = red
- **Badges:** "CERTIFIED" (green), "NEW" (blue), "BESTSELLER" (gold), "SALE" (red) — pill shaped, absolute positioned on product images
- **WhatsApp FAB:** Fixed bottom-right on every page — green circle, WhatsApp icon, subtle bounce animation
- **Mobile-first:** All grids collapse to 1–2 col, sidebars become bottom drawers, mega menus become accordions in drawer