# Astrocoders Create React App Starter

Made fast web applications with React

### Built With

- React (CRA)
- React PowerPlug
- React Data Fetching
- React Epitath
- Styled Components

### Setting up development

```shell
git clone git@github.com:Astrocoders/cra-starter.git
cd cra-starter/
yarn install
yarn start
```

### Components development

We use docz to document all the UI components. Run the command below in the terminal and access http://localhost:3001/

```shell
yarn docz-dev
```

### Deploy

Commits on develop branch will be deployed in the staging environment. Commits on master branch will be deployed in the production environment.

[CI Config]()

## Tests

We use some libs to test

- jest
- react-testing-library

Use the script below to run the tests

```shell
yarn install
yarn test
```