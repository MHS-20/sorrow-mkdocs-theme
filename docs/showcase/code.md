# Code

Code blocks are highlighted with highlight.js in the Sorrow palette.

## Python

```python
from dataclasses import dataclass


@dataclass
class Point:
    x: float
    y: float

    # Distance from the origin.
    def norm(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5
```

## JavaScript

```javascript
const debounce = (fn, ms = 200) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};
```

## Rust

```rust
fn fib(n: u64) -> u64 {
    match n {
        0 | 1 => n,
        _ => fib(n - 1) + fib(n - 2),
    }
}
```

## Go

```go
package main

import "fmt"

func main() {
	for i := 0; i < 3; i++ {
		fmt.Printf("tick %d\n", i)
	}
}
```

## SQL

```sql
SELECT name, COUNT(*) AS total
FROM orders
WHERE created_at >= '2026-01-01'
GROUP BY name
ORDER BY total DESC;
```

## Shell

```bash
for f in docs/*.md; do
  echo "building $f"
done
```

## YAML

```yaml
theme:
  name: sorrow
  highlightjs: true
  hljs_languages:
    - rust
```
