<template>
    <VeeForm class="box-form" @submit="register">
        <h2>Add Product</h2>
        <div class="form-group">
            <label for="name">Name</label>
            <VeeField name="name" v-model="product.name" id="name" type="text" class="form-input" rules="required">
            </VeeField>
            <VeeErrorMessage name="name" class="form-error"></VeeErrorMessage>
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <VeeField name="price" v-model="product.price" id="price" type="number" class="form-input" rules="required">
            </VeeField>
            <VeeErrorMessage name="price" class="form-error"></VeeErrorMessage>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <VeeField v-slot="{ field }" v-model="product.description" name="description" rules="required">
                <textarea id="description" v-bind="field" name="description" class="form-input" />
                <VeeErrorMessage name="description" class="form-error"></VeeErrorMessage>
            </VeeField>
        </div>
        <div class="form-group">
            <label for="image">Image</label>
            <div v-if="imagePreview" class="selected-img">
                <button class="delete-btn" @click="deleteImage">X</button>
                <img :src="imagePreview" alt="product image">
            </div>
            <VeeField name="image" v-model="product.image" class="form-input" rules="required" v-show="!imagePreview"
                id="image" type="file" @change="onFileSelected" accept="image/*">
            </VeeField>
            <VeeErrorMessage name="image" class="form-error"></VeeErrorMessage>
        </div>
        <base-button class="subimt-btn" typ="submit" mode="link">Add Product</base-button>
        <div class="success" v-if="sending">
            <base-spinner class="spinner" v-if="isLoading"></base-spinner>
        </div>
    </VeeForm>
</template>
<script setup>
import { useProductStore } from '../stores/ProductStore';
const productsStore = useProductStore()
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let sending = ref(false)
let isLoading = ref(false)

const router = useRouter()

const imagePreview = ref(null)
const product = ref({
    name: '',
    image: null,
    price: null,
    description: '',
})
const onFileSelected = (e) => {
    const reader = new FileReader()
    reader.onload = (event) => {
        imagePreview.value = event.target.result
        product.value.image = event.target.result
    }
    reader.readAsDataURL(product.value.image)
}
const deleteImage = () => {
    product.value.image = ''
    imagePreview.value = null
}
const register = async () => {
    try {
        sending = true
        isLoading = true
        productsStore.addProduct(product.value)
        setTimeout(() => {
            router.push('/')
        }, 2000);
    } catch {
        alert('error')
    }
}
</script>
<style lang="scss" scoped>
.box-form {
    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
    color: white;

    h2 {
        padding: 2rem;
        text-align: center;
        font-size: 2rem;
        background-image: linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .form-group {
        padding-bottom: 1rem;

        label {
            margin-bottom: 1rem;
            display: inline-block;
            color: #bfbfbf;
        }

        .form-input {
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
            font: inherit;
            padding: 5px 10px;
            transition: all 0.3s ease;
            height: 34px;
            width: 100%;
            color: #949494;
            background-color: #fdfdfd;
        }

        .form-error {
            padding: 5px 20px;
            color: #C82543;
            font-size: 0.8em;
            background: #f4d3d9;
            border-radius: 10px;
        }

        .selected-img {
            position: relative;

            .delete-btn {
                position: absolute;
                top: -10px;
                left: -10px;
                font-size: 1.6rem;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: tomato;
                color: white;
            }

            img {
                width: 200px;
                height: 200px;
                object-fit: cover;
            }
        }
    }
}

@media (min-width: 768px) {
    .box-form {
        width: 80vw;
        margin: 0 auto;

        h2 {
            font-size: 3.5rem;
        }

        .form-group {
            label {
                font-size: 2rem;
            }
        }
    }
}

@media (min-width: 1200px) {
    .box-form {
        max-width: 1000px;
        margin: 0 auto;

        h2 {
            font-size: 4rem;
        }

        .form-group {
            label {
                font-size: 2rem;
            }

            .selected-img {
                img {
                    width: 250px;
                    height: 250px;
                }
            }
        }
    }
}

.success {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: #2c2c2c8c;
    backdrop-filter: blur(2px);
}
</style>