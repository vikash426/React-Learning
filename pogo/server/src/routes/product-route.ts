import { Router } from 'express';
import { resolve } from 'path';
import fs from 'fs-extra';
const file = resolve(__dirname, '../data/product.json');
const data = fs.readJSONSync(file);

const baseUrl = `/product`;

const ProductRoutes = (router: Router) => {

	router.get(`${baseUrl}`, (req, res) => {
		res.json(data['products'] || null);
	});
	
};

export default ProductRoutes;