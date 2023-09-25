import { defineStore } from "pinia";
import { ref } from 'vue'

export const useProductStore = defineStore("ProductStore", () => {
  const products = ref([
    {
      id: 1,
      name: "Xbox Series X",
      image: "/src/assets/img/xbox1.jpg",
      price: 300,
      description: "The Xbox Series X's console form is designed to be unobtrusive and minimalistic. It has a 15.1 cm × 15.1 cm (5.9 in × 5.9 in) footprint, is 30.1 cm (11.9 in) high, and weighs 4.45 kg (9.8 lb). Designed to sit vertically, it can also be used on its side. Its front has the main power button and an Ultra HD Blu-ray drive."
    },
    {
      id: 2,
      name: "Keyboard Keychron",
      image: "/src/assets/img/Keyboard.jpeg",
      price: 100,
      description: "Keychron is one of the few mechanical keyboards that features macOS media keys (F1 to F12) in a Mac layout with the same as conventional Mac systems."
    },
    {
      id: 3,
      name: "LG Monitor",
      image: "/src/assets/img/LG.avif",
      price: 240,
      description: "LG makes great gaming monitors and they have a wide selection of displays available, from high-end to budget-friendly monitors."
    },
  ])
  const getProductLength = () => { return products.value.length }

  const addProduct = (product) => {
    const lastId = getProductLength()
    const newProduct = {
      id: lastId + 1,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description
    }
    products.value.push(newProduct)
  }
  return {
    products, addProduct, getProductLength
  }
})




