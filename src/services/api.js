const api = {
    products: 'products',
    product: productId => `products/${productId}`,
    optionalProduct: param => `products?options=${param}`,
    collections: 'collections',
    collection: param => `collections/:${param}`,
    categories: 'categories',
    search: query => `search?query=${query}`,
    user: 'user',
    register: 'user/register',
    login: 'user/login',
    refresh: 'user/refresh',
    logout: 'user/logout',
    address: 'user/address',
    amountOfProductsInCart: (productId, amout) => `user/cart/products/${productId}?amount=${amout}`,
    withlistProdact: productId => `user/wishlist/products/${productId}`,
    cartProdact: productId => `user/cart/products/${productId}`
};

export default api;