<script setup>
    import useProducts from '../../composable/products';
    import { onMounted } from 'vue';

    const { products, getProducts, destroyProduct } = useProducts();

onMounted(()=>getProducts());    

</script>

<template>
<div class="mt-12">  
<div class="flex justify-end m-2 p-2">
    <RouterLink :to="{name:'ProductCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-white rounded">New Product</RouterLink> 

</div>    
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Person
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">
                    {{ product.name }}
                </td>
                <td class="py-4 px-6">
                    {{ product.price }}
                </td>
                <td class="py-4 px-6">
                    {{ product.person }}
                </td>
                <td class="py-4 px-6">
                    {{ product.type }}
                </td>
                <td class="py-4 px-6">
                    {{ product.status }}
                </td>
                <td class="py-4 px-6 space-x-2">
                    <RouterLink :to="{name: 'ProductEdit', params: {id: product.id}}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-white rounded">
                            Edit
                    </RouterLink>
                    <button @click="destroyProduct(product.id)" class="px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded">
                            Delete
                    </button>
                    <RouterLink :to="{name: 'ProductView', params: {id: product.id}}" class="px-4 py-2 bg-green-500 hover:bg-green-800 text-white rounded">
                            View
                    </RouterLink>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
</div>
</template>