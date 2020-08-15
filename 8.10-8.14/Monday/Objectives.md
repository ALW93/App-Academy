# **Objectives**

## **NPM Learning**

**1. Explain what "npm" stands for.**

- npm stands for **Node Package Manager**; it is both a CLI and a registry.

**2. Explain the purpose of the package.json file and node_modules directory.**

- **package.json** is a file that is found in every npm package that holds various metadata relevant to the project. It is used to give information to npm that allows it to identify the project as well as heandle the project's dependencies.
- **node_modules** : subdirectory where all our package dependencies are stored; beneficial for keeping our dependencies away from our projects, and it's very possible these folders can grow to a massive size.

**3. Given multiple choices, identify the difference between npm's package.json and package-lock.json files.**
| package.json | package-lock.json |
| ------------ | ----------------- |
| Contains meta-data, scripts & dependencies | Contains details about installed dependencies |
| Dependencies are requests | Represent an exact reproducible npm environment |
| Safe to edit, just be careful about syntax | Do not edit this at all!|
| Should be manually edited| Always contains exact version of each package|
| Is auto created when you run npm.init | Auto created when npm install is run|
| May contain a range of acceptable versions| |

**4. Use npm --version to check what version is currently installed and use npm to update itself to the latest version.**

- `npm --version`
- `npm install -g npm`

**5. Use npm init to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.**

**6. Given a package version number following the MAJOR.MINOR.PATCH semantic versioning spec that may include tilde (~) and caret (^) ranges, identify the range of versions of the package that will be compatible.**

**7. Explain the difference between a dependency and a development dependency.**

**8. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.**

**9. Use npm uninstall to remove a dependency.**

**10. Use npm update to update an out-of-date dependency.**

**11. Given a problem description, use the npm registry to find a reputable package (by popularity and quality stats) that provides functionality to solve that problem.**

**12. Given a package with vulnerabilities due to outdated dependency versions, use npm audit to scan and fix any vulnerabilities.**

**13. Write and run an npm script.**

---
