# **Notes**

## **Intro to Node Package Manager**

**Package Management**

- **`Package`** : A collection of files & configuration wrapped up in an easy-to-distribute wrapper.

- **`Dependencies`** : Packages that Applications are dependent on in order to actually work. (This can go up to even thousands of dependencies!)

- **Why simply copying & pasting a file isn't that great:**

  - Each time the file changes, we would need to re-share.
  - Author needs to keep multiple versions of the same file just in case something breaks.
  - Other devs might want to improve the file, but they can't because it isn't being tracked anywhere.

- **`Package Managers`** : Applications that accept your code, bundled up with some important metadata, and provide services like versioning, change-management, and even tracking how many projects are using your code.

  - _Package Managers are made up of two parts_:
    - **`A Command Line Interface`**: Application you run locally that let's you dl & install/uninstall packages as needed.
    - **`Registry`**: Database of package information, tracking which are available at any time.
  - May also include other functionality such as bundling, building pipelines, and dependency management.

- npm is the de facto standard for Node.js packages.

- **Some Basic npm commands**

  - **`npm`** : show npm's help info & common commands.
  - **`npm init`** : set current project directory up for npm.
  - **`npm install`** : dl & install a package into your project.
    - **`-g`** : flag to globally install the package on your entire system.

- **Quick Overview of how npm works**
  - We request a package `npm install pack-overflow`.
  - The npm cli tool updates our `package.json` file to include `pack-overflow` as a dependency and requests it from the registry.s
  - npm downloads the package and installs it into `node_modules`
  - npm creates a `package-lock.json` file that includes where the package is located.
  - We can now `require('pack-overflow')` in our project.

---

## **NPM and Dependency Management**

**Dependency Management**

> Imagine bread being a dependency of a sandwich, the bread itself has further dependencies such as flour, yeast, water.

- Many package managers have the ability to resolve & correct dependency versions - they will compare all the packages used by an application and determine which versions are most compatible.

- Dependencies are formatted as such:

  - `"package-name": "semantic.version.numer"`
  - **`Semantic Version Number`** : lets the CLI know more about exactly which version of that package to grab.
    - Made up of three parts:
      ![svn](https://assets.aaonline.io/Module-JavaScript/npm/assets/image-npm-semver.svg)
    - **`Major Changes`** : Considered _breaking_, will be incompatible with other major versions - like creating a sequel to a hit video game.
    - **`Minor Changes`** : Represent new features, i.e. adding a new level to a game.
    - **`Patch Level Changes`**: Fixing Bugs or Small Issues, such as fixing a typo in a video game.

- **`package-lock.json`** : A **`lockfile`** that contains every detail needed to identify the exact version of an npm package that's being used by an application.

  - Never manually change this file!!!

- **`Node Modules`** : Folder/ Subdirectory where all your package dependencies are store.
  - Beneficial for keeping dependencies apart from your project.
  - Possible to grow to a massive size.

**Creating Version Ranges**
We can _designate a range_ by adding some special characters in our version number.

- **`asterisk`** : Whatever the latest version is.
- **`>1.0.0`** : Any version above major version 1.
- **`^1.0.0`** : Any version in the 1.x.x range.
- **`~1.0.0`** : Any patch version in the 1.0.x range.
- **`1.0.0`** : Exactly version 1.0.0.

- Semantic Versioning is npm's secret weapon for dependency management.

- Keep in mind, while npm will help you manage your dependencies, it will not automatically keep them up to date! (Always make sure your applications are up to date with the latest patches of their dependencies!)

---

## **Using NPM**

**Using npm to manage npm**

- **npm -v** : Confirms we have npm CLI installed and also let's us know our version number.
  - We can update our npm by typing in the following command:
  - `npm install -g npm@latest`

**Using npm to manage a project's dependencies**

- When you initiate an npm, your terminal will prompt you for the following informtion :
  - **`package name`**: default: name of current folder.
  - **`version`**: default: 1.0.0.
  - **`description`**: Necessary if you're going to publish your package.
  - **`entry point`**: Entry point to our application.
  - **`test command`**: Used if you're going to write tests for your package.
  - **`git repository`**: Letting other devs find the git repo. associated with your package.
  - **`keywords`**: Used to help people find your package.
  - **`author`**: Kimi no nawa.
  - **`license`**: Default: ISC License.

**Finding Packages in the NPM Registry**
Because there are millions of packages in the npm registry, you can ask yourself a few questions:

- **Does the package do what I need?**
- **How popular is the package?**
- **Is the package being maintained?**

- npm packages when searched for on the website are sorted by popularity, quality, and maintenance.

- npm will recursively download all dependencies of dependencies into the node_module folder.

  - If using Git, make sure to add a `.gitignore` file to the root of the project so the node_modules folder will not be tracked by Git.

- Use the `require` function to import the installed package into Node.js.

**Dependency Types**
npm keeps track of two types of dependencies in our `package.json` file:

1. **`Dependencies`** : Packages that your project needs in order to successfully run when in production.
2. **`devDependencies`** : The packages that are needed locally when doing development work on the project.

> There are three additional dependencies called peer dependencies, bundled dependencies, and optional dependencies.

- **--save-dev** : flag used when installing a package to install it as a development dependency.

  - Being selective about separating dev dependencies helps to keep the installation process as lean as possible.

- You can simply run `npm install` on a project that has exisisting dependencies to update any packages.

- If you want to **uninstall** a package just use `npm uninstall "package-name"`

- If you want to update an existing package to a specific version you can use this syntax: `npm install lodash@3.0.0`

- If you'd like to update all your packages with one command you can use `npm update`

**Finding and fixing package security vulnerabilites**

- npm maintains a list of reported package security vulnerabilities; through the registry users can report security vulnerabilites.
- During an installation, if any vulnerabilities are found we can use `npm audit` to generate a report to see **severities**:

  - **Critical**: Address Immediately
  - **High**: Address as quickly as possible
  - **Moderate**: Address as time allows
  - **Low**: Address at your discretion

- In turn we can use `npm audit fix` to attempt to fix any security vulnerabilites - this will only remedy if a fix is available on a minor/patch version.

- There is a strong option `npm audit fix --force` that will fix your package with a major version - which might break your code - use with caution!

```js
{
  "scripts": {
    "start": "node index.js"
  }
}
```

- npm scripts are defined using the **scripts** field in the package.json file.
  - we can run it by using `npm start`.
  - we can define custom scripts in our scripts field as well to deplay our other js.files using `npm run -custom script-`

---
