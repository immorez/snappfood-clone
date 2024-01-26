# Snapp! Food by Vite, React and Typescript

🚀 This web application is built by React & Vite and varnished by SASS.

🕶️ A demo of this application is available [here](https://snappfood-clone-gamma.vercel.app).

### Features

Developer experience first:

-   🔥 [Vite](https://vitejs.dev) as build tool
-   🎨 Integrated with Sass
-   🌐 Internationalization (i18n) for better-looking texts while coding
-   🎉 Type checking [TypeScript](https://www.typescriptlang.org)
-   ✏️ Linter with [ESLint](https://eslint.org)
-   🛠 Code Formatter with [Prettier](https://prettier.io)
-   🛤️ [React Router](https://reactrouter.com) is integrated for handling navigation and routing in the application.
-   🚀 [RTK Query](https://redux-toolkit.js.org/rtk-query) is utilized for efficient and simplified data fetching, seamlessly integrated with Redux.

You can also tune the application using .env file.

-   ☕ Minify HTML & CSS
-   💨 Live reload
-   ✅ Cache busting

### Philosophy

-   Minimal code
-   🚀 Production-ready
-   Modularity
-   Scalability

### Requirements

-   Node.js and yarn

### Getting started

Run the following command on your local environment:

```
git clone https://github.com/immorez/snappfood-clone.git
cd snappfood-clone
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:5177 with your favorite browser to see your project.

```
.
├── public        # Static files
└── src
    ├── pages
    |── components
    |── config
    |── redux
    |── locales
    |── hooks
    |── routes
    |── utils
    |── fonts
    |── sass
    └── sections


```

### Deploy to production

You can see the results locally in production mode with:

```
$ yarn build
$ yarn start
```

You can create an optimized production build with:

```
yarn build
```

Now, your Snapp! Food clone is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.
