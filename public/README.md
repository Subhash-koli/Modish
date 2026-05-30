# Public Folder - Static Assets

This folder contains static assets that are served directly by Vite without processing.

## Favicon Setup

The favicon is currently configured to use the LOGO_BLACK.jpeg from `src/imports/`.

### To add a custom .ico favicon (optional):

1. **Generate favicon** from LOGO_BLACK.jpeg:
   - Use: https://realfavicongenerator.net/
   - Upload: `src/imports/LOGO_BLACK.jpeg`
   - Download all generated files

2. **Add generated files** to this `public/` folder:
   ```
   public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   ├── android-chrome-192x192.png
   └── ...
   ```

3. **Update index.html** with generated favicon links (already configured with JPEG fallback)

## Current Favicon Handling

- **Favicon source:** `/src/imports/LOGO_BLACK.jpeg`
- **Apple Touch Icon:** Uses same LOGO_BLACK.jpeg
- **Theme Color:** Black (#000000)
- **Tile Color:** Black (#000000) for Windows tiles

---

**Note:** Vite will automatically serve any files in this folder at the root URL.
