import express from 'express';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes.js';
import cors from 'cors';
import database from './database/index.js'; 
import path from 'path';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 


class App {
  constructor() {
    this.app = express();
    this.app.use(cors({origin: 'https://lanchonetedevburguer.netlify.app',  credentials: true,}));
    this.middlewares();
    this.routes();
    this.database = database; 
    this.initDatabase(); 
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    );

    this.app.use(express.json());
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.app.use(routes);
  }

  async initDatabase() {
    try {
      await this.database.connection.authenticate(); 
      console.log('Conexão com o banco de dados estabelecida.');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }

    try {
      await this.database.mongoConnection; 
      console.log('Conexão com o MongoDB estabelecida.');
    } catch (error) {
      console.error('Erro ao conectar com o MongoDB:', error);
    }
  }
}

export default new App().app;