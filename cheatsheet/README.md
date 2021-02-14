# Cheatsheet for "Elementare Zahlentheorie" (WS 20/21)

- Source file: `cheatsheet.md`.
- Generates files: `cheatsheet.{html, pdf}`

## Building

# How to generate `cheatsheet.html`

The HTML file is generated with the help of two VSCode extensions: "Markdown All in One", "Markdown Math".

1. Open the parent folder (`..`) as a workspace using VSCode.
   
   This workspace has these extensions listed *and* configured `../.vscode/extensions.js` and `../.vscode/settings.js`.
2. Open `cheatsheet.md` within the VSCode workspace.
3. Open VSCode's action menu and execute `>Markdown All in One: Print current document to HTML` (or similarly named) to generate `cheatsheet.html`.

# How to generate `cheatsheet.pdf`

Open `cheatsheet.html` using your browser of choice and "print" to `cheatsheet.pdf`.

Select `DIN A4` as output format, `two sheets per page`, and disable `headers / footers`.