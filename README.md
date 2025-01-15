This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and a custom template (https://github.com/jwhiteside11/nextjs-seo-jdw).

## Getting Started

To build the bootstrapped NextJS app:

```bash
bash devscripts/create-next-jdw.sh my-app
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To generate link preview and favicon images:

```bash
bash devscripts/create-favicon.sh input.jpeg
```

To deploy app to AWS Cloudfront:

```bash
bash devscripts/deploy.sh
```

## Project Structure - /app

**_components/** Reusable UI components, built w/ React.
**_images/** Images being used in the code base.
**_styles/** CSS stylesheets, one for each page and one global.
**_svg/** Reusable SVG React components.
**example-page/** An example of how to set up a route/page. Each folder representing a route have it's own page.js.
**layout.js** Metadata and fonts HOC. Code in the layout.js file is visible on every page.
**page.js** Home page, compiles to index.html.
**robots.js** Generates a robots.txt file.
**sitemap.js** Generates a sitemap.xml file.

