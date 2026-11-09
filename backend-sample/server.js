// Reference-only Express server. Not used by the frontend or GitHub Pages.
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const articles = []; // In-memory placeholder only; data resets when server restarts.

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'InkSpace API sample' }));
app.get('/api/articles', (_req, res) => res.json({ data: articles }));
app.post('/api/articles', (req, res) => {
  const { title, body, category = 'General', status = 'Draft' } = req.body;
  if (!title || !body) return res.status(400).json({ error: 'title and body are required' });
  const article = { id: Date.now(), title, body, category, status, createdAt: new Date().toISOString() };
  articles.unshift(article);
  res.status(201).json({ data: article });
});
app.patch('/api/articles/:id', (req, res) => {
  const item = articles.find(a => a.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Article not found' });
  Object.assign(item, req.body);
  res.json({ data: item });
});
app.delete('/api/articles/:id', (req, res) => {
  const index = articles.findIndex(a => a.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ error: 'Article not found' });
  articles.splice(index, 1);
  res.status(204).end();
});

// Uncomment only if intentionally experimenting with the sample API:
// app.listen(4000, () => console.log('InkSpace sample API: http://localhost:4000'));
