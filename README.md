# DOGS ID

Age-verification gate for the DOGS ecosystem. Live at **id.wearedogs.net**.

One gate, every site. No birthdays collected, no tracking — the visitor's
choice is remembered on their own device only.

## Standalone

Send visitors to the gate with query params:

```
https://id.wearedogs.net/?age=21&redirect=https://example.com&for=Example
```

| param      | default | meaning                                      |
|------------|---------|----------------------------------------------|
| `age`      | `21`    | minimum age required                         |
| `redirect` | —       | where to send visitors after verification    |
| `for`      | —       | site name shown in the prompt                |

After verification the visitor returns to `redirect` with
`#dogs-verified=<age>` appended.

## Embed on any DOGS site

Drop one script tag — first-time visitors get a fullscreen gate,
then it's remembered per device:

```html
<script src="https://id.wearedogs.net/embed.js" data-age="21"></script>
```

## Deploy

Static files. Serve the repo root from `id.wearedogs.net`
(Cloudflare Pages, GitHub Pages, or any static host).
