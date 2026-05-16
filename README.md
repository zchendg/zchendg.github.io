# Zijun CHEN Academic Homepage

This is a Jekyll-powered academic homepage designed for GitHub Pages at `https://zchendg.github.io/`.

## What To Edit

- Main homepage content: `index.md`
- Sidebar profile data, links, and navigation: `_config.yml`
- Visual styling: `styles.css`
- Portrait: `assets/profile.jpg`
- CV: `assets/Zijun_CHEN_CV.pdf`

For routine updates, you usually only need to edit `index.md`.

## Markdown Editing Notes

Section headings use explicit anchors so the navigation links keep working:

```markdown
## About Me {#about}
```

Lists can receive a style class with Kramdown syntax:

```markdown
- **Jan. 2026** News item text.
{: .news-list}
```

Skills are also a normal Markdown list with a class:

```markdown
- Python
- PyTorch
{: .tags}
```

## Publishing Changes

After editing, run:

```bash
git add .
git commit -m "Update homepage content"
git push
```

GitHub Pages will rebuild the site automatically. The page should update at `https://zchendg.github.io/` after a short delay.
