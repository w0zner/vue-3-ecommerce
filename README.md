# Vue 3 Ecommerce

Tienda Online.

## Entities 

### Product

- id
- name
- description 
- price
- image

### Category

- id
- name
- description

### Cart

- products: '[{productId: 1, quantity: 3}, {productId: 3, quantity: 2}]'


## Components

### ProductCard

## Pages

- / -> Todos los productos
- /product/1 -> Detalle de producto por id
- /category/5 -> Productos por categoria
- /cart -> Ver carrito de compras



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
