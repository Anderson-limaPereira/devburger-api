
// const configDatabase = {
//     dialect: 'postgres', 
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'postgres',
//     database: 'devburger',
//     define: {
//       timestamps: true,
//       underscored: true,
//       underscoredAll: true,
//     },
//   };
  
//   export default configDatabase; 

export default {
  dialect: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || '',
  database: process.env.PG_DATABASE || 'devburger',
  port: process.env.PG_PORT || 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
