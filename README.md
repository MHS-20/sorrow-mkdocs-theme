<p align="center">
  <img src="assets/sorrow-title.png" alt="Sorrow" width="600">
</p>

# mkdocs-sorrow-theme

An MkDocs theme in the palette inspired from Omarchy **Solitude** theme. It is based on
the [Dracula theme for MkDocs](https://github.com/dracula/mkdocs): it keeps
Dracula's layout and replaces its colors and code highlighting.

<p align="center">
  <img src="assets/screenshot.png" alt="Sorrow theme screenshot" width="800">
</p>

## Install

```sh
pip install git+https://github.com/MHS-20/sorrow-mkdocs-theme
```

Then, in `mkdocs.yml`:

```yaml
theme:
  name: sorrow
  favicon: assets/favicon.ico  # optional; no favicon is linked without it
  logo: assets/logo.png        # optional sidebar logo
```

`highlightjs` (default `true`) and `hljs_languages` control highlight.js.
There is no footer and no option to load other highlight styles.

## How it works

The Dracula templates and layout assets are copied into this package rather
than inherited with `extends: dracula`, because MkDocs copies every file of a
parent theme into the built site. Copying lets the theme leave out Dracula's
highlight stylesheet, logo, favicon, footer and color tokens.

- `base.html` and `modules/`: Dracula's templates. The sidebar divider uses
  the sidebar color, a favicon is linked only when `theme.favicon` is set, and
  the footer is removed. CSS classes use the prefix `sorrow-` instead of
  `drac-`.
- `assets/css/sorrow-ui.css`, `assets/css/mkdocs.min.css`: Dracula's
  stylesheets without its color tokens; admonition tints read the tokens.
- `assets/css/sorrow.css`: the color tokens.
- `assets/css/sorrow-highlight.css`: highlight.js colors following Omarchy's
  syntax mapping (`default/themed/helix.toml.tpl`).

## Palette

| Token | Sorrow key | Color |
| --- | --- | --- |
| `--black` (sidebar, code) | `dark_background` | `#0c0e10` |
| `--blackSecondary` (page) | `background` | `#101315` |
| `--greyTernary` (text) | `foreground` | `#cacccc` |
| `--white` | `yellow` | `#d9dbdc` |
| `--grey` | `selection` | `#3d1621` |
| `--greySecondary` | `muted` | `#4b4e55` |
| `--purple` | `accent` | `#7a1a2c` |
| `--cyan` | `cyan` | `#943a4c` |
| `--green` | `green` | `#9fa5a9` |
| `--orange` | `bright_yellow` | `#c9c2b4` |
| `--pink` | `magenta` | `#a8495b` |
| `--red` | `bright_red` | `#a82a3c` |
| `--yellow` | `yellow` | `#d9dbdc` |

The four reds are darker than the Sorrow originals. Lighter and translucent
variants are derived with `color-mix()`.

## Develop

```sh
uv venv && uv pip install -e .
uv run mkdocs serve
```

## Credits

Released under the MIT License. Built on the MIT-licensed [Dracula theme for MkDocs](https://github.com/dracula/mkdocs).
