# Contributing to vscode_autotools

## Debugging why the grammar is off

To find out why the syntax highlighting is off, turn on the
command "Developer: Inspect Editor Grammar Tokens and Scopes":

![vscode-grammar-tokens-and-scopes-hover](https://user-images.githubusercontent.com/2195781/105803142-23334980-5f9d-11eb-8fcb-4feee8d27c04.png)

Then you will see exactly in which scope the syntax highlighting fails:

![vscode-inspect-editor-tokens-and-scopes](https://user-images.githubusercontent.com/2195781/105803144-23cbe000-5f9d-11eb-894a-6548d0889064.png)

To try to fix the grammar issue, you can clone and run the cloned folder
as the only extension:

```sh
git clone https://github.com/maelvalais/vscode_autotools.git
cd vscode_autotools
npm install && npm start
code --disable-extensions --extensionDevelopmentPath=$PWD
```

## Development

In order to hack this vscode extension, first remove the extension from
inside vscode. Then:

```sh
git clone https://github.com/maelvalais/vscode_autotools.git
cd vscode_autotools
npm install
npm start
```

To run a new instance of VSCode with the modified extension:

```sh
# From inside the vscode_autotools folder you just cloned:
code --disable-extensions --extensionDevelopmentPath=$PWD
```

Using `npm start`, the `.YAML-tmLanguage` files are automatically built
into `.tmLanguage` and `.JSON-tmLanguage`. Whenever you change the YAML
files, it will rebuild the JSON and YAML files. Then do ⇧⌘P and `Reload Window` to observe the changes on a m4/Makefile/Makefile.am file.

You can use `npm start -- --json` in order to use the JSON-tmLanguage files
as the source, in which case `.YAML-tmLanguage` and `.tmLanguage` will be
generated from the json file.

I chose to convert from JSON to YAML for three reasons: YAML is way less
verbose, does not need two backslashes for each backslash and has proper
comments. In order to have a proper Yaml autocompletion (I know everybody
loves the vscode's JSON autocompletion and schema helpers), I recommend to
install the Red Hat YAML extension and add the following to your settings:

```json
"yaml.schemas": {
    "https://cdn.rawgit.com/martinring/tmlanguage/master/tmlanguage.json": "*.YAML-tmLanguage"
}
```

## Publishing to vsce & secrets

Before publishing, I go into package.json and bump the version and commit
that. I also `git tag` with that same version.

### For publishing to the official extension marketplace

**Secret required**: `VSCE_TOKEN` (stored in @maelvls's 1Password)

```sh
export VSCE_TOKEN=<the-token>
npm install -g vsce
cat <<EOF > ~/.vsce
{"publishers":[{"name":"maelvalais","pat":"$VSCE_TOKEN"}]}
EOF
vsce publish
```

> Note: I created the [publisher id](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) "maelvalais" with
>
> ```sh
> vsce create-publisher maelvalais
> ```

### For publishing to open-vsce

**Secret required**: `OVSX_PAT` (stored in @maelvls's 1Password)

```sh
export OVSX_PAT=<the-token>
npm install -g ovsx
ovsx publish
```

> Note: I created the [namespace](https://open-vsx.org/user-settings/namespaces) "maelvalais" with
>
> ```sh
> ovsx create-namespace maelvalais
> ```
