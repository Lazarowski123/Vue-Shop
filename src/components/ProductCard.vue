<script setup>
const props = defineProps({
    product: Object,
});
const productId = () => {
    return props.product.id;
}
</script>
<template>
    <div class="card">
        <li class="item">
            <div class="img">
                <img :src="`${product.image}`" alt="product for sell">
            </div>
            <div class="info">
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
                <base-button class="details-btn" mode="link" link :to="`/products/${productId()}`">Details</base-button>
            </div>
        </li>
    </div>
</template>
<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: white;
    background-color: #484848;
    padding: 1rem;
    margin: 2rem 1.5rem;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 300px;
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
            height: 130px;
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