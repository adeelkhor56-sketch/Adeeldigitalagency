# Adeel Digital Agency – Motion & Animation Architecture Notes

Based on the reference agency architecture (Seoinux SEO & Digital Marketing Agency) and high-end Awwwards-standard interactions, this document defines the motion choreography, triggers, easing curves, and duration specifications.

---

## 1. Global & Ambient Interactions

### A. Custom Cursor Follower & Glow (Desktop)
- **Visuals**: Gold ambient halo with a high-precision center dot (`#F5B301`).
- **Trigger**: Mouse move (`pointermove`).
- **Duration / Easing**: Inner dot: instantaneous `0s`. Outer halo: Lerp factor `0.15` (fluid lag via requestAnimationFrame or Framer Motion spring `stiffness: 450, damping: 28`).
- **Hover States**: Expands to `scale(2.2)` with `backdrop-filter: invert(1)` or gold rim highlight when hovering links, buttons, and clickable cards.

### B. Lenis Smooth Scroll & Scroll Progress Indicator
- **Scroll Engine**: Lenis smooth scroll (`lerp: 0.08`, `wheelMultiplier: 0.9`, `smoothWheel: true`).
- **Progress Bar**: Fixed top `2px` gold gradient line (`#F5B301` to `#C98A00`). `scaleX` bound to `scrollYProgress` with zero latency.

### C. Sticky Smart Header / Navbar
- **Trigger**: Scroll direction change.
- **Scroll Down (> 80px)**: Header translates up `translateY(-100%)`, duration `0.35s`, easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Scroll Up**: Slides back into view with frosted glass background (`backdrop-blur-md`, `rgba(10, 10, 10, 0.85)` and subtle gold bottom border).
- **Mega-Dropdown (Services)**: Fade-down reveal `y: -10 -> 0`, `opacity: 0 -> 1`, duration `0.25s`, spring easing.

---

## 2. Section-by-Section Motion Specifications

### A. Hero Section
1. **Headline Reveal**: Split-word / split-line reveal, each word masks up from `y: 40px` to `0`, `opacity: 0 -> 1`, duration `0.8s`, stagger `0.06s`, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **Hero Image Frame (`hero-adeel.jpg`)**:
   - Subtle vertical float: `y: [-8, 8, -8]`, duration `5s`, `easeInOut`, infinite loop.
   - Dual ambient gold spotlight rings pulsing gently behind image (`scale: [1, 1.08, 1]`, opacity `0.4 <-> 0.7`).
3. **Floating Stat Cards ("127k Visitors / 75% Growth")**:
   - Entrance: `scale: 0.8`, `y: 30`, `opacity: 0`, delay `0.6s`, spring overshoot.
   - Idle animation: Floating on sine wave counter-direction to portrait (`y: [6, -6, 6]`, duration `4.2s`).

### B. 4-Step Process Section
1. **Connecting Line**: SVG line path drawing (`pathLength: 0 -> 1`) synchronized with scroll position across the 4 steps.
2. **Step Nodes**: As each step reaches viewport `center - 100px`, the circular icon badge pulses with a gold expanding wave ring (`scale: 1 -> 1.4`, `opacity: 1 -> 0`), card flips subtly into view `y: 24 -> 0`, `opacity: 0 -> 1`, duration `0.5s`.

### C. About Teaser Section
1. **Image Frame (`about-adeel.jpg`)**:
   - Parallax scrolling: Image shifts `translateY(-40px)` as user scrolls through section.
   - Experience Badge: Counter clockwise rotate badge (`rotate: 0 -> 360` over `20s`, linear infinite) with "Years of Proven Growth" typography.
2. **"Need Custom?" & "Live-Chat" Quick Cards**:
   - Slide in from left/right staggered on enter.
   - Hover: 3D tilt perspective (`rotateX`, `rotateY` via mouse coordinates) + gold border luminance.

### D. Dark Services Section & Rocket Animation
1. **Rocket & Exhaust Launch Sequence**:
   - Trigger: Scroll enters the services container.
   - Movement: Vector rocket rises along an upward diagonal curve `y: 120px -> -60px` with slight dynamic bank angle `rotate: -8deg -> 4deg`.
   - Exhaust trail: Animated particle / cloud smoke SVG filters expanding and fading downwards, with glowing gold-orange flame flicker (`scaleY: [1, 1.3, 1]`, duration `0.2s` infinite).
2. **6 Service Cards**:
   - Staggered reveal: `y: 50px -> 0px`, `opacity: 0 -> 1`, stagger `0.1s`.
   - Card Hover: Smooth border glow (`box-shadow: 0 0 25px rgba(245, 179, 1, 0.25)`), icon shifts upward `y: -4px`, learn more arrow translates `x: +6px`.

### E. "Why Choose Us" & Strategy Section
1. **Numbered Sequence**: Numbers (`01`, `02`, `03`, `04`) mask reveal with a metallic gold gradient stroke.
2. **Strategy Growth Chart**:
   - SVG multi-point spline line graphs draw dynamically (`strokeDashoffset` from `100% -> 0%`) over `1.4s` when in view.
   - Data marker tooltips pop open with bounce effect.
3. **Target & Arrow Graphic**:
   - Arrow zooms in from top-right striking center target, triggering concentric gold shockwave pulses (`scale: 1 -> 2`, `opacity: 0.8 -> 0`).

### F. Testimonials Slider & Rating Box
1. **Slider Mechanics**: Smooth touch-drag and keyboard navigation, infinite carousel loop, smooth transition `0.6s` cubic easing.
2. **Rating Box (4.9 / 5.0 Rating)**:
   - Floating glass badge with shimmering gold border and active animated star fill sequence.

### G. FAQ Accordion
1. **Expand / Collapse**: Framer Motion `AnimatePresence` height animation (`height: 0 -> auto`, `opacity: 0 -> 1`), duration `0.35s`, easing `cubic-bezier(0.04, 0.62, 0.23, 0.98)`.
2. **Plus / Minus Icon**: Smooth `rotate: 0deg -> 45deg` or `180deg`.

---

## 3. Accessibility & Performance Constraints
- **Prefers-Reduced-Motion**: Media query check automatically disables continuous floating, parallax, and translates; keeps clean instant fades (`opacity: 0 -> 1`, `0.2s`).
- **Mobile Optimizations**: 3D tilt and custom mouse follower disabled on screens `< 1024px` to preserve 60-120fps mobile refresh rates.
- **Hardware Acceleration**: All active animations utilize `transform` (`translate3d`, `scale`) and `opacity` only, preventing layout reflows and paint thrashing.
