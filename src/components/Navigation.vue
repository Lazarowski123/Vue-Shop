<template>
    <div class="nav">
        <div class="add-product">
            <base-button class="add-btn" mode="link" link to="/AddProduct">+Add Product</base-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(87, 87, 87, 0.681);
    z-index: 10;
    .add-btn {
        font-size: 1.4rem;
    }
    @media (min-width: 768px) {
        .add-btn {
            font-size: 1.8rem;
        }
    }
}
</style>