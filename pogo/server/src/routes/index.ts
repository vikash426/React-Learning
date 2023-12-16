import express from 'express';
import ProductRoutes from './product-route';


const router: express.Router = express.Router();

// appending identity routes
ProductRoutes(router);

export default router;

