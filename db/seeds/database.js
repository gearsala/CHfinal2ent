import knex from 'knex';

export async function seed(knex) {
	const initProducts = [
		{
			title: 'guitarra',
			description: 'fender telecaster',
			code: 'code_1254',
			price: 100,
			thumbnail: 'https://imagenes.com',
			stock: 30,
		},
	];
	return knex('products')
		.del()
		.then(() => knex('products').insert(initProducts));
}