# **Objectives**

## **NPM Learning**

**1. Explain what "`npm`" stands for.**

- npm stands for **Node Package Manager**; it is both a CLI and a registry.
- The CLI is used to install and maintain npm dependencies, and projects.
- The registry is a public registry of node js packages.

**2. Explain the purpose of the package.json file and node_modules directory.**

- **package.json** is a file that is found in every npm package that holds various metadata relevant to the project. It is used to give information to npm that allows it to identify the project as well as heandle the project's dependencies.
- **node_modules** : subdirectory where all our package dependencies are stored; beneficial for keeping our dependencies away from our projects, and it's very possible these folders can grow to a massive size.
  - It should not be checked into version control, as it can easily be rebuilt with `npm install`

**3. Given multiple choices, identify the difference between npm's package.json and package-lock.json files.**
| `package.json` | `package-lock.json` |
| ------------ | ----------------- |
| Contains meta-data, scripts & dependencies | Contains details about installed dependencies |
| Dependencies are requests | Represent an exact reproducible npm environment |
| Safe to edit, just be careful about syntax | Do not edit this at all!|
| Should be manually edited| Always contains exact version of each package|
| Is auto created when you run npm.init | Auto created when npm install is run|
| May contain a range of acceptable versions| |

**4. Use npm --version to check what version is currently installed and use npm to update itself to the latest version.**

- `npm --version` // checks current version.
- `npm install -g npm@latest` // use this to update the package to the latest version.

**5. Use npm init to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.**

- Use `npm init --yes` to create a new package
- A series of questions that will store metadata will be asked.
- Use `npm install lodash` to install a package.

```js
const lodash = require("lodash"); // note we can just set the name of the installed package as the argument for our require function since it was downloaded; use ./name.js if it is a local dependency.
```

**6. Given a package version number following the MAJOR.MINOR.PATCH semantic versioning spec that may include tilde (~) and caret (^) ranges, identify the range of versions of the package that will be compatible.**

    Asterisk // Searches for all versions, also indicates latest version.
    14.16.1 // Finds exact version.
    ~14.16.1 // Finds everything with same Major and Minor Range.
    ^14.16.1 // Finds everything greater than current search.
    || // Can use to find multiple ranges.

**7. Explain the difference between a dependency and a development dependency.**

- A regular dependency are dependencies required for the app the actually run.
- Development dependencies are dependencies used during development (for example, using chai/mocha to test your problem answers!)

**8. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.**

- git clone "repo URL"
- npm install // installs dependencies

**9. Use npm uninstall to remove a dependency.**

- npm uninstall "package name"

**10. Use npm update to update an out-of-date dependency.**

- npm install lodash@3.60 // install at a specific sem. ver
- npm update lodash // update will not update past the current major version.
- npm install lodash@latest // only way to get the absolute latest version.

**11. Given a problem description, use the npm registry to find a reputable package (by popularity and quality stats) that provides functionality to solve that problem.**

- Ask yourself some questions before deciding on which package to install:
  - Does the API handle the task you need to accomplish?
  - Does the package have a decent amount of downloads?
  - In Version Control, is there a lot of activity? (indicates it is being maintained)
  - When was the last version released.
  - Popularity Quality Maintenance

**12. Given a package with vulnerabilities due to outdated dependency versions, use npm audit to scan and fix any vulnerabilities.**

- Run `npm audit` to get an audit
- Run `npm audit fix` to fix low level, safe errors.
- Run `npm audit fix --force` to force correct errors - might break your code.
- Critical: Address Immediately
- High: Address as quickly as possible
- Moderate: Address as time allows
- Low: Address at your discretion

**13. Write and run an npm script.**

- You can add an npm script to the package.json file. (remember you can edit that file!)
- `"linecount" : "wc -l \*.js"
- Run it by using the command `npm run linecount`

```js
{
  "scripts": {
    "start": "node index.js",
    "test": "mocha --watch",
    "watch": "nodemon index.js"
  }
}
```

---
