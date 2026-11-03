<template>
    <!-- Our products -->
    <section class="relative md:py-24 py-12" id="products">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('products.subtitle') }}</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('products.title') }}</h3>
                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('products.description') }}</p>
            </div><!--end grid-->

            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                <div v-for="item in items" :key="item.key"
                    class="product-card flex flex-col rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="product-image" :class="`product-image--${item.key}`">
                        <img :src="images[item.key]" :alt="item.name" loading="lazy">
                    </div>

                    <div class="flex flex-col flex-1 p-6">
                        <span class="self-start text-xs font-medium text-blue-800 bg-blue-800/10 rounded-full px-3 py-1 mb-3">{{ item.tag }}</span>
                        <h4 class="text-xl font-semibold dark:text-white mb-2">{{ item.name }}</h4>
                        <p class="text-slate-400 dark:text-slate-300 mb-4">{{ item.description }}</p>

                        <ul class="list-none mb-6 space-y-2">
                            <li v-for="feature in item.features" :key="feature" class="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                <span class="text-blue-800 font-bold">✓</span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>

                        <a :href="links[item.key]" :target="links[item.key].startsWith('/') ? undefined : '_blank'" rel="noopener"
                            class="btn mt-auto bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white rounded-md text-center">{{
                                item.button }}</a>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import storixImg from '@/assets/images/products/storix.webp'
import wavelinkImg from '@/assets/images/products/wavelink.png'
import restoraImg from '@/assets/images/products/restora.webp'

const { t, currentLang } = useLanguage()

const items = computed(() => t('products.items'))

const images = { storix: storixImg, wavelink: wavelinkImg, restora: restoraImg }

// Storix has its own landing page (pages/storix.vue), with the demo and WhatsApp buttons.
const links = computed(() => ({
    storix: '/storix',
    wavelink: currentLang.value === 'ar' ? 'https://wavelink.procode-solutions.com/ar' : 'https://wavelink.procode-solutions.com/',
    restora: 'https://madentak-ban-edak.web.app/restora'
}))
</script>

<style lang="scss" scoped>
.product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }
}

.product-image {
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #f1f5f9;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
}

.product-image--wavelink {
    background: #0b1c30;

    img {
        object-position: 20% center;
    }
}

.product-image--restora {
    background: #fbf8f9;
}
</style>
