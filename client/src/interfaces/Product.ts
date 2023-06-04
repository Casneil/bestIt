interface Image {
	id: number;
	image: string;
}

interface BaseProduct {
	id: number;
	articleNumber: number;
	createdAt: string;
	updatedAt: string;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
}

interface Product extends BaseProduct{
	images: Image[];
}

export type {
	BaseProduct,
	Product
}
