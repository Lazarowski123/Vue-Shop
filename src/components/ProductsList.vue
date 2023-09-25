<script setup>
import ProductCard from '../components/ProductCard.vue';
import { computed, ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';
let search = ref('')
const fetchProducts = computed(() => {
    const productsStore = useProductStore()
    const products = productsStore.products
    return products.filter((product) => {
        if (search.value === '') { return true }
        if (product.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
            return true
        }
    })
})
</script>
<template>
    <header class="header">
        <h1 class="tittle">Vue Shop</h1>
        <div class="search">
            <label for="search">Find Product</label>
            <input id="search" type="text" v-model="search">
        </div>
    </header>
    <ul>
        <ProductCard v-for="product in fetchProducts" :key="product.id" :product="product" />
    </ul>
</template>

<style lang="scss" scoped>

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 30vh;
    padding-top: 6rem;

    .tittle {
        font-size: 3.6rem;
        margin-bottom: 2rem;
        display: inline-block;
        background-image: linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .search {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        color: white;

        label {
            font-size: 1.6rem;
            margin-bottom: .5rem;
        }

        input {
            border-radius: 5px;
            box-sizing: border-box;
            font: inherit;
            padding: 5px 10px;
            height: 34px;
            width: 100%;
        }
    }
}

@media (min-width: 768px) {
    .header {
        .tittle {
            font-size: 5.2rem;
            margin-bottom: 2rem;
        }

        .search {
            label {
                font-size: 2.2rem;
                margin-bottom: 1rem;
            }

            input {
                padding: 5px 10px;
                width: 300px;
            }
        }
    }
}</style>