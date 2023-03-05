<script setup>

    import useProducts from '../../composable/products';
    import { onMounted } from 'vue';

    const  { product, getProduct, updateProduct, errors } = useProducts();

    const props = defineProps({
        id: {
            require: true,
            type: String
        }
    });

    onMounted(() => getProduct(props.id));

</script>   

<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateProduct($route.params.id)">
            <div class="space-y-6">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
                <input type="text" id="name" v-model="product.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.name">
                <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
    
                </div>
            </div>   
            <div class="mb-6">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
                <input type="number" id="price" v-model="product.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.price">
                <span class="text-sm text-red-400">{{ errors.price[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Type</label>
                <input type="text" id="type" v-model="product.type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.type">
                <span class="text-sm text-red-400">{{ errors.type[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Person</label>
                <input type="text" id="person" v-model="product.person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.person">
                <span class="text-sm text-red-400">{{ errors.person[0] }}</span>
                </div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-white rounded">Submit</button>
            </div>       
            
            </div>
        </form>
    </div>
    </template>