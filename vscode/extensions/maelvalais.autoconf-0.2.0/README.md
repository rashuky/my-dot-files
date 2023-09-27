# Autotools syntax highlighting for VSCode

The extension is available on both [vsce](https://marketplace.visualstudio.com/items?itemName=maelvalais.autoconf),
and on [ovsx](https://open-vsx.org/extension/maelvalais/autoconf).

This VSCode extension is a fork of the GitHub project [sublime_autotools][]. It
includes syntax highlighting for Autoconf M4 (`.m4`, `configure.ac`...) and
Automake files (e.g., `Makefile.am`). This extension uses the vscode's own
Makefile syntax support for hghlighting makefile things in automake files. I
chose to fork the [sublime project][sublime_autotools] in order to have an easy
way of updating `vscode_autotools` (which is only a matter of `git merge`).

Note that the sublime fork also has a Makefile2 (an alternate grammar file for
Makefiles) but the standard vscode's Makefile support works much better
(actually, the sublime's one is kind of buggy).

See [DEVELOPMENT.md][] for more information on how to debug and improve
`vscode_autotools`.

## Changelog

### v0.2.0 (5 March 2023)

Since ptomato/sublime_autotools has moved to a YAML-based grammar and that most
of the bugs that were fixed in my fork have been ported back to
ptomato/sublime_autotools, I decided to revert to ptomato/sublime_autotools's
YAML grammar. This means that the grammar may change a bit. Please let me know
if it does.

### v0.1.0

- complete PKG macro family. Change proposed by jannick0 (initially
  proposed at <https://github.com/ptomato/sublime_autotools/pull/9>)

### v0.0.9

- Add [AC_CONFIG_MACRO_DIRS] provided by `automake` which surprisingly
  exists together with `autoconf`'s [AC_CONFIG_MACRO_DIR]. Change proposed
  by jannick0.
- (internal) add the `npm start -- --json` feature that allows people more
  familiar with json to generate tmLanguage from the json file instead of
  the yaml one.

[ac_config_macro_dirs]: https://www.gnu.org/software/automake/manual/html_node/Local-Macros.html
[ac_config_macro_dir]: https://www.gnu.org/savannah-checkouts/gnu/autoconf/manual/autoconf-2.69/html_node/Input.html#Input.

### v0.0.7

- Autoconf M4 (configure.ac): fix \" not being properly escaped in a string.
  Note for now, that variables won't (for some reason) be highlighted in
  strings. I couldn't find why.

### v0.0.6

- Automake: fix comments not being highlighted when it starts at the beginning
  of a line and is interleaved with a recipe.

### v0.0.5

- Automake grammar: fixed bug with `foo: $(VAR:%.h=%.h)`
- Makefile2: re-include it into the extension. The Automake grammar is actually
  working better using makefile2.
- Many small improvements to Makefile2 and Automake, e.g., `$(if a,b)`
  properly colored.
- Moved from JSON grammar files to YAML.

### v0.0.4

- Use vscode's default Makefile syntax grammar file instead of the sublime's
  one (Makefile2). This is because Makefile2 was buggy and vscode's one works
  just fine.

### v0.0.3

- Automake: fix a bug with assigments followed by a comment
- added 'npm start'for rebuilding the tmLanguage files from the JSON-tmLanguage
  files. You may observe some changes in grammar because of this, please tell
  me if it is the case!

### v0.0.2

- Fixed the VSCode-version of Makefile that was shadowed by Makefile2, thus
  making it impossible to select the VSCode-provided Makefile highlighting.
- Fixed line comments (`#` instead of `//`)
- Removed block comments (block comments are not available in makefiles)
- added an icon, because we all kind of like nice icons (Twitter, CC 3.0 BY)

### v0.0.1

- Initial release. I disabled the Makefile2 part that was developped in
  the upstream project ([sublime_autotools]) because the Makefile support of
  vscode seems better (but I didn't really dig much to understand why).

[sublime_autotools]: https://github.com/ptomato/sublime_autotools

Note: For Autoconf M4 macros, the arguments may need to be highlighted in
several different ways; some are shell code, some are plain text, and a few
are C code. There are definitions for the builtin ones, but custom macros
may not be highlighted correctly.
