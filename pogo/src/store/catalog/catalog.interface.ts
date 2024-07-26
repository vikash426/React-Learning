export interface ICatalogState {
    products: Product[]
}

export interface Product {
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}