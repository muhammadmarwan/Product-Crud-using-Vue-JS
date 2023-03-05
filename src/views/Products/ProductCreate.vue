<script setup>
    import { reactive } from 'vue';
    import useProducts from '../../composable/products';

    const  { storeProducts, errors } = useProducts();    

    const form = reactive({
        name:"",
        price:"",
        type:""
    })
</script>

<template>
<div class="mt-12">
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeProducts(form)">
        <div class="space-y-6">
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
            <input type="text" id="name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.name">
            <span class="text-sm text-red-400">{{ errors.name[0] }}</span>

            </div>
        </div>   
        <div class="mb-6">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
            <input type="number" id="price" v-model="form.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.price">
            <span class="text-sm text-red-400">{{ errors.price[0] }}</span>
            </div>
        </div>
        <div class="mb-6">
            <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Type</label>
            <select id="type" v-model="form.type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="item">Item</option>
                <option value="service">Service</option>
            </select>
            <div v-if="errors.type">
            <span class="text-sm text-red-400">{{ errors.type[0] }}</span>
            </div>
        </div>
        <div class="mt-4">
            <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-white rounded">Submit</button>
        </div>       
        
        </div>
    </form>
</div>
</template>