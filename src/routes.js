import { Router } from 'express';

const routes = new Router();


routes.get('/', (req, res) => {
  return res.json({ message: "tá funcionando essa porra"});
})



export default routes;