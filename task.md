# Tasks: Force One Tyres - Data Ingestion & Brand Routing

## Objective
Update the Next.js application by populating the dedicated brand routes (`/brands/accelera`, `/brands/winrun`, `/brands/duraman`, `/brands/gepormax`). You must use your web-scraping capabilities to extract textual content, tyre patterns, and imagery directly from the provided official manufacturer URLs and integrate them into the respective pages.

## External Data Sources (Scraping Directives)
Agent: Use your web-browsing tools to fetch, parse, and download assets and content from the following live URLs.

1. **Accelera Hub (`/brands/accelera`)**
   - Source URL: `https://www.acceleratire.com/`
   - Data to extract: "Speed & Style" brand positioning. Focus on gathering data for Ultra High Performance, SUV, and EV tire patterns (e.g., IOTA EVT, ECO PLUSH).

2. **Winrun Hub (`/brands/winrun`)** [DONE]
   - Source URL: `https://www.wrtyre.com/`
   - Data to extract: UHP, SUV, and EV TYRE lineups. Pay special attention to extracting information regarding the R330+ models and the "W-Silent Sponge" foam technology.

3. **Duraman Hub (`/brands/duraman`)**
   - Source URL: `https://www.duramantyre.com/`
   - Data to extract: Brand history, focusing on their international presence, TBR (heavy load/long-haul), and PCR (comfort/fuel efficiency) tyre details.

4. **Gepormax Hub (`/brands/gepormax`)**
   - Source URL: `https://www.duramantyre.com/Brand/gepormax`
   - Data to extract: Information on safety, quality, and specific models like ENTERRA RT V8, ENTERRA MT V9, ECOPLUS SUV, and SPORTS T1. 

## Architectural Requirements
1. **Routing Strategy:** Ensure the Next.js dynamic or static routes for each of the 4 brands are fully scaffolded. 
2. **Image Ingestion:** Attempt to save the extracted tyre images from the source URLs directly into the local `/public/assets/brands/[brand_name]/` directory.
3. **UI/UX Integration:** 
   - Display the extracted tyre models using the click-to-enlarge Image Lightbox/Modal component defined previously.
   - Inject the scraped marketing copy (brand history, technology specs) into the Mini-Hero header sections of each brand page.
   - Retain the sticky WhatsApp Floating Action Button on all generated pages, pre-filled with contextual messages for the scraped tyre models.