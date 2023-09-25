import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../pages/NotFound.vue';
import Products from "../pages/Products.vue"
import ProductDetails from '../pages/ProductDetails.vue';
import AddProduct from '../pages/AddProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/AddProduct', component: AddProduct },
    { path: '/products', component: Products },
    {
      path: '/products/:id',
      props: true,
      component: ProductDetails
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
