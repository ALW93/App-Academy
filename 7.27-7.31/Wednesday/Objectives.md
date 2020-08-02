# **Objectives**

## **Command Line Interface Basics**

**1. Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.**

- You can check your PWD, and then reference the tree to cd or cd .. in and out to your desired location.

**2. Create, rename, and move folders using unix command line tools.**

- Mkdir (make a folder)
- MV (can rename or move folder)

**3. Use grep and | to count matches of a pattern in a sample text file and save result to another file.**

- Grep -c 'pattern' infile.txt > countResults.txt
  - -c : returns count of hits.
  - single arrow: overwrites or creates text file.
- grep 'pattern' infile.text | wc -l > countresults.txt

**4. Find what -c, -r, and -b flags do in grep by reading the manual.**

- -c : count, numbers of matches
- -r : recursive, search entire content of any directory.
- -b : byte-offset, will tell you line number and popsition of grep's matches.

**5. Identify the difference in two different files using diff.**

- diff -u file1 file2
  - -u flag used to output a unified diff output.

**6. Open and close nano with and without saving a file.**

- nano [name of file]

**7. Use ‘curl’ to download a file.**

- curl -o [url]
  - -o flag actually saves the file and gives us the option of changing the dl'd file name.

**8. Read the variables of \$PATH.**

- echo \$PATH
  - reads the current variable of path.

**9. Explain the difference between .bash_profile and .bashrc.**

- CANCELLED QUESTION

**10. Create a new alias by editing the .bash_profile.**

- alias berber = 'ls -al'

**11. Given a list of common scenarios, identify when it is appropriate and safe to use sudo, and when it is a dangerous mistake.**

- Safe
  - ls commands
  - installing packages
- Dangerous
  - Anything with rm is potentially dangerous

**12. Write a shell script that greets a user by their \$USER name using echo.**

```js
#!/bin/sh
USR = "whoami"
echo "Hello" $USR
```

**13. Use chmod to make a shell script executable.**

- chmod +x script name
