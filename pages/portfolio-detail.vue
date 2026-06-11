<template>
    <navBar />
    <!-- Hero Start -->
    <section class="pt-6">

    </section>
    <!-- Hero End -->
    <portfoliodetail />
    <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import portfoliodetail from '@/components/portfolio/portfolio-detail.vue';
import fooTer from '@/components/footer.vue'

export default {
    components: {
        navBar,
        portfoliodetail,
        fooTer
    }
}
</script>