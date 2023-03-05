<script setup>

    import useProducts from '../../composable/products';
    import { onMounted } from 'vue';

    const  { product, getProduct } = useProducts();

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
      <div class= "m-10 p-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        </a>    
        <div class="px-10 pb-5">
            <a href="#">
              <h3 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{{product.name}}</h3>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <p class="font-semibold tracking-tight text-gray-900 dark:text-white">
                Type : {{ product.person }}
                </p>
            </div>
            <div class="flex items-center mt-2.5 mb-5">
                <p class="font-semibold tracking-tight text-gray-900 dark:text-white">
                    Created by : {{ product.person }}
                </p>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">Price  : ${{product.price}}</span>
            </div>
        </div>
        </div>
    </div>
    </template>