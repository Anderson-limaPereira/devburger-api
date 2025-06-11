
// import app from './app.js'

// app.listen(3001, () => console.log('server is running at port 3001...'))

import app from './app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
});
