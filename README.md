This is  a custom template for a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To build the bootstrapped NextJS app:

```bash
bash devscripts/create-next-jdw.sh my-app
```

To generate link preview and favicon images:

```bash
bash devscripts/create-favicon.sh input.jpeg
```

To deploy app to AWS Cloudfront:

```bash
bash devscripts/deploy.sh
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

### /app

- **_components/** - Reusable UI components, built w/ React.
- **_images/** - Images being used in the code base.
- **_styles/** - CSS stylesheets, one for each page and one global.
- **_svg/** - Reusable SVG React components.
- **example-page/** - An example of how to set up a route/page. Each folder representing a route should have it's own page.js.
- **layout.js** - Metadata and fonts HOC. Code in the layout.js file is visible on every page.
- **page.js** - Home page, compiles to index.html.
- **robots.js** - Generates a robots.txt file.
- **sitemap.js** - Generates a sitemap.xml file.

### /public
The public folder contains static content that should ultimately be publicly available at it's own URL (determined by it's filename) on the website. For example, `www.example.com/example.pdf` would link to the `example.pdf` file.

### next.config.mjs
Contains environment variables assigned using the build script (title, description, etc...).