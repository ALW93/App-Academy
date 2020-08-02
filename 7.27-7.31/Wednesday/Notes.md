# **Notes**

## **Navigating your File System**

- **`Command Line`** : The line in which we enter our commands.
- **`Prompt`** : The bit of text before your CL that gives some context to your pwd.
- **`Output`** : Anything that's been executed to the terminal.

**Keyboard Shortcuts**

- **`Return & Enter`** : Submit code we have typed.
- **`Up & Down Arrows`** : Move up and Down your command history.
- **`ctrl + a`** : Move your cursor to the beginning of the line.
- **`ctrl + e`** : Move your curse to the end of the line.
- **`ctrl + l`** : clear your terminal.

**Understanding Directories**

- **`/User/your_username/`** or **`~`** : Home Directory.
- **`/`** : The Root Directory.
- **`.`** : Current Directory
- **`..`** : Parent of Current Directory.

**Getting Around**

- **`pwd`** : Print Working Directory, will always print the full path of where you are.
- You can append **`-al`** to ls in order to see all the hidden files as well.

**Making Changes**

- **touch** : command used to create files.
- **mkdir** : command to make directories.
- appending **-p** to mkdir will allow you to make all required parent directories it needs to create a requested directory.
  ```js
  > mkdir -p ~/none/of/these/directories/exist/but/now/they/will
  ```
  **Manipulating Existing Files**

* **`cp`** : duplicates a file, requires a source and a destination.
* **`mv`** : moves a file from one place to another, can also be used to rename files.
* **`rm`**: removes files and directories.
  - Be very careful with this command, you will not be able to recover deleted items!
* **`rmdir`** : for removing directories only.

---

## **Command Tasks on the Command Line**

**Grep marks the spot**

**`g/re/p`** means "Globally search for a Regular Expression and Print"

- grep accepts two arguments: a pattern and a source to search.

**Common grep options**

- **`-r`** : recursive - searches all files in a given path.
- **`-n`** : line number - will show you the exact line for each match.
- **`-i`** : ignore case.
- **`-c`** : will return count, the number of matches.

**Teaching yourself anything**

- **`man`** : (manual) utility to learn more about any built in command.
  - Use arrow keys to navigate.
  - Use Q on to quit the manual.

**Command Redirection**

- **`Command Redirection`** : Takes the output from one command makes it the input for another command.

  ```js
  > man grep | grep -C1 count
  ```

- **`>`** : will create a new file to save output.
- **`>>`** : will append output to an existing file.
- The redirection operators are very fast but do not show you the output before writing it to a given file.
  - **`tee`** : the tee operator can be used to view an output before writing it to a file.

**Editing files directly from the CLI**

**`Nano`** is a terminal text editor that provides easy-to-read instructions and is available on most systems.

- Terminal editors are preferable to VSCode in instances where you need to log into a remote server to edit or configure files.

**Bringing the Internet into your Terminal**

- **`curl`** : command used to download from a URL to your computer.
- **`-o`** : appending this flag to your curl command will allow you to name the incoming download file.

---

## **Understanding the Shell**

- **`shell`** : the software layer that translates your command line instructions into actual commands.
  - Calls applications using your input.
  - Supporting User Environments & Customization.

**Selling C-Shells by the Seashore**

- **Bash** : Default shell for Linux systems.
- **Zsh** : Default shell for MacOS.
  - Has scripting compatibility with Bash Shells but not the other way around.

**Shells vs Terminals**

Shells and Terminals are not the same thing, just think of a terminal as an emulator that allows us to work with our Shell.

**Shell Prompts**

If we ever see a **#** instead of the usual **\$** or **%**, we are logged in as a super-user and must take great care!

**Two Purposes**

- The first purpose of your shell is to execute commands.
- The second purpose is customization of your unique environment - such as using environment variables.

**From the Command Line to the Screen**
![visual of cl process](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Unix/cli/assets/cli-shell-breakdown-hc.png)

**Customizing your Environment**

- **Export** : command used to change/initialize a new environment variable
  ```js
  $ export NEW_VARIABLE=value
  ```
- Bash Customizable Files: .profile, .bash_profile, .bashrc.
- Zsh Customizable Files: .zshrc.

**Bash Startup Files**

- Use **-l** or **--login** to run your bashrc file.

**ZSH Startup Files**

- Zsh file is started anytime you use both login and non-login shells.

**macOS Catalina with Zsh**

Put your customizations into your .zshrc file.
Change Visual Studio Code to use zsh as it's shell.

---

## **Bash Permissions & Scripting**

![file perm](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Unix/cli/assets/cli-ls-list-example.png)
![image of cli](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Unix/cli/assets/cli-unix-permissions.png)

- The CLI comprises the first ten characters.
- It goes in order like this: directory indicator, owner, group, others.
  - **r** : 4 points.
  - **w** : 2 points.
  - **x** : 1 point.

**Modifying Permissions**

- **chmod** : command to update the permissions of a file ourselves. (change mode)

**Ignoring Permissions entirely with Sudo**

**Bash Scripting**

- **Script requirements**

  - An effective script requires three things:

    - An interpreter directive
    - A commented description
    - A script body

---
