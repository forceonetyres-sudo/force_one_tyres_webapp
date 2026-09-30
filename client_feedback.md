# Client Feedback & Action Items

## 1. General Aesthetic & Theming
- [x] **Feedback:** "The site look too generic, dull and normal."
  - **Action:** Upgraded UI with modern glassmorphism, hover animations, and a polished dark/light mode toggle system.
- [x] **Feedback:** "Colouring part is typical, make it like older one like using dark blood red or marron red and blue with a white lettering that kind of thing can give good impact."
  - **Action:** Implemented deep maroon/blood red and deep blue typography, accents, and buttons. 
- [x] **Feedback:** "The colouring mention by client is for theme or typography etc not in the images okkie."
  - **Action:** Confirmed color palette is strictly for typography/UI elements, not for tinting photographs.

## 2. Hero & Background Images
- [x] **Feedback:** "Force one mail page background must be very attractive and dynamic one is must."
  - **Action:** Replaced static background with a dynamic hero image.
- [x] **Feedback:** "The red maroon/blood maroon not look good in hero section image of every route, we need to remove it."
  - **Action:** Removed the red/blue gradient overlays from all hero images and replaced them with a clean, cinematic dark overlay (`bg-black/60`).
- [x] **Feedback:** "Images used in home page only good in dark mode, in light mode it sucks."
  - **Action:** Reverted the "Find Your Perfect Tyre" image cards to always use a dark overlay with white text to preserve image vibrancy and contrast, even in Light Mode.

## 3. Brand Showcase Section
- [x] **Feedback:** "Proudly present 4 brands, brand namer in colour bigger for and like pop up of each brands if I put cursor to it."
  - **Action:** Added pop-up (`scale-110`) hover animations to the brand display.
- [x] **Feedback:** "This is not a good UX to showcase brand just show in one horizontal line in both desktop and mobile view."
  - **Action:** Changed desktop layout to use flex-wrap, and updated mobile layout to a responsive grid.
- [x] **Feedback:** "Add both horizontal and vertical scrolling in home page brand section (like for mobile user if i see one logo i scroll down and then next logo show like that)."
  - **Action:** Implemented a 2x2 grid for mobile, allowing users to view logos horizontally and scroll down for more.
- [x] **Feedback:** "The logo are good just remove the text."
  - **Action:** Removed the text labels underneath the brand logos on the homepage.
- [x] **Feedback:** "Make/crop whatever you want, the logo so that all font size of logo text look same and look like size of duraman tyres logo text."
  - **Action:** Ran a Python script to automatically crop all empty white/transparent padding from the logo files, ensuring they scale identically within their containers.

## 4. Logo Files & Transparent Backgrounds
- [x] **Feedback:** "Just remove white bg accelera make it transparent just like other."
  - **Action:** Swapped the JPG Accelera logo for a transparent PNG version.
- [x] **Feedback:** "For logo you need to understand when to use white when to use black, just correct the logo of accelera in /brand route."
  - **Action:** Configured the transparent Accelera PNG to dynamically invert to white in Dark Mode, and correctly render as black in Light Mode using `brightness-0`.
- [x] **Feedback:** "Use force one tyre logo not a text in nav logo."
  - **Action:** Removed the text-based logo in the Navbar and replaced it with `LOGO-Transparent.png`.

## 5. Page Layouts & Specific Components
- [x] **Feedback:** "On right side, wordings on mail Paige top hope services etc bit more bigger fond and bold character."
  - **Action:** Increased font size and weight for the navigation links.
- [x] **Feedback:** "Remove [about accelerating 5 year warranty etc all 4 sentance] completely."
  - **Action:** Deleted the specific warranty text block from the Accelera page.
- [x] **Feedback:** "The card layout in every page uses dark theme specially in home page on 'find your perfect tyre' and in card of Need tyres today get expert one's in home page."
  - **Action:** Updated the "Need Tyres Today" CTA banner to use a bright white background with dark text when viewed in Light Mode.
