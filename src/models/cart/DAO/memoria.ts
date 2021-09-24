import { Cart, Products } from '../../interfaces';
import { productsAPI } from '../../../apis/productsapi';
export class CartDAOMEM {
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

	get(id?: string): Cart[] | Products[] {
		const result = id
			? this.content[0].products.filter((product) => product._id === id)
			: this.content;
		return result;
	}

	async add(id: string): Promise<Products[]> {
		const getProducts = await productsAPI.getProducts();

		const newProduct = getProducts.filter((product) => product._id === id);

		this.content[0].products.push(...newProduct);

		return newProduct.length === 0 ? [] : newProduct;
	}

	delete(id: string): Products[] {
		const arrayPosition: number = this.content[0].products
			.map((product) => product._id)
			.indexOf(id);

		const deletedProduct = this.content[0].products.filter((product) => product._id == id);

		arrayPosition !== -1 && this.content[0].products.splice(arrayPosition, 1);

		return arrayPosition === -1 ? [] : deletedProduct;
	}
}