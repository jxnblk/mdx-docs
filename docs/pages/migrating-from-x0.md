
# Migrating from x0 to Next.js

If you have an existing documentation site built with Compositor x0 v6 and up, follow these directions to migrate to using MDX Docs.

The quickest way to migrate over is to use `npm init docs` to start a new application setup in a new directory.

```sh
npm init docs
```

Follow the prompts to create a new Next.js application.

## Copy Route Components

Since both x0 and this Next.js template both support MDX, copy the routes that you've created to the new `pages/` directory.

## Remove Front Matter

At this time, MDX Docs does not support front matter in markdown.
Remove any front-matter contents and consider using [ES export syntax instead](https://mdxjs.com/syntax#exports).

## Update the Custom App

Since the x0 and Next.js `_app.js` components are **not** compatible,
make any updates to the new `_app.js` file needed,
including update the `routes` array for navigation.

### Custom Components Scope

If your documentation site used custom `components` scope,
pass the object to the Layout component's `components` prop.

## Update the Custom Document

To handle any document head content or other changes to the HTML template,
update the [custom document](https://github.com/zeit/next.js/#custom-document) (`pages/_document.js`) component.


