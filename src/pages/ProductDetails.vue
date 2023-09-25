<template>
    <div class="box">
        <div class="card">
            <li class="item">
                <div class="img">
                    <img :src="product.image" alt="product for sell">
                </div>
                <div class="info">
                    <h3>{{ product.name }}</h3>
                    <p>${{ product.price }}</p>
                    <p>{{ product.description }}</p>
                </div>
            </li>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useProductStore } from '../stores/ProductStore';
const productsStore = useProductStore()
const props = defineProps({
    id: String,
});
const product = reactive({
    id: '',
    name: '',
    image: '',
    price: 0,
    description: ''
})
onMounted(() => {
    const selectedProduct = productsStore.products.find(product => product.id == props.id)
    product.id = selectedProduct.id
    product.name = selectedProduct.name
    product.image = selectedProduct.image
    product.price = selectedProduct.price
    product.description = selectedProduct.description
})
</script>
<style lang="scss" scoped>
.box {
    padding-top: 2rem;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: white;
    min-height: 550px;
    background-color: #484848;
    padding: 1rem;

    .item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 550px;
        list-style: none;

        img {
            width: 250px;
            height: 150px;
            object-fit: cover;
            border-radius: 12px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 300px;
            padding: 1rem;

            .details-btn {
                margin: 0;
                padding: 0.75rem 5rem;
            }
        }
    }
}

@media (min-width: 768px) {
    .card {
        padding: 2rem;
        margin: 2rem 5rem;

        .item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            height: 300px;
            list-style: none;

            img {
                width: 300px;
                height: 270px;
                object-fit: cover;
                border-radius: 12px;
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 300px;
                width: 250px;
                padding: 1rem;

                .details-btn {
                    margin: 0;
                    padding: 0.75rem 5rem;
                }
            }
        }
    }
}

@media (min-width: 1200px) {
    .card {
        padding: 2rem;
        margin: 2rem auto;
        width: 1000px;

        .item {
            .info {
                width: 350px;
            }
        }
    }
}
</style>