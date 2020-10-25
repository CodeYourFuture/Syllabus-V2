---
id: index
title: Github Desktop Cheatsheet
sidebar_label: Github Desktop Cheatsheet
---

## I want to get code from a repo onto my computer (Cloning)

Follow these steps if you need to get code from a Github repo onto your computer (for example to complete your coursework).

:::info
Github Desktop might look a bit different if are cloning the first repository on your computer.
:::

#### Video

<video width="100%" controls>
  <source src={require('./assets/cloning-video.mp4').default} />
</video>

#### Screenshots

1. Open the repo on Github in your browser (for the coursework this will likely be https://github.com/CodeYourFuture/COURSEWORK_REPO_NAME):
2. Click the "Code" button, which opens a menu:

![Code menu](./assets/cloning-1.png)

3. Copy the URL (Pro Tip: you can click the clipboard icon on the right to copy automatically!)
4. Open Github Desktop, and click on the Current Repository menu in the top left:

![Current repository menu](./assets/cloning-2.png)

5. Click the Add button at the top, then the Clone Repository option:

![Add repo button](./assets/cloning-3.png)

6. In the Clone Repository modal, make sure you are on the URL tab. Then paste the URL that you copied before into the "URL or username/repository" input:

![Clone repository modal](./assets/cloning-4.png)

7. Click the Clone button, and wait until it has finished cloning

Congrats! You have successfully cloned a repo from Github! 🎉

## I want to open Visual Studio Code with my repo

Follow these steps if you already have the repo on your computer and you want to edit the files.

1. In the menubar, click the Repository option
2. Then click the Open in Visual Studio Code option:

![Open in Visual Studio Code option](./assets/opening-vscode.png)

Visual Studio Code will now open with the code from the repo.

## I want to save my code to the repo (Committing)

Follow these steps if you have edited some code, and want to update the repo with your changes.

#### Video

<video width="100%" controls>
  <source src={require('./assets/committing-video.mp4').default} />
</video>

#### Screenshots

1. Open Github Desktop and ensure you are in the correct Current Repository
2. A _diff_ showing the changes that you made is shown (lines with a green background were added, and lines with a red background were removed):

![Showing a diff](./assets/committing-1.png)

3. Click on the files in the sidebar to see different files. Make sure that you're only changing files that you meant to change
4. Once you're happy with your change, fill out the input boxes in the bottom left to add a _commit message_:

![Adding a commit message](./assets/committing-2.png)

5. Click the "Commit to main" button

You just committed your code to the repo! 🎉

You should now see "No local changes". You can now make more changes to the repo (and more commits), or you can push your existing commits.

## I want to send my code to volunteers (Pushing)

#### TODO

- Decide what to do about the UI being different for the first repo
- Tips on writing a good commit message?