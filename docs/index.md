# Sorrow

Preview page for the theme.

## Code

```python
import os

# Read a setting with a default.
def setting(name: str, default: int = 0) -> int:
    value = os.environ.get(name)
    return int(value) if value is not None else default
```

```bash
for f in *.md; do echo "$f"; done
```

## Admonitions

!!! note
    Note admonition.

!!! warning
    Warning admonition.

!!! danger
    Danger admonition.

## Table

| Key | Value |
| --- | ----- |
| accent | `#7a1a2c` |
| background | `#101315` |
