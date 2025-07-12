import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import convertRouter from './routes/convert.route.js';
import { getConnection } from './utils/db.js';

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  await getConnection();
  const app = express();
  const port = 3000;
  app.use(express.json());
  app.use(express.static(join(__dirname, 'public')));
  
  app.use('/convert', convertRouter);

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

}

main();
