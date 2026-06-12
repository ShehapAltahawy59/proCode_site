<template>
    <div>
        <section class="relative md:py-24 py-16" id="reviews">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('reviews.title') }}</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('reviews.subtitle') }}</h3>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('reviews.description') }}</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <a v-for="(review, index) in reviews" :key="index" :href="review.link" target="_blank"
                        rel="noopener noreferrer"
                        class="flex flex-col h-full bg-white dark:bg-slate-900 rounded-lg shadow shadow-slate-200 dark:shadow-slate-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div class="flex-1 flex items-center justify-center overflow-hidden">
                            <img :src="review.image" :alt="review.source"
                                class="w-full h-auto object-cover group-hover:scale-105 transition duration-500">
                        </div>
                        <div class="p-4 flex items-center justify-between mt-auto">
                            <span class="text-sm text-slate-400 dark:text-slate-300">{{ review.source }}</span>
                            <span class="text-blue-800 text-sm font-medium">{{ t('reviews.viewReview') }} <i class="uil uil-external-link-alt"></i></span>
                        </div>
                    </a>
                </div><!--end grid-->
            </div><!--end container-->
        </section>
    </div>
</template>

<script setup>
import mostaqlImg1 from '@/assets/images/reviews/mostaql-1.png'
import mostaqlImg2 from '@/assets/images/reviews/mostaql-2.png'
import mostaqlImg3 from '@/assets/images/reviews/mostaql-3.png'
import facebookImg1 from '@/assets/images/reviews/facebook-1.png'
import facebookImg2 from '@/assets/images/reviews/facebook-2.png'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const MOSTAQL_URL = 'https://mostaql.com/u/Shehap_Altahawy/reviews'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61579639703417'

const reviews = [
    { image: mostaqlImg1, source: 'Mostaql', link: MOSTAQL_URL },
    { image: mostaqlImg2, source: 'Mostaql', link: MOSTAQL_URL },
    { image: mostaqlImg3, source: 'Mostaql', link: MOSTAQL_URL },
    { image: facebookImg1, source: 'Facebook', link: FACEBOOK_URL },
    { image: facebookImg2, source: 'Facebook', link: FACEBOOK_URL }
]
</script>
