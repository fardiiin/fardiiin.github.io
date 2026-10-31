# Fardin Islam Mahin — Portfolio

Ready-to-upload static website for https://fardinmahin.me/.
Repository: https://github.com/fardiiin/fardiiin.github.io

## Files and placement

Upload the contents of this folder directly to the publishing branch's root:

```text
fardiiin.github.io/
├── index.html         # Complete page and content
├── style.css          # Responsive layout, light and dark themes
├── app.js             # Theme selection and project filtering
├── assets/
│   ├── avatar.jpg     # Portrait
│   ├── 02.jpg         # Pizza sales project
│   ├── 0.jpg          # Coffee sales project
│   └── 05.jpg         # Customer segmentation project
├── CNAME              # fardinmahin.me custom domain
├── .nojekyll          # Serve as plain static files
└── README.md          # These instructions
```

Keep these filenames and the assets folder structure intact. Upload order does not matter. Do not upload the ZIP itself or nest this folder inside another repository folder: index.html must be at the publishing root.

## Upload in order

1. Save a backup of the existing repository before replacing files.
2. Extract the ZIP on your computer and open the extracted fardiiin.github.io folder.
3. Open the repository on GitHub and select the branch you intend to publish (usually main).
4. Choose **Add file → Upload files**. Upload all files above and the entire assets folder to the repository root. Replace the existing index.html and any other matching files. Ensure the dotfile .nojekyll is included; if your file picker hides it, create an empty file named .nojekyll using GitHub's Add file → Create new file.
5. Commit the uploaded files. This updates the website once GitHub Pages deploys them.
6. Under **Settings → Pages**, choose **Deploy from a branch**, then select your uploaded branch and **/ (root)**. Save. If already configured this way, keep the existing setup.
7. Set or retain **Custom domain: fardinmahin.me**. The included CNAME contains exactly that domain.
8. Keep existing working GitHub Pages DNS records. If the domain is not already connected to GitHub Pages, use the domain setup below.
9. Enable **Enforce HTTPS** when available. After deployment completes, visit https://fardinmahin.me/ and refresh the browser cache if the previous design remains visible.

Existing unrelated files can stay, including PDFs linked elsewhere. Old CSS and images are no longer used by the new index.html. If the repository has a custom Pages deployment workflow, review it before switching to branch deployment; this package requires no build command.

## Domain setup (only if needed)

Configure the custom domain in GitHub Pages first, then configure DNS at your domain provider. For the apex domain, use these A records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

For www, use a CNAME record with name www and value fardiiin.github.io. Do not change email/MX records. DNS and HTTPS provisioning can take up to 24 hours.

Official reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Editing and behavior

- Edit index.html for text, links, experience, projects, and contact information.
- Edit style.css for colors, typography, spacing, and responsive layouts.
- Edit app.js for the project filter and appearance selector.
- Appearance defaults to the visitor's system setting. An explicit light/dark selection is saved in that browser; choose System to resume automatic switching.
- Contact opens the visitor's email application. There is no form backend.
- Project links open the existing GitHub projects.
- Fonts are loaded from Google Fonts (DM Sans and Space Grotesk), with local sans-serif fallbacks. Images are included locally.
- No installation, build tools, API keys, Sites account, or server code is required.

This export preserves the deployed website's HTML, CSS, JavaScript and images. Only the GitHub Pages configuration and this guide have been added. The repository's current branch and Pages configuration were not accessible for inspection; confirm them in Settings → Pages when uploading.
