---
name: Garuda Academic Excellence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4f4535'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#817563'
  outline-variant: '#d3c4af'
  surface-tint: '#7b5800'
  primary: '#785600'
  on-primary: '#ffffff'
  primary-container: '#986d00'
  on-primary-container: '#fffbff'
  inverse-primary: '#f7bd48'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#085ea2'
  on-tertiary: '#ffffff'
  tertiary-container: '#3477bc'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea6'
  primary-fixed-dim: '#f7bd48'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5d4200'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a1c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#004880'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style
The design system is engineered to evoke feelings of institutional authority, high achievement, and unwavering support. It targets serious candidates preparing for civil service examinations, requiring a visual environment that balances the rigor of academia with the prestige of a premium coaching institute.

The aesthetic follows a **Corporate / Modern** style with **Minimalist** influences. It utilizes significant whitespace to reduce cognitive load during study sessions, while high-contrast accents in gold signal success and excellence. The overall mood is "Prestige Education"—clean, structured, and goal-oriented.

## Colors
The palette is rooted in a "Deep Gold" primary to mirror the institutional logo and signify the value of the education provided. 

- **Primary (#B8860B):** Used for branding elements, active states, and primary iconography.
- **Secondary (#1A1A1A):** Used for deep backgrounds, footers, and primary headings to establish a grounded, professional foundation.
- **Accent (#FFD700):** Reserved exclusively for Call-to-Action (CTA) buttons and critical highlights to ensure maximum visibility and a sense of urgency/reward.
- **Surface & Backgrounds:** A pure white base is supplemented by light gray (#F5F5F5) sections to differentiate content blocks and create a sense of depth without clutter.

## Typography
The typography strategy pairs the geometric strength of **Montserrat** for headings with the high legibility of **Inter** for body text.

- **Headings:** Set in bold weights to convey authority. Large display sizes use slight negative letter-spacing for a tighter, more modern "editorial" feel.
- **Body:** Prioritizes readability for long-form educational content. Line heights are generous (1.5x minimum) to prevent eye fatigue during extended reading.
- **Labels:** Use Inter in semi-bold or bold, often in all-caps for metadata, tags, and small navigation items to distinguish them from narrative text.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Grid System:** On desktop, use a 1200px max-width container to maintain focus. Gutters are fixed at 24px to ensure breathing room between instructional cards.
- **Rhythm:** An 8px base unit governs all padding and margins. Vertical rhythm is strictly enforced with 80px gaps between major sections to maintain a clean, academic structure.
- **Responsive Behavior:** Cards reflow from a 3-column layout on desktop to a single-column stack on mobile. Margins reduce from 48px to 16px to maximize screen real estate for content on smaller devices.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Surface Strategy:** The primary background is white. Secondary content blocks use a light gray (#F5F5F5) "well" to group related information.
- **Shadows:** Cards and modal elements use "Whisper Shadows"—highly diffused, low-opacity (6-10%) shadows with a subtle warm tint to match the gold primary color. This prevents the UI from feeling "heavy" while still providing clear tactile separation.
- **Dividers:** Horizontal lines use a subtle 1px stroke in #E0E0E0 to organize lesson lists and curriculum details without creating visual noise.

## Shapes
The shape language is **Rounded (Level 2)**. 

Standard UI components like input fields and small buttons use a 0.5rem (8px) radius. Larger containers, such as feature cards and promotional banners, use `rounded-lg` (1rem / 16px) to appear more approachable and modern. CTA buttons may occasionally use a pill-shape for maximum distinction in high-conversion areas.

## Components
- **Buttons:** Primary CTAs use the Bright Yellow/Gold (#FFD700) with black text for maximum contrast. Secondary buttons use a Deep Gold (#B8860B) outline. All buttons feature a subtle scale-up effect on hover.
- **Feature Cards:** White backgrounds with a 1px soft border and a low-opacity ambient shadow. Icons within cards should be "duotone," utilizing both the Primary and Accent gold shades.
- **Inputs:** Clean, outlined fields with a 2px Deep Gold border on focus. Labels should always sit above the field in `label-md` style.
- **Progress Bars:** Essential for an educational platform, these use a light gray track with a Deep Gold fill to show course completion.
- **Lists:** Course curriculum lists use clear dividers and "chevron-right" indicators for nested content, maintaining a high-density but legible data structure.