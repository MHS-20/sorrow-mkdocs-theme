# mkdocs-sorrow-theme

An MkDocs theme in the palette of the Omarchy **Sorrow** theme. It extends the
[Dracula theme for MkDocs](https://github.com/dracula/mkdocs) and keeps its
layout, while replacing its colors and code highlighting.

## Install

```sh
pip install git+<repository-url>
```

Then, in `mkdocs.yml`:

```yaml
theme:
  name: sorrow
  favicon: assets/favicon.ico  # optional; no favicon is linked without it
  logo: assets/logo.png        # optional sidebar logo
```

All Dracula theme options (`highlightjs`, `hljs_languages`, `highlight_css`)
still apply. The theme has no footer, so `show_footer` has no effect.

## How it works

`mkdocs_theme.yml` declares `extends: dracula`, so MkDocs loads the Dracula
templates and assets behind this package's files. The theme adds:

- `assets/css/sorrow.css`: redefines Dracula's color tokens with Sorrow
  colors, and gives the sidebar divider the sidebar color.
- `assets/css/sorrow-highlight.css`: highlight.js colors following Omarchy's
  syntax mapping (`default/themed/helix.toml.tpl`).
- `main.html`: overrides the `styles` block to load both stylesheets and to
  link a favicon only when `theme.favicon` is set, and empties the `footer`
  block.
- `404.html`: extends `main.html`, because Dracula's 404 page extends
  `base.html` directly and would skip the Sorrow styles.

## Palette

| Dracula token | Sorrow key | Color |
| --- | --- | --- |
| `--black` (sidebar, code) | `dark_background` | `#0c0e10` |
| `--blackSecondary` (page) | `background` | `#101315` |
| `--greyTernary` (text) | `foreground` | `#cacccc` |
| `--white` | `yellow` | `#d9dbdc` |
| `--grey` | `selection` | `#3d1621` |
| `--greySecondary` | `muted` | `#4b4e55` |
| `--purple` | `accent` | `#8c2a40` |
| `--cyan` | `cyan` | `#a8566a` |
| `--green` | `green` | `#9fa5a9` |
| `--orange` | `bright_yellow` | `#c9c2b4` |
| `--pink` | `magenta` | `#c27a8b` |
| `--red` | `bright_red` | `#b8384f` |
| `--yellow` | `yellow` | `#d9dbdc` |

Lighter and translucent variants are derived with `color-mix()`.

## Develop

```sh
uv venv && uv pip install -e .
uv run mkdocs serve
```

## Credits

Released under the MIT License. Built on the MIT-licensed [Dracula theme for MkDocs](https://github.com/dracula/mkdocs).
