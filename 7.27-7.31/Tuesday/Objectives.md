# **Objectives**

## **Node JS**

**1. Define NodeJS as distinct from browser based JavaScript runtimes.**

- In Node.js runtime, **`global object`** is where global variables are stored.

- In browsers, **`window objects`** are where global variables are stored.

- They both also their own unique accessible objects.

**2. Write a program that reads in a dictionary file using node's FS API and reads a line of text from the terminal input. The program should 'spell check' by putting asterisks around every word that is NOT found in the dictionary.**

---

## **Git Learning**

**1. Use Git to initialize a repo**

- Use git init to initialize a repo in your desired directory.

**2. Explain the difference between Git and GitHub**

- Git is a VS, Github is a remote server to push your code.

**3. Given 'adding to staging', 'committing', and 'pushing to remote', match attributes that apply to each.**

- **`Staging Area`**
  - Reserved for changes you're ready to commit.
- **`Git Commit -m`** : Used to commit your changes/additions into the commit history - flag is used to add a message to your commit.
- git push -u origin add-my-new-file

**4. Use Git to clone an existing repo from GitHub**

- git clone [HTTPS url of remote repo]

**5. Use Git to push a local commit to a remote branch**

- git push -u origin master

**6. Use git to make a branch, push it to github, and make a pull request on GitHub to merge it to master**

- git branch [name of new branch]
- git add .
- git commit -m "This is my new branch"
- git push -u origin master
- follow on screen prompts to enact a pull request.

**7. Given a git merge conflict, resolve it**

- just choose which line you want on vscdoe.

**8. Match the three types of git reset with appropriate descriptions of the operation.**

- **--soft** : appended to reset to move our HEAD ref to the commit we specified - does not touch our code, only resets commit messages.(least dangerous!)
- **--mixed** : Default state of Git reset, changes are preserved but they are removed from the commit history straight to the working directory.
- **--hard** : Adjust head ref and totally destroy any interim code changes

**9. Use Git reset to rollback local-only commits.**

- git reset --hard HEAD

**10. Identify what the git rebase command does**

- **Git Rebase** : Involves changing your current branch's base branch.

**11. Use git diff to compare a local 'staging' branch and 'master' branch.**

- git diff master (assuming you are on the staging branch)

**12. Use git checkout to check out a specific commit by commit id**

- git checkout [id]

---