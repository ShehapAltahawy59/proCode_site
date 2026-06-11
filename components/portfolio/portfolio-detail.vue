<template>
    <section class="relative md:py-24 py-16">
        <div class="container">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-5 md:col-span-6">
                    <div
                        class="grid grid-cols-1 gap-[30px] max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                        <div v-for="(img, index) in projectImages" :key="index"
                            class="relative group cursor-pointer overflow-hidden rounded-md">
                            <img :src="img" class="w-full rounded-md group-hover:scale-110 transition duration-500"
                                :alt="`${projectName} - Image ${index + 1}`" @click="openImageLightbox(index)">
                        </div>
                    </div><!--end grid-->
                </div><!--end col-->

                <div class="lg:col-span-7 md:col-span-6">
                    <div class="sticky top-20">
                        <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-12">
                                <div class="work-details">
                                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">
                                        <h4 class="text-xl font-medium dark:text-white">
                                            {{ projectName }}
                                        </h4>
                                        <span v-if="projectStatus"
                                            :class="projectStatus === 'live'
                                                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
                                                : 'bg-amber-50 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400'"
                                            class="text-xs font-medium px-3 py-1 rounded-full">
                                            {{ projectStatus === 'live'
                                                ? t('portfolio.projectDetails.statusLive')
                                                : t('portfolio.projectDetails.statusDevelopment') }}
                                        </span>
                                    </div>

                                    <div v-if="projectChallenge" class="mb-6">
                                        <h5 class="text-lg font-medium mb-2 dark:text-white">{{
                                            t('portfolio.projectDetails.challenge') }}</h5>
                                        <p class="text-slate-400 dark:text-slate-300">{{ projectChallenge }}</p>
                                    </div>

                                    <div v-if="projectSolution" class="mb-6">
                                        <h5 class="text-lg font-medium mb-2 dark:text-white">{{
                                            t('portfolio.projectDetails.solution') }}</h5>
                                        <p class="text-slate-400 dark:text-slate-300">{{ projectSolution }}</p>
                                    </div>

                                    <div v-if="projectFeatures.length" class="mb-6">
                                        <h5 class="text-lg font-medium mb-3 dark:text-white">{{
                                            t('portfolio.projectDetails.keyFeatures') }}</h5>
                                        <ul class="grid sm:grid-cols-2 grid-cols-1 gap-2">
                                            <li v-for="(item, index) in projectFeatures" :key="index"
                                                class="flex items-start text-slate-400 dark:text-slate-300">
                                                <i class="uil uil-check-circle text-blue-800 text-lg me-2 mt-0.5 flex-shrink-0"></i>
                                                <span>{{ item }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div v-if="projectTechStack.length" class="mb-6">
                                        <h5 class="text-lg font-medium mb-3 dark:text-white">{{
                                            t('portfolio.projectDetails.techStack') }}</h5>
                                        <div class="flex flex-wrap gap-2">
                                            <span v-for="(tech, index) in projectTechStack" :key="index"
                                                class="text-sm font-medium px-3 py-1 rounded-full bg-blue-800/10 text-blue-800 dark:bg-blue-400/10 dark:text-blue-400">
                                                {{ tech }}
                                            </span>
                                        </div>
                                    </div>

                                    <div v-if="projectOutcome" class="mb-6">
                                        <h5 class="text-lg font-medium mb-2 dark:text-white">{{
                                            t('portfolio.projectDetails.outcome') }}</h5>
                                        <p class="text-slate-400 dark:text-slate-300">{{ projectOutcome }}</p>
                                    </div>
                                </div>
                            </div><!--end col-->

                            <div class="lg:col-span-7">
                                <div class="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                                    <h5
                                        class="text-lg font-medium border-b border-gray-100 dark:border-gray-700 pb-3 mb-3 dark:text-white">
                                        {{ t('portfolio.projectDetails.projectInfo') }} :
                                    </h5>
                                    <dl class="grid grid-cols-12 mb-0">
                                        <dt class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.location') }} :</dt>
                                        <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{
                                            projectLocation }}</dd>

                                        <dt v-if="projectStatus" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.status') }} :</dt>
                                        <dd v-if="projectStatus"
                                            class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{
                                                projectStatus === 'live'
                                                    ? t('portfolio.projectDetails.statusLive')
                                                    : t('portfolio.projectDetails.statusDevelopment') }}</dd>

                                        <dt v-if="projectClient" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.client') }} :</dt>
                                        <dd v-if="projectClient"
                                            class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{
                                                projectClient }}</dd>

                                        <dt v-if="projectCategory" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.category') }} :</dt>
                                        <dd v-if="projectCategory"
                                            class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{
                                                projectCategory }}</dd>

                                        <dt v-if="projectDate" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.date') }} :</dt>
                                        <dd v-if="projectDate"
                                            class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{
                                                projectDate }}</dd>

                                        <dt v-if="projectUrl" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{
                                            t('portfolio.projectDetails.url') || 'URL' }} :</dt>
                                        <dd v-if="projectUrl"
                                            class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">
                                            <a :href="projectUrl" target="_blank"
                                                class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-all">{{
                                                    projectUrl }}</a>
                                        </dd>
                                    </dl>

                                    <a v-if="projectUrl" :href="projectUrl" target="_blank"
                                        class="mt-5 py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white rounded-md">
                                        <i class="uil uil-external-link-alt align-middle me-2"></i>{{ t('portfolio.projectDetails.visitWebsite') }}
                                    </a>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container lg:mt-24 mt-16">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-6 md:text-2xl text-xl font-medium dark:text-white">{{
                    t('portfolio.projectDetails.haveQuestion') }}</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('contact.description') }}</p>

                <div class="mt-6">
                    <NuxtLink to="/#contact"
                        class="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white rounded-md">
                        <i class="uil uil-phone align-middle me-2"></i> {{ t('portfolio.projectDetails.contactUs') }}
                    </NuxtLink>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <!-- Image Lightbox -->
    <vue-easy-lightbox :visible="isImageLightboxOpen" :imgs="lightboxImages" :index="lightboxIndex"
        @hide="closeImageLightbox"></vue-easy-lightbox>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useRoute } from 'vue-router'
import VueEasyLightbox from 'vue-easy-lightbox'

import myClinicSystemImg from '@/assets/images/3yadty/photo_2026-02-12_12-05-25.jpg';
import nutriFitImg from '@/assets/images/nutrifit/photo_2026-02-12_12-05-29.jpg';
import lmenusImg from '@/assets/images/Lmenus/photo_2026-02-12_12-05-38.jpg';
import madinatakImg1 from '@/assets/images/madinatak/madinatak-1.jpg';
import madinatakImg2 from '@/assets/images/madinatak/madinatak-2.jpg';
import madinatakImg3 from '@/assets/images/madinatak/madinatak-3.jpg';
import madinatakImg4 from '@/assets/images/madinatak/madinatak-4.jpg';

const madinatakImages = [madinatakImg1, madinatakImg2, madinatakImg3, madinatakImg4];

import taqrerkImg1 from '@/assets/images/taqrerk/taqrerk-1.png';
import taqrerkImg2 from '@/assets/images/taqrerk/taqrerk-2.png';
import taqrerkImg3 from '@/assets/images/taqrerk/taqrerk-3.png';
import taqrerkImg4 from '@/assets/images/taqrerk/taqrerk-4.png';
import taqrerkImg5 from '@/assets/images/taqrerk/taqrerk-5.png';
import taqrerkImg6 from '@/assets/images/taqrerk/taqrerk-6.png';

const taqrerkImages = [taqrerkImg1, taqrerkImg2, taqrerkImg3, taqrerkImg4, taqrerkImg5, taqrerkImg6];

import dogLifeAIImg from '@/assets/images/dog life/photo_2026-02-12_12-05-33.jpg';
import qvStyleImg1 from '@/assets/images/qvstyle/Screenshot 2026-02-12 134838.png';
import qvStyleImg2 from '@/assets/images/qvstyle/Screenshot 2026-02-12 134845.png';
import qvStyleImg3 from '@/assets/images/qvstyle/Screenshot 2026-02-12 134907.png';
import qvStyleImg4 from '@/assets/images/qvstyle/Screenshot 2026-02-12 134935.png';
import qvStyleImg5 from '@/assets/images/qvstyle/Screenshot 2026-02-12 134953.png';
import qvStyleImg6 from '@/assets/images/qvstyle/Screenshot 2026-02-12 135053.png';
import qvStyleImg7 from '@/assets/images/qvstyle/Screenshot 2026-02-12 135105.png';
import qvStyleImg8 from '@/assets/images/qvstyle/Screenshot 2026-02-12 135610.png';

const qvStyleImages = [
    qvStyleImg1, qvStyleImg2, qvStyleImg3, qvStyleImg4,
    qvStyleImg5, qvStyleImg6, qvStyleImg7, qvStyleImg8
];

import turathnaImg1 from '@/assets/images/turathna/Screenshot 2026-02-12 140630.png';
import turathnaImg2 from '@/assets/images/turathna/Screenshot 2026-02-12 140639.png';
import turathnaImg3 from '@/assets/images/turathna/Screenshot 2026-02-12 140647.png';
import turathnaImg4 from '@/assets/images/turathna/Screenshot 2026-02-12 140656.png';
import turathnaImg5 from '@/assets/images/turathna/Screenshot 2026-02-12 140704.png';
import turathnaImg6 from '@/assets/images/turathna/Screenshot 2026-02-12 140719.png';
import turathnaImg7 from '@/assets/images/turathna/Screenshot 2026-02-12 140725.png';
import turathnaImg8 from '@/assets/images/turathna/Screenshot 2026-02-12 140741.png';
import turathnaImg9 from '@/assets/images/turathna/Screenshot 2026-02-12 140758.png';
import turathnaImg10 from '@/assets/images/turathna/Screenshot 2026-02-12 140814.png';

const turathnaImages = [
    turathnaImg1, turathnaImg2, turathnaImg3, turathnaImg4, turathnaImg5,
    turathnaImg6, turathnaImg7, turathnaImg8, turathnaImg9, turathnaImg10
];

// Import Mostakbal Masr images
// import mostakbalImg1 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155820.png'
// import mostakbalImg2 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155828.png'
// import mostakbalImg3 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155832.png'
// import mostakbalImg4 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155837.png'
// import mostakbalImg5 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155851.png'
// import mostakbalImg6 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155855.png'
// import mostakbalImg7 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155921.png'
// import mostakbalImg8 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155933.png'
// import mostakbalImg9 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160034.png'
// import mostakbalImg10 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160042.png'
// import mostakbalImg11 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160047.png'
// import mostakbalImg12 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160052.png'
// import mostakbalImg13 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160101.png'
// import mostakbalImg14 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160108.png'
// import mostakbalImg15 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160113.png'
// import mostakbalImg16 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160118.png'

// const mostakbalMasrImages = [
//     mostakbalImg1, mostakbalImg2, mostakbalImg3, mostakbalImg4,
//     mostakbalImg5, mostakbalImg6, mostakbalImg7, mostakbalImg8,
//     mostakbalImg9, mostakbalImg10, mostakbalImg11, mostakbalImg12,
//     mostakbalImg13, mostakbalImg14, mostakbalImg15, mostakbalImg16
// ]

// Import Monorail Garage images
// import monorailImg1 from '@/assets/images/monorail/Screenshot 2025-12-09 161651.png'
// import monorailImg2 from '@/assets/images/monorail/Screenshot 2025-12-09 161657.png'
// import monorailImg3 from '@/assets/images/monorail/Screenshot 2025-12-09 161703.png'
// import monorailImg4 from '@/assets/images/monorail/Screenshot 2025-12-09 161708.png'
// import monorailImg5 from '@/assets/images/monorail/Screenshot 2025-12-09 161714.png'
// import monorailImg6 from '@/assets/images/monorail/Screenshot 2025-12-09 161718.png'
// import monorailImg7 from '@/assets/images/monorail/Screenshot 2025-12-09 161725.png'
// import monorailImg8 from '@/assets/images/monorail/Screenshot 2025-12-09 161730.png'
// import monorailImg9 from '@/assets/images/monorail/Screenshot 2025-12-09 161736.png'
// import monorailImg10 from '@/assets/images/monorail/Screenshot 2025-12-09 161742.png'

// const monorailGarageImages = [
//     monorailImg1, monorailImg2, monorailImg3, monorailImg4,
//     monorailImg5, monorailImg6, monorailImg7, monorailImg8,
//     monorailImg9, monorailImg10
// ]

// Import Administration 90th Street images
// import admin90thImg1 from '@/assets/images/90th/Screenshot 2025-12-09 162536.png'
// import admin90thImg2 from '@/assets/images/90th/Screenshot 2025-12-09 162541.png'
// import admin90thImg3 from '@/assets/images/90th/Screenshot 2025-12-09 162546.png'
// import admin90thImg4 from '@/assets/images/90th/Screenshot 2025-12-09 162551.png'
// import admin90thImg5 from '@/assets/images/90th/Screenshot 2025-12-09 162558.png'
// import admin90thImg6 from '@/assets/images/90th/Screenshot 2025-12-09 162603.png'
// import admin90thImg7 from '@/assets/images/90th/Screenshot 2025-12-09 162611.png'
// import admin90thImg8 from '@/assets/images/90th/Screenshot 2025-12-09 162615.png'

// const administration90thImages = [
//     admin90thImg1, admin90thImg2, admin90thImg3, admin90thImg4,
//     admin90thImg5, admin90thImg6, admin90thImg7, admin90thImg8
// ]

// Import New Administrative Capital images
// import newAdminCapitalImg1 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163033.png'
// import newAdminCapitalImg2 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163039.png'
// import newAdminCapitalImg3 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163043.png'
// import newAdminCapitalImg4 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163048.png'

// const newAdminCapitalImages = [
//     newAdminCapitalImg1, newAdminCapitalImg2, newAdminCapitalImg3, newAdminCapitalImg4
// ]

// Import New Damietta images
// import newDamiettaImg1 from '@/assets/images/damietta/Screenshot 2025-12-09 164002.png'
// import newDamiettaImg2 from '@/assets/images/damietta/Screenshot 2025-12-09 164007.png'
// import newDamiettaImg3 from '@/assets/images/damietta/Screenshot 2025-12-09 164012.png'
// import newDamiettaImg4 from '@/assets/images/damietta/Screenshot 2025-12-09 164017.png'

// const newDamiettaImages = [
//     newDamiettaImg1, newDamiettaImg2, newDamiettaImg3, newDamiettaImg4
// ]

// Import New Administrative Capital Pumps images
// import newAdminCapitalPumpsImg1 from '@/assets/images/New Administrative/Screenshot 2025-12-09 164250.png'
// import newAdminCapitalPumpsImg2 from '@/assets/images/New Administrative/Screenshot 2025-12-09 164257.png'

// const newAdminCapitalPumpsImages = [
//     newAdminCapitalPumpsImg1, newAdminCapitalPumpsImg2
// ]

export default {
    components: {
        VueEasyLightbox
    },
    setup() {
        const { t, currentLang } = useLanguage()
        const route = useRoute()
        const isImageLightboxOpen = ref(false)
        const lightboxImages = ref([])
        const lightboxIndex = ref(0)

        const projectId = computed(() => {
            return route.query.id || 'dog-life-ai'
        })

        const projectData = computed(() => {
            const lang = currentLang.value
            if (projectId.value === 'madinatak') {
                return {
                    name: t('portfolio.projectDetails.madinatak.name'),
                    location: t('portfolio.projectDetails.madinatak.location'),
                    status: t('portfolio.projectDetails.madinatak.status'),
                    challenge: t('portfolio.projectDetails.madinatak.challenge'),
                    solution: t('portfolio.projectDetails.madinatak.solution'),
                    features: t('portfolio.projectDetails.madinatak.features'),
                    techStack: t('portfolio.projectDetails.madinatak.techStack'),
                    outcome: t('portfolio.projectDetails.madinatak.outcome'),
                    url: t('portfolio.projectDetails.madinatak.url'),
                    images: madinatakImages
                }
            }
            if (projectId.value === 'taqrerk') {
                return {
                    name: t('portfolio.projectDetails.taqrerk.name'),
                    location: t('portfolio.projectDetails.taqrerk.location'),
                    client: t('portfolio.projectDetails.taqrerk.client'),
                    status: t('portfolio.projectDetails.taqrerk.status'),
                    challenge: t('portfolio.projectDetails.taqrerk.challenge'),
                    solution: t('portfolio.projectDetails.taqrerk.solution'),
                    features: t('portfolio.projectDetails.taqrerk.features'),
                    techStack: t('portfolio.projectDetails.taqrerk.techStack'),
                    outcome: t('portfolio.projectDetails.taqrerk.outcome'),
                    url: t('portfolio.projectDetails.taqrerk.url'),
                    images: taqrerkImages
                }
            }
            if (projectId.value === 'dog-life-ai') {
                return {
                    name: t('portfolio.projectDetails.dogLifeAI.name'),
                    location: t('portfolio.projectDetails.dogLifeAI.location'),
                    status: t('portfolio.projectDetails.dogLifeAI.status'),
                    challenge: t('portfolio.projectDetails.dogLifeAI.challenge'),
                    solution: t('portfolio.projectDetails.dogLifeAI.solution'),
                    features: t('portfolio.projectDetails.dogLifeAI.features'),
                    techStack: t('portfolio.projectDetails.dogLifeAI.techStack'),
                    outcome: t('portfolio.projectDetails.dogLifeAI.outcome'),
                    url: t('portfolio.projectDetails.dogLifeAI.url'),
                    images: [dogLifeAIImg]
                }
            }
            if (projectId.value === 'lmenus') {
                return {
                    name: t('portfolio.projectDetails.lmenus.name'),
                    location: t('portfolio.projectDetails.lmenus.location'),
                    status: t('portfolio.projectDetails.lmenus.status'),
                    challenge: t('portfolio.projectDetails.lmenus.challenge'),
                    solution: t('portfolio.projectDetails.lmenus.solution'),
                    features: t('portfolio.projectDetails.lmenus.features'),
                    techStack: t('portfolio.projectDetails.lmenus.techStack'),
                    outcome: t('portfolio.projectDetails.lmenus.outcome'),
                    images: [lmenusImg]
                }
            }
            if (projectId.value === 'nutri-fit') {
                return {
                    name: t('portfolio.projectDetails.nutriFit.name'),
                    location: t('portfolio.projectDetails.nutriFit.location'),
                    status: t('portfolio.projectDetails.nutriFit.status'),
                    challenge: t('portfolio.projectDetails.nutriFit.challenge'),
                    solution: t('portfolio.projectDetails.nutriFit.solution'),
                    features: t('portfolio.projectDetails.nutriFit.features'),
                    techStack: t('portfolio.projectDetails.nutriFit.techStack'),
                    outcome: t('portfolio.projectDetails.nutriFit.outcome'),
                    url: t('portfolio.projectDetails.nutriFit.url'),
                    images: [nutriFitImg]
                }
            }
            if (projectId.value === 'my-clinic-system') {
                return {
                    name: t('portfolio.projectDetails.myClinicSystem.name'),
                    location: t('portfolio.projectDetails.myClinicSystem.location'),
                    status: t('portfolio.projectDetails.myClinicSystem.status'),
                    challenge: t('portfolio.projectDetails.myClinicSystem.challenge'),
                    solution: t('portfolio.projectDetails.myClinicSystem.solution'),
                    features: t('portfolio.projectDetails.myClinicSystem.features'),
                    techStack: t('portfolio.projectDetails.myClinicSystem.techStack'),
                    outcome: t('portfolio.projectDetails.myClinicSystem.outcome'),
                    images: [myClinicSystemImg]
                }
            }
            if (projectId.value === 'qv-style') {
                return {
                    name: t('portfolio.projectDetails.qvStyle.name'),
                    location: t('portfolio.projectDetails.qvStyle.location'),
                    status: t('portfolio.projectDetails.qvStyle.status'),
                    challenge: t('portfolio.projectDetails.qvStyle.challenge'),
                    solution: t('portfolio.projectDetails.qvStyle.solution'),
                    features: t('portfolio.projectDetails.qvStyle.features'),
                    techStack: t('portfolio.projectDetails.qvStyle.techStack'),
                    outcome: t('portfolio.projectDetails.qvStyle.outcome'),
                    url: t('portfolio.projectDetails.qvStyle.url'),
                    images: qvStyleImages
                }
            }
            if (projectId.value === 'turathna') {
                return {
                    name: t('portfolio.projectDetails.turathna.name'),
                    location: t('portfolio.projectDetails.turathna.location'),
                    status: t('portfolio.projectDetails.turathna.status'),
                    challenge: t('portfolio.projectDetails.turathna.challenge'),
                    solution: t('portfolio.projectDetails.turathna.solution'),
                    features: t('portfolio.projectDetails.turathna.features'),
                    techStack: t('portfolio.projectDetails.turathna.techStack'),
                    outcome: t('portfolio.projectDetails.turathna.outcome'),
                    url: t('portfolio.projectDetails.turathna.url'),
                    images: turathnaImages
                }
            }
            return null
        })

        const projectName = computed(() => projectData.value?.name || '')
        const projectLocation = computed(() => projectData.value?.location || '')
        const projectStatus = computed(() => projectData.value?.status || null)
        const projectChallenge = computed(() => projectData.value?.challenge || '')
        const projectSolution = computed(() => projectData.value?.solution || '')
        const projectFeatures = computed(() => {
            const features = projectData.value?.features
            return Array.isArray(features) ? features : []
        })
        const projectTechStack = computed(() => {
            const techStack = projectData.value?.techStack
            return Array.isArray(techStack) ? techStack : []
        })
        const projectOutcome = computed(() => projectData.value?.outcome || '')
        const projectImages = computed(() => projectData.value?.images || [])
        const projectClient = computed(() => projectData.value?.client || null)
        const projectCategory = computed(() => projectData.value?.category || null)
        const projectDate = computed(() => projectData.value?.date || null)
        const projectUrl = computed(() => projectData.value?.url || null)

        const openImageLightbox = (index) => {
            lightboxImages.value = projectImages.value
            lightboxIndex.value = index
            isImageLightboxOpen.value = true
        }

        const closeImageLightbox = () => {
            isImageLightboxOpen.value = false
        }

        return {
            t,
            projectName,
            projectLocation,
            projectStatus,
            projectChallenge,
            projectSolution,
            projectFeatures,
            projectTechStack,
            projectOutcome,
            projectImages,
            projectClient,
            projectCategory,
            projectDate,
            projectUrl,
            isImageLightboxOpen,
            lightboxImages,
            lightboxIndex,
            openImageLightbox,
            closeImageLightbox
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #1e40af rgba(0, 0, 0, 0.1);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #1e40af;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1e3a8a;
}

/* Dark mode scrollbar */
.dark .custom-scrollbar {
    scrollbar-color: #1e40af rgba(255, 255, 255, 0.1);
}

.dark .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #1e40af;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1e3a8a;
}
</style>
