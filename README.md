# Kliq Test built with React + TypeScript + Vite

Here is the Loom Video demo for the application [Demo](https://www.loom.com/share/09fbabccdf914c2c81f918cf7c815200?sid=ac4e42e0-8604-40ab-a673-fb045eb7453b)

This web app was developed using this Figma design [Kliq_Figma](https://www.figma.com/file/hf8ajiuCauba1BAZjDDEVS/Works?type=design&node-id=0%3A1&mode=dev). A pixel-perfect translation of the Figma design was made. All static files including icons, images and font were exported from Figma.

SOLID software engineering principles were adhered to during development.

-   Using Typescript for type safety.
-   Proper usage of types and interfaces for proper abstractions.
-   Usage of advanced Typescript concepts like Generics and Discriminated Unions.
-   Abstraction of API interactions for the application to an API class. Axios and react-query were used.
-   Single responsibility for components and utilities used in the application.
-   Components, classes and helper functions were developed to be extended not modified by props configuration, and proper component composition.
-   Test setup of the application using react testing library and vitest. Mocks were created for the API call to get the promotions from the `data.json` in the public folder.
-   Proper application folder structure and nomenclature.

The main assumptions are:

-   The design is desktop only, since the design didn't include mobile and tablet designs.
-   Functionality of components need not be focused on given the time constraints, except for basic interactivity like hover effects and sorting of the promotions based on `name`.

Given more time, I would implement more functionalities:

-   Sorting the Promotions table using more columns
-   Interactivity for CTAs

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
