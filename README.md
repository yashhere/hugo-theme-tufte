# Theme components
This theme is composed of the base theme "tufte", and other components.

To use this theme, you need to clone this theme and the components too:

```bash
cd HUGO_SITE_DIR/themes
git clone https://github.com/yashhere/hugo-theme-tufte tufte
git clone https://github.com/kaushalmodi/hugo-atom-feed hugo-atom-feed
git clone https://github.com/kaushalmodi/hugo-jf2 hugo-jf2
git clone https://github.com/kaushalmodi/hugo-search-fuse-js hugo-search-fuse-js
git clone https://github.com/kaushalmodi/hugo-debugprint hugo-debugprint
```

### Theme variables

```toml
[Params]
  tagline = "My random notes"

  # Go date formats: https://golang.org/pkg/time/#pkg-constants
  dateform = "Mon Jan 2, 2006"

  # Set favicons to true only if the following files are present in the project assets/ dir:
  # - safari-pinned-tab.svg
  # - manifest.json
  # - favicon-16x16.png
  # - favicon-32x32.png
  # - apple-touch-icon.png
  favicons = false

  themecolorbase = "red" # Valid values: "red", "orange", "yellow", "green", "cyan", "blue", "magenta", "brown"
```
