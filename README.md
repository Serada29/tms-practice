# tms-practice

Learning while building tms

# Git Workflow: Updating a Repository From Any Device

Repository: https://github.com/Serada29/tms-practice.git

This guide explains how to update your repository from multiple devices (PC, laptop, etc.).

---

# 1. Clone the Repository (First Time on a Device)

If you are using a new computer, you must **clone the repository first**.

```bash
git clone https://github.com/Serada29/tms-practice.git
```

Go inside the project folder:

```bash
cd tms-practice
```

Now your device is connected to the repository.

---

# 2. Make Changes

Edit or add files in the project.

Example project structure:

```
tms-practice/
├── index.js
├── app.js
└── README.md
```

---

# 3. Add Changes

Tell Git which files should be included in the update.

```bash
git add .
```

`.` means **add all changed files**.

---

# 4. Commit the Changes

Save the update locally with a message describing the change.

```bash
git commit -m "Update project files"
```

Example:

```bash
git commit -m "Add truck API"
```

---

# 5. Push to GitHub

Upload the changes to the remote repository.

```bash
git push origin main
```

Now the update will appear in the GitHub repository.

---

# 6. Working From Another Device

Before starting work on another device, always pull the latest changes.

```bash
git pull origin main
```

Then continue working.

---

# 7. Full Workflow

Typical workflow when working on a project:

### Start Working

```bash
git pull origin main
```

### After Making Changes

```bash
git add .
git commit -m "describe your update"
git push origin main
```

---

# 8. Example: Multiple Devices

### Device A (Home PC)

```bash
git add .
git commit -m "add backend structure"
git push origin main
```

### Device B (Laptop)

```bash
git pull origin main
```

Then continue working and push again.

---

# 9. Common Beginner Error

You may see this error:

```
rejected because the remote contains work that you do not have locally
```

This means your local repository is outdated.

Fix it by pulling first:

```bash
git pull origin main
```

Then push again.

---

# 10. The 4 Git Commands to Remember

Most daily work only uses these commands:

```bash
git pull origin main
git add .
git commit -m "message"
git push origin main
```

Memorizing these commands will make Git much easier to use.
