import { promises as fs } from 'fs';
import path from 'path';
import { Cart, Products, ProductQuery } from '../../interfaces';

const filePath = path.resolve(__dirname, '../../files/productslog.txt');
const filePathCart = path.resolve(__dirname, '../../files/cartlog.txt');

export class CartDAOFS {
	content: Cart[];

	constructor() {
		this.content = [
			{
				id: this.randomId(),
				timestamp: Date.now(),
				products: [],
			},
		];
	}

	randomId(): string {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	async get(id?: string): Promise<Cart[] | Products[]> {
		const txtFile: Cart[] = JSON.parse(
			await fs.readFile(filePathCart, 'utf-8')
		);

		this.content = txtFile.length === 0 ? this.content : txtFile;

		const result = id
			? this.content[0].products.filter((product) => product._id === id)
			: this.content;
		return result;
	}

	async add(id: string): Promise<Products[]> {
		const txtFileC: Cart[] = JSON.parse(
			await fs.readFile(filePathCart, 'utf-8')
		);

		this.content = txtFileC.length === 0 ? this.content : txtFileC;

		const txtFile: Products[] = JSON.parse(
			await fs.readFile(filePath, 'utf-8')
		);

		const newProduct = txtFile.filter((product) => product._id === id);

		this.content[0].products.push(...newProduct);

		await fs.writeFile(filePathCart, JSON.stringify(this.content, null, 2));

		return newProduct.length === 0 ? [] : newProduct;
	}

	async delete(id: string): Promise<Products[]> {
		this.content = JSON.parse(await fs.readFile(filePathCart, 'utf-8'));

		const arrayPosition: number = this.content[0].products
			.map((product) => product._id)
			.indexOf(id);

		const deletedProduct: Products[] = this.content[0].products.filter(
			(product) => product._id == id
		);

		arrayPosition !== -1 && this.content[0].products.splice(arrayPosition, 1);

		await fs.writeFile(filePathCart, JSON.stringify(this.content, null, 2));

		return arrayPosition === -1 ? [] : deletedProduct;
	}

}