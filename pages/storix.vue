<template>
  <div class="sx" :dir="lang === 'ar' ? 'rtl' : 'ltr'" :lang="lang">
    <!-- Top bar -->
    <header class="sx-top">
      <div class="sx-wrap sx-top-in">
        <a href="/storix" class="sx-logo" aria-label="Storix">
          <span class="sx-logo-mark">S</span>
          <span class="sx-logo-text">Storix</span>
          <span class="sx-logo-by">{{ c.by }}</span>
        </a>
        <nav class="sx-top-links">
          <a href="#features">{{ c.nav.features }}</a>
          <a href="#demos">{{ c.nav.demos }}</a>
          <a href="#themes">{{ c.nav.themes }}</a>
          <a href="#pricing">{{ c.nav.pricing }}</a>
          <a href="#faq">{{ c.nav.faq }}</a>
        </nav>
        <div class="sx-top-actions">
          <button type="button" class="sx-lang" @click="toggleLang">{{ lang === 'ar' ? 'English' : 'العربية' }}</button>
          <a :href="WA" target="_blank" rel="noopener" class="sx-btn sx-btn--dark sx-btn--sm" @click="track('Contact')">{{ c.hero.ctaWa }}</a>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="sx-hero">
      <picture>
        <source media="(max-width: 767px)" :srcset="HERO_MOBILE" />
        <img :src="HERO_WIDE" alt="" class="sx-hero-img" fetchpriority="high" />
      </picture>
      <div class="sx-hero-shade" />
      <div class="sx-wrap sx-hero-copy">
        <p class="sx-eyebrow">{{ c.hero.eyebrow }}</p>
        <h1 class="sx-hero-title">{{ c.hero.headline }}</h1>
        <p class="sx-hero-sub">{{ c.hero.subline }}</p>
        <div class="sx-hero-btns">
          <a href="#demos" class="sx-btn sx-btn--light">{{ c.hero.ctaDemo }}</a>
          <a :href="WA" target="_blank" rel="noopener" class="sx-btn sx-btn--ghost" @click="track('Contact')">{{ c.hero.ctaWa }}</a>
        </div>
        <ul class="sx-chips">
          <li v-for="chip in c.hero.chips" :key="chip">{{ chip }}</li>
        </ul>
      </div>
    </section>

    <!-- Problem -->
    <section class="sx-section sx-wrap">
      <h2 class="sx-h2">{{ c.problem.title }}</h2>
      <div class="sx-pains">
        <div v-for="(pain, i) in c.problem.pains" :key="i" class="sx-pain">
          <span class="sx-pain-n">0{{ i + 1 }}</span>
          <p>{{ pain }}</p>
        </div>
      </div>
    </section>

    <!-- Demos: one per trade -->
    <section id="demos" class="sx-section sx-wrap">
      <h2 class="sx-h2 sx-center">{{ c.demos.title }}</h2>
      <p class="sx-lead sx-center">{{ c.demos.line }}</p>
      <div class="sx-demos">
        <article v-for="d in c.demos.items" :key="d.key" class="sx-demo">
          <img :src="d.img" :alt="d.title" loading="lazy" />
          <div class="sx-demo-body">
            <h3>{{ d.title }}</h3>
            <p>{{ d.line }}</p>
            <div class="sx-demo-btns">
              <a :href="d.url" target="_blank" rel="noopener" class="sx-btn sx-btn--dark sx-btn--sm" @click="track('ViewContent')">{{ c.demos.store }}</a>
              <a :href="d.url + '/admin'" target="_blank" rel="noopener" class="sx-btn sx-btn--outline sx-btn--sm" @click="track('ViewContent')">{{ c.demos.admin }}</a>
            </div>
          </div>
        </article>
      </div>
      <p class="sx-demo-logins">
        <span>{{ c.demos.ownerLabel }}: <b dir="ltr">demo@storix.app</b></span>
        <span>{{ c.demos.cashierLabel }}: <b dir="ltr">cashier@storix.app</b></span>
        <span>{{ c.demos.passLabel }}: <b dir="ltr">Demo@1234</b></span>
      </p>
    </section>

    <!-- Features -->
    <section id="features" class="sx-section sx-wrap">
      <h2 class="sx-h2 sx-center">{{ c.features.title }}</h2>
      <div v-for="(f, i) in c.features.main" :key="f.title" class="sx-feature" :class="{ 'sx-feature--flip': i % 2 === 1 }">
        <div class="sx-feature-text">
          <span class="sx-feature-n">{{ i + 1 }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.line }}</p>
        </div>
        <div class="sx-feature-shot" :class="{ 'sx-feature-shot--phone': f.phone }">
          <div class="sx-browser" v-if="!f.phone"><i /><i /><i /></div>
          <img :src="f.img" :alt="f.title" loading="lazy" />
        </div>
      </div>
      <div class="sx-minis">
        <div v-for="m in c.features.minor" :key="m.title" class="sx-mini">
          <h3>{{ m.title }}</h3>
          <p>{{ m.line }}</p>
        </div>
      </div>
      <p class="sx-also">{{ c.features.also }}</p>
    </section>

    <!-- Brand & themes -->
    <section id="themes" class="sx-band">
      <div class="sx-wrap">
        <h2 class="sx-h2 sx-center">{{ c.brand.title }}</h2>
        <p class="sx-lead sx-center">{{ c.brand.line }}</p>
        <p class="sx-center sx-themes-intro">{{ c.brand.themesIntro }}</p>
        <div class="sx-themes">
          <figure v-for="th in c.brand.themes" :key="th.name" class="sx-theme">
            <div class="sx-browser"><i /><i /><i /></div>
            <img :src="th.img" :alt="th.name" loading="lazy" />
            <figcaption><b>{{ th.name }}</b><span>{{ th.line }}</span></figcaption>
          </figure>
        </div>
        <p class="sx-center sx-muted">{{ c.brand.switchLine }}</p>
      </div>
    </section>

    <!-- Steps -->
    <section class="sx-section sx-wrap">
      <h2 class="sx-h2 sx-center">{{ c.steps.title }}</h2>
      <ol class="sx-steps">
        <li v-for="(s, i) in c.steps.items" :key="s.title">
          <span class="sx-step-n">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.line }}</p>
        </li>
      </ol>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="sx-band sx-band--ink">
      <div class="sx-wrap">
        <h2 class="sx-h2 sx-center">{{ c.pricing.title }}</h2>
        <p class="sx-lead sx-center">{{ c.pricing.subline }}</p>
        <div class="sx-plans">
          <div v-for="plan in c.pricing.plans" :key="plan.name" class="sx-plan">
            <h3>{{ plan.name }}</h3>
            <p class="sx-plan-for">{{ plan.for }}</p>
            <p class="sx-plan-monthly">{{ plan.monthly }}</p>
            <p class="sx-plan-setup">{{ plan.setup }}</p>
            <p v-if="plan.example" class="sx-plan-example">{{ plan.example }}</p>
          </div>
        </div>
        <div class="sx-included">
          <b>{{ c.pricing.includedTitle }}</b>
          <ul><li v-for="it in c.pricing.included" :key="it">✓ {{ it }}</li></ul>
        </div>
        <p class="sx-center sx-pricing-notes">{{ c.pricing.yearly }} · {{ c.pricing.payment }}</p>
        <div class="sx-center">
          <a :href="WA" target="_blank" rel="noopener" class="sx-btn sx-btn--light" @click="track('Contact')">{{ c.pricing.cta }}</a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="sx-section sx-wrap sx-faq-wrap">
      <h2 class="sx-h2 sx-center">{{ c.faq.title }}</h2>
      <div class="sx-faq">
        <details v-for="(f, i) in c.faq.items" :key="i" :open="i === 0">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <!-- Final call -->
    <section class="sx-final">
      <div class="sx-wrap sx-center">
        <h2 class="sx-h2">{{ c.final.headline }}</h2>
        <p class="sx-lead">{{ c.final.subline }}</p>
        <div class="sx-hero-btns sx-hero-btns--center">
          <a href="#demos" class="sx-btn sx-btn--light">{{ c.hero.ctaDemo }}</a>
          <a :href="WA" target="_blank" rel="noopener" class="sx-btn sx-btn--ghost" @click="track('Contact')">{{ c.hero.ctaWa }}</a>
        </div>
        <p class="sx-final-phone" dir="ltr">{{ c.final.phone }}</p>
      </div>
    </section>

    <footer class="sx-foot">
      <div class="sx-wrap sx-foot-in">
        <span>© {{ year }} ProCode Solutions</span>
        <a href="/">procode-solutions.com</a>
      </div>
    </footer>

    <a :href="WA" target="_blank" rel="noopener" class="sx-float" :aria-label="c.hero.ctaWa" @click="track('Contact')">
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.3-1.7-.1-.2 0-.4.1-.5l.4-.4.3-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

const DEMO_BASE = 'storix.procode-solutions.com'
const HERO_WIDE = '/storix-assets/storix-hero-wide.webp'
const HERO_MOBILE = '/storix-assets/storix-hero-mobile.webp'
const WA = 'https://wa.me/201551939977?text=' + encodeURIComponent('أهلاً، عايز أعرف أكتر عن Storix')
const year = new Date().getFullYear()
const lang = ref('ar')

// Text from content/procode/campaigns/2026-10-14-landing/landing-copy.md (meta_ads project).
const COPY = {
  ar: {
    by: 'من ProCode',
    nav: { features: 'المميزات', demos: 'الديمو', themes: 'الشكل', pricing: 'الأسعار', faq: 'أسئلة' },
    hero: {
      eyebrow: 'Storix من ProCode · سيستم المحلات والفروع',
      headline: 'مخزن الفروع مش مظبوط؟ سيستم واحد باسمك.',
      subline: 'بدل الكشكول والواتساب والإنستجرام: كاشير في كل فرع، مخزن كل فرع قدامك، ومتجر أونلاين باسم محلك.',
      ctaDemo: 'جرّب الديمو بنفسك',
      ctaWa: 'كلّمنا واتساب',
      chips: ['جاهز باسمك في 3 أيام', 'من غير عمولة على الطلبات', 'الاستضافة والدعم جوه الاشتراك'],
    },
    problem: {
      title: 'الكلام ده مألوف؟',
      pains: [
        'زبون قدامك عايز مقاس، وإنت بتتصل بالفرع التاني: «موجود عندكم؟»',
        'الأوردرات متوزعة بين الكشكول والواتساب والإنستجرام، ودايماً حاجة بتقع.',
        'آخر الشهر، مش عارف كل فرع باع بكام غير لما تقعد تحسب بإيدك.',
      ],
    },
    features: {
      title: 'كل محلك في سيستم واحد',
      main: [
        { title: 'كاشير (POS) في كل فرع', line: 'كل فرع ليه كاشير، وكل بيعة بتتسجل على فرعها.', img: '/storix-assets/screen-pos.webp' },
        { title: 'مخزن كل فرع، والتحويل بينهم', line: 'تعرف كل فرع فيه إيه، وتحوّل البضاعة من فرع لفرع من السيستم.', img: '/storix-assets/screen-stock.webp' },
        { title: 'متجر أونلاين باسم محلك', line: 'زبونك يطلب من موبايله، بمناطق التوصيل اللي تحددها، ويدفع بالكارت.', img: '/storix-assets/screen-product.webp' },
        { title: 'لوحة تحكم وتقارير لكل فرع', line: 'مبيعات كل فرع وأوردراته قدامك، من غير ما تحسب.', img: '/storix-assets/screen-dashboard.webp' },
      ],
      minor: [
        { title: 'المرتجع والاستبدال', line: 'المرتجع والتبديل بيتسجلوا في السيستم، مش في ورقة.' },
        { title: 'منتجاتك جاهزة لإعلانات فيسبوك وإنستجرام', line: 'منتجات متجرك بتتربط بإعلاناتك، فتعلن عنها على فيسبوك وإنستجرام.' },
      ],
      also: 'وكمان: كوبونات خصم وبانرات عروض، وصلاحيات لكل موظف يشوف بيها اللي يخصه بس.',
    },
    demos: {
      title: 'جرّب ديمو محلك',
      line: 'محل تجريبي بفرعين لكل نوع: ادخل المتجر زي الزبون، ولوحة التحكم زي صاحب المحل.',
      store: 'افتح المتجر',
      admin: 'لوحة التحكم',
      ownerLabel: 'صاحب المحل',
      cashierLabel: 'الكاشير',
      passLabel: 'كلمة السر',
      items: [
        { key: 'clothing', title: 'محل ملابس', line: 'مقاسات وألوان، وأقسام رجالي وحريمي.', img: '/storix-assets/demo-clothing.webp', url: `https://${DEMO_BASE}` },
        { key: 'phones', title: 'محل موبايلات', line: 'موبايلات بالسعة واللون، وإكسسوارات باللون.', img: '/storix-assets/demo-phones.webp', url: `https://phones-demo.${DEMO_BASE}` },
        { key: 'beauty', title: 'محل كوزمتكس', line: 'مكياج بالدرجة والحجم، وعطور وعناية بالحجم.', img: '/storix-assets/demo-beauty.webp', url: `https://beauty-demo.${DEMO_BASE}` },
        { key: 'market', title: 'ماركت وأدوات منزلية', line: 'منتجات بالحجم أو النوع، وتوصيل في نفس اليوم.', img: '/storix-assets/demo-market.webp', url: `https://market-demo.${DEMO_BASE}` },
      ],
    },
    brand: {
      title: 'محلك، باسمك وبشكلك',
      line: 'اسم محلك على المتجر ولوحة التحكم، ولينك باسم محلك. ولو عندك دومين، إنت بتشتريه وإحنا بنربطه.',
      themesIntro: 'واختار الشكل اللي يشبه محلك:',
      themes: [
        { name: 'إديتوريال', line: 'هادي وفخم، والصور هي البطل.', img: '/storix-assets/theme-editorial.webp' },
        { name: 'مودرن', line: 'جريء وملوّن، وعروض الأسبوع بعدّاد.', img: '/storix-assets/theme-modern.webp' },
      ],
      switchLine: 'وتغيّره في أي وقت من الإعدادات، ومنتجاتك وأسعارك وأوردراتك زي ما هي.',
    },
    steps: {
      title: 'من أول كلمة لأول بيعة',
      items: [
        { title: 'جرّب وكلّمنا', line: 'جرّب الديمو بنفسك، وبعدين مكالمة 20 دقيقة نفهم فيها محلك.' },
        { title: 'نجهّزه باسمك', line: 'في 3 أيام، السيستم يبقى جاهز باسم محلك وبراندك.' },
        { title: 'ندرّبك وتبدأ تبيع', line: 'ندرّبك إنت وفريقك، وتبدأ تبيع في المحل وأونلاين.' },
      ],
    },
    pricing: {
      title: 'أسعار واضحة، بالفرع',
      subline: 'اشتراك شهري لكل فرع، من غير مصاريف تجهيز. كل الأسعار بالجنيه المصري.',
      plans: [
        { name: 'البداية', for: 'فرع واحد + متجر أونلاين', setup: 'من غير مصاريف تجهيز', monthly: '1,500 جنيه في الشهر' },
        { name: 'النمو', for: '2 أو 3 فروع + متجر أونلاين', setup: 'من غير مصاريف تجهيز', monthly: '1,500 جنيه لأول فرع + 1,000 جنيه لكل فرع زيادة', example: 'يعني 3 فروع = 3,500 جنيه في الشهر' },
        { name: 'السلسلة', for: '4 فروع أو أكتر + متجر أونلاين', setup: 'من غير مصاريف تجهيز', monthly: '1,500 جنيه لأول فرع + 1,000 للفرع التاني والتالت + 800 جنيه لكل فرع من الرابع', example: 'يعني 6 فروع = 5,900 جنيه في الشهر' },
      ],
      includedTitle: 'في كل الباقات',
      included: ['الاستضافة', 'التحديثات', 'الدعم', 'التدريب', 'من غير عمولة على الطلبات', 'من غير حد لعدد الأجهزة أو الموظفين'],
      yearly: 'ادفع سنة مقدم: 12 شهر بتمن 10.',
      payment: 'تدفع الاشتراك بلينك دفع، أو إنستاباي، أو كاش.',
      cta: 'اسألنا عن سعر محلك',
    },
    faq: {
      title: 'أسئلة بتتسأل كتير',
      items: [
        { q: 'السيستم هيبقى باسمي أنا؟', a: 'أيوه. اسم محلك على المتجر ولوحة التحكم، ولينك باسم محلك. ولو عندك دومين، إنت بتشتريه وإحنا بنربطه.' },
        { q: 'فيه عمولة على الطلبات؟', a: 'لأ. بتدفع الاشتراك الشهري بس، وStorix مبياخدش أي عمولة على أوردراتك.' },
        { q: 'فيه حد لعدد الأجهزة أو الموظفين؟', a: 'لأ. شغّل أجهزة وموظفين براحتك في كل فرع، وكل موظف يشوف الشاشات اللي تخصه بس.' },
        { q: 'زبايني يقدروا يدفعوا بالكارت؟', a: 'أيوه. متجرك الأونلاين بيقبل الدفع بالكارت عن طريق Paymob.' },
        { q: 'المتجر بيبيع بالجنيه ولا بالدولار؟', a: 'إنت اللي تختار: جنيه مصري أو دولار، من الإعدادات.' },
        { q: 'لو فتحت فرع جديد بعدين؟', a: 'بنضيفه على نفس السيستم، ويتضاف اشتراك الفرع ده للشهري. ومن الفرع الرابع، الفرع بـ 800 جنيه في الشهر.' },
      ],
    },
    final: {
      headline: 'جرّب Storix بإيدك قبل ما تقرر',
      subline: '4 محلات تجريبية (ملابس، موبايلات، كوزمتكس، ماركت)، تدخلها زي صاحب المحل بالظبط.',
      phone: 'واتساب 01551939977',
    },
    seo: {
      title: 'Storix | كاشير ومخزن ومتجر أونلاين لمحلك وفروعه',
      description: 'كاشير (POS) في كل فرع، مخزن كل فرع والتحويل بينهم، ومتجر أونلاين باسم محلك. جاهز في 3 أيام، ومن غير عمولة. جرّب الديمو بنفسك.',
    },
  },
  en: {
    by: 'by ProCode',
    nav: { features: 'Features', demos: 'Demos', themes: 'Looks', pricing: 'Pricing', faq: 'FAQ' },
    hero: {
      eyebrow: 'Storix by ProCode · the system for shops and branches',
      headline: 'Branch stock never adds up? One system, in your name.',
      subline: 'Instead of the notebook, WhatsApp and Instagram: a cashier in every branch, every branch\'s stock in front of you, and an online store in your shop\'s name.',
      ctaDemo: 'Try the demo yourself',
      ctaWa: 'Message us on WhatsApp',
      chips: ['Ready in your name in 3 days', 'No commission on orders', 'Hosting and support included'],
    },
    problem: {
      title: 'Sound familiar?',
      pains: [
        'A customer wants a size, and you\'re on the phone to the other branch: "Do you have it?"',
        'Orders are split between the notebook, WhatsApp and Instagram, and something always slips.',
        'At the end of the month, you don\'t know what each branch sold until you add it up by hand.',
      ],
    },
    features: {
      title: 'Your whole shop in one system',
      main: [
        { title: 'A cashier (POS) in every branch', line: 'Every branch has its own cashier, and every sale is recorded to its branch.', img: '/storix-assets/screen-pos.webp' },
        { title: 'Stock per branch, and transfers between them', line: 'See what every branch holds, and move goods from one branch to another in the system.', img: '/storix-assets/screen-stock.webp' },
        { title: 'An online store in your shop\'s name', line: 'Customers order from their phone, within the delivery zones you set, and pay by card.', img: '/storix-assets/screen-product.webp' },
        { title: 'A dashboard and reports for every branch', line: 'Every branch\'s sales and orders in front of you, without doing the sums.', img: '/storix-assets/screen-dashboard.webp' },
      ],
      minor: [
        { title: 'Returns and exchanges', line: 'Returns and exchanges are recorded in the system, not on a scrap of paper.' },
        { title: 'Your products ready for Facebook and Instagram ads', line: 'Your store\'s products link to your ads, so you can advertise them on Facebook and Instagram.' },
      ],
      also: 'Also: discount coupons and offer banners, and staff roles so each person sees only what they need.',
    },
    demos: {
      title: 'Try the demo for your shop',
      line: 'A sample shop with two branches for each trade: browse the store as a customer, and the dashboard as the owner.',
      store: 'Open the store',
      admin: 'Dashboard',
      ownerLabel: 'Owner',
      cashierLabel: 'Cashier',
      passLabel: 'Password',
      items: [
        { key: 'clothing', title: 'Clothing shop', line: 'Sizes and colours, men and women sections.', img: '/storix-assets/demo-clothing.webp', url: `https://${DEMO_BASE}` },
        { key: 'phones', title: 'Phone shop', line: 'Phones by storage and colour, accessories by colour.', img: '/storix-assets/demo-phones.webp', url: `https://phones-demo.${DEMO_BASE}` },
        { key: 'beauty', title: 'Cosmetics shop', line: 'Makeup by shade and size, fragrance and care by size.', img: '/storix-assets/demo-beauty.webp', url: `https://beauty-demo.${DEMO_BASE}` },
        { key: 'market', title: 'Market & home goods', line: 'Products by size or type, same-day delivery.', img: '/storix-assets/demo-market.webp', url: `https://market-demo.${DEMO_BASE}` },
      ],
    },
    brand: {
      title: 'Your shop, your name, your look',
      line: 'Your shop\'s name on the store and the dashboard, and a link with your shop\'s name. If you have your own domain, you buy it and we connect it.',
      themesIntro: 'Then pick the look that suits your shop:',
      themes: [
        { name: 'Editorial', line: 'Calm and premium. Your photos lead.', img: '/storix-assets/theme-editorial.webp' },
        { name: 'Modern', line: 'Bold and colourful, with weekly offers on a countdown.', img: '/storix-assets/theme-modern.webp' },
      ],
      switchLine: 'Switch any time from Settings. Your products, prices and orders stay as they are.',
    },
    steps: {
      title: 'From first chat to first sale',
      items: [
        { title: 'Try it and talk to us', line: 'Try the demo yourself, then a 20-minute call where we get to know your shop.' },
        { title: 'We set it up in your name', line: 'In 3 days, the system is ready in your shop\'s name and brand.' },
        { title: 'We train you, you start selling', line: 'We train you and your team, and you start selling in the shop and online.' },
      ],
    },
    pricing: {
      title: 'Clear prices, per branch',
      subline: 'A monthly fee for each branch, with no setup fee. All prices in Egyptian pounds.',
      plans: [
        { name: 'Start', for: 'One branch + online store', setup: 'No setup fee', monthly: 'EGP 1,500 a month' },
        { name: 'Growth', for: '2 or 3 branches + online store', setup: 'No setup fee', monthly: 'EGP 1,500 for the first branch + EGP 1,000 for each extra branch', example: 'So 3 branches = EGP 3,500 a month' },
        { name: 'Chain', for: '4 branches or more + online store', setup: 'No setup fee', monthly: 'EGP 1,500 for the first branch + EGP 1,000 each for the second and third + EGP 800 for each branch from the fourth', example: 'So 6 branches = EGP 5,900 a month' },
      ],
      includedTitle: 'In every plan',
      included: ['Hosting', 'Updates', 'Support', 'Training', 'No commission on orders', 'No limit on devices or staff'],
      yearly: 'Pay for a year: 12 months for the price of 10.',
      payment: 'Pay your subscription by payment link, InstaPay or cash.',
      cta: 'Ask us for your shop\'s price',
    },
    faq: {
      title: 'Questions we often get',
      items: [
        { q: 'Will the system be in my name?', a: 'Yes. Your shop\'s name on the store and the dashboard, and a link with your shop\'s name. If you have your own domain, you buy it and we connect it.' },
        { q: 'Do you take a commission on orders?', a: 'No. You pay the monthly fee only. Storix takes no commission on your orders.' },
        { q: 'Is there a limit on devices or staff?', a: 'No. Use as many devices and staff as you like in every branch, and each person sees only the screens they need.' },
        { q: 'Can my customers pay by card?', a: 'Yes. Your online store takes card payments through Paymob.' },
        { q: 'Does the store sell in pounds or dollars?', a: 'Your choice: Egyptian pounds or US dollars, set in Settings.' },
        { q: 'What if I open another branch later?', a: 'We add it to the same system, and that branch\'s fee is added to your monthly. From the fourth branch on, each branch is EGP 800 a month.' },
      ],
    },
    final: {
      headline: 'Try Storix yourself before you decide',
      subline: 'Four sample shops (clothing, phones, cosmetics, market). Go in as the owner would.',
      phone: 'WhatsApp 01551939977',
    },
    seo: {
      title: 'Storix | POS, stock and online store for shops and branches',
      description: 'A POS in every branch, stock per branch with transfers, and an online store in your shop\'s name. Ready in 3 days, no commission. Try the demo yourself.',
    },
  },
}

const c = computed(() => COPY[lang.value])

function toggleLang() {
  lang.value = lang.value === 'ar' ? 'en' : 'ar'
  try { localStorage.setItem('storix-landing-lang', lang.value) } catch (e) { /* storage unavailable */ }
}

// Meta pixel events, only if a pixel is installed on the site.
function track(event) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') window.fbq('track', event, { content_name: 'Storix' })
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('storix-landing-lang')
    if (saved === 'en' || saved === 'ar') lang.value = saved
  } catch (e) { /* storage unavailable */ }
})

useHead(() => ({
  title: c.value.seo.title,
  titleTemplate: '%s',
  htmlAttrs: { lang: lang.value, dir: lang.value === 'ar' ? 'rtl' : 'ltr' },
  // The site-wide switcher (dark mode toggle, back-to-top) is not part of this page.
  bodyAttrs: { class: 'storix-landing' },
  style: [{ children: 'body.storix-landing #back-to-top, body.storix-landing .fixed.top-1\\/4 { display: none !important; }' }],
  meta: [
    { name: 'description', content: c.value.seo.description },
    { property: 'og:title', content: c.value.seo.title },
    { property: 'og:description', content: c.value.seo.description },
    { property: 'og:url', content: 'https://procode-solutions.com/storix' },
    { property: 'og:image', content: 'https://procode-solutions.com/storix-assets/storix-hero-wide.webp' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap' },
    { rel: 'preload', as: 'image', href: '/storix-assets/storix-hero-wide.webp', media: '(min-width: 768px)' },
  ],
}))
</script>

<style scoped>
.sx {
  --ink: #111111; --ink-2: #4a4a4a; --ink-3: #8a8580; --paper: #ffffff; --ivory: #f7f4f0;
  --line: #e8e3dd; --brand: #0f766e; --brand-ink: #0b4f4a; --brand-soft: #e7f2f0; --gold: #c9a77c;
  --display: 'Alexandria', 'IBM Plex Sans Arabic', system-ui, sans-serif;
  --body: 'IBM Plex Sans Arabic', 'Segoe UI', system-ui, sans-serif;
  font-family: var(--body); color: var(--ink); background: var(--paper); line-height: 1.6;
}
.sx * { box-sizing: border-box; }
.sx a { color: inherit; text-decoration: none; }
.sx-wrap { max-width: 76rem; margin: 0 auto; padding: 0 1.5rem; }
@media (min-width: 768px) { .sx-wrap { padding: 0 2.5rem; } }
.sx-center { text-align: center; }
.sx-muted { color: var(--ink-3); }
.sx-h2 { font-family: var(--display); font-weight: 600; font-size: 1.75rem; line-height: 1.3; margin: 0 0 1rem; }
@media (min-width: 768px) { .sx-h2 { font-size: 2.6rem; } }
.sx-lead { font-size: 1.05rem; color: var(--ink-2); max-width: 44rem; margin: 0 auto 1.5rem; }
/* padding-top only: a shorthand here would wipe .sx-wrap's side padding on the same element. */
.sx-section { padding-top: 4.5rem; }
@media (min-width: 768px) { .sx-section { padding-top: 7rem; } }

/* Buttons */
.sx-btn { display: inline-flex; align-items: center; justify-content: center; height: 54px; padding: 0 1.9rem; font-weight: 700; font-size: 1rem; border-radius: 0; transition: background 0.2s, color 0.2s, transform 0.2s; white-space: nowrap; }
.sx-btn:hover { transform: translateY(-1px); }
.sx a.sx-btn--light, .sx-btn--light { background: #fff; color: var(--ink); }
.sx-btn--light:hover { background: #f1efec; }
.sx a.sx-btn--ghost, .sx-btn--ghost { color: #fff; border: 1px solid rgba(255, 255, 255, 0.85); }
.sx-btn--ghost:hover { background: rgba(255, 255, 255, 0.12); }
.sx a.sx-btn--dark, .sx-btn--dark { background: var(--ink); color: #fff; }
.sx-btn--sm { height: 42px; padding: 0 1.1rem; font-size: 0.9rem; }

/* Top bar */
.sx-top { position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
.sx-top-in { display: flex; align-items: center; justify-content: space-between; gap: 1rem; height: 70px; }
.sx-logo { display: flex; align-items: center; gap: 0.55rem; direction: ltr; }
.sx-logo-mark { width: 2.2rem; height: 2.2rem; border-radius: 10px; background: var(--brand); color: #fff; display: grid; place-items: center; font-family: var(--display); font-weight: 700; }
.sx-logo-text { font-family: var(--display); font-weight: 700; font-size: 1.3rem; letter-spacing: 0.04em; }
.sx-logo-by { font-size: 0.75rem; color: var(--ink-3); margin-inline-start: 0.2rem; }
.sx-top-links { display: none; gap: 1.75rem; font-size: 0.92rem; font-weight: 500; }
@media (min-width: 900px) { .sx-top-links { display: flex; } }
.sx-top-links a:hover { color: var(--brand); }
.sx-top-actions { display: flex; align-items: center; gap: 0.75rem; }
.sx-lang { background: none; border: 0; cursor: pointer; font: inherit; font-size: 0.85rem; color: var(--ink-2); }
@media (max-width: 520px) { .sx-top-actions .sx-btn { display: none; } }

/* Hero */
.sx-hero { position: relative; min-height: 38rem; display: flex; align-items: flex-end; overflow: hidden; background: #2a2522; }
@media (min-width: 768px) { .sx-hero { min-height: 44rem; align-items: center; } }
.sx-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.sx-hero-shade { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10, 10, 10, 0.82) 0%, rgba(10, 10, 10, 0.35) 55%, rgba(10, 10, 10, 0.05) 100%); }
@media (min-width: 768px) {
  /* The photo's calm wall is on the left, so the copy sits there in both languages. */
  .sx-hero-shade { background: linear-gradient(to right, rgba(10, 10, 10, 0.72) 0%, rgba(10, 10, 10, 0.4) 42%, rgba(10, 10, 10, 0) 70%); }
  .sx-hero-copy { display: flex; flex-direction: column; }
  .sx[dir='rtl'] .sx-hero-copy { align-items: flex-end; }
  .sx[dir='ltr'] .sx-hero-copy { align-items: flex-start; }
}
.sx-hero-copy { position: relative; z-index: 2; color: #fff; padding-top: 3rem; padding-bottom: 3rem; width: 100%; }
@media (min-width: 768px) { .sx-hero-copy > * { max-width: 36rem; } }
.sx-eyebrow { font-size: 0.85rem; letter-spacing: 0.04em; opacity: 0.85; margin: 0 0 1rem; }
.sx-hero-title { font-family: var(--display); font-weight: 700; font-size: 2.3rem; line-height: 1.2; margin: 0 0 1.1rem; }
@media (min-width: 768px) { .sx-hero-title { font-size: 3.6rem; } }
.sx-hero-sub { font-size: 1.05rem; opacity: 0.92; margin: 0 0 2rem; }
@media (min-width: 768px) { .sx-hero-sub { font-size: 1.15rem; } }
.sx-hero-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.sx-hero-btns--center { justify-content: center; }
.sx-chips { list-style: none; padding: 0; margin: 1.75rem 0 0; display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem; font-size: 0.88rem; opacity: 0.92; }
.sx-chips li::before { content: '✓'; color: var(--gold); margin-inline-end: 0.4rem; font-weight: 700; }

/* Phones: the photo on top, the headline under it on the dark band (not over the devices). */
@media (max-width: 767px) {
  .sx-hero { display: block; min-height: 0; }
  .sx-hero-img { position: relative; height: 24rem; object-position: center 85%; }
  .sx-hero-shade { display: none; }
  .sx-hero-copy { padding-top: 2rem; padding-bottom: 2.5rem; background: #1b1714; }
  .sx-hero-title { font-size: 2.1rem; }
}

/* Problem */
.sx-pains { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1.5rem; }
@media (min-width: 768px) { .sx-pains { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; } }
.sx-pain { background: var(--ivory); padding: 1.6rem 1.5rem; }
.sx-pain-n { font-family: var(--display); color: var(--brand); font-weight: 600; font-size: 0.95rem; }
.sx-pain p { margin: 0.6rem 0 0; font-size: 1.05rem; line-height: 1.8; }

/* Features */
.sx-feature { display: grid; grid-template-columns: 1fr; gap: 1.5rem; align-items: center; margin-top: 3.5rem; }
@media (min-width: 900px) {
  .sx-feature { grid-template-columns: 1fr 1.5fr; gap: 4rem; margin-top: 5rem; }
  .sx-feature--flip .sx-feature-text { order: 2; }
}
.sx-feature-n { display: inline-grid; place-items: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--brand-soft); color: var(--brand); font-weight: 700; margin-bottom: 1rem; }
.sx-feature-text h3 { font-family: var(--display); font-weight: 600; font-size: 1.5rem; margin: 0 0 0.6rem; line-height: 1.35; }
@media (min-width: 768px) { .sx-feature-text h3 { font-size: 1.9rem; } }
.sx-feature-text p { color: var(--ink-2); font-size: 1.05rem; margin: 0; }
.sx-feature-shot { position: relative; background: #fff; border: 1px solid var(--line); box-shadow: 0 30px 60px -30px rgba(17, 17, 17, 0.35); overflow: hidden; border-radius: 12px; }
.sx-feature-shot img, .sx-theme img { display: block; width: 100%; height: auto; }
.sx-browser { height: 30px; background: #f3f1ee; border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 6px; padding: 0 12px; direction: ltr; }
.sx-browser i { width: 10px; height: 10px; border-radius: 999px; background: #d9d4ce; }
.sx-minis { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 3.5rem; }
@media (min-width: 768px) { .sx-minis { grid-template-columns: 1fr 1fr; gap: 1.25rem; } }
.sx-mini { border: 1px solid var(--line); padding: 1.5rem; }
.sx-mini h3 { font-family: var(--display); font-weight: 600; font-size: 1.2rem; margin: 0 0 0.4rem; }
.sx-mini p { margin: 0; color: var(--ink-2); }
.sx-also { text-align: center; color: var(--ink-2); margin: 2rem 0 0; }

/* Bands */
.sx-band { background: var(--ivory); padding: 4.5rem 0; margin-top: 4.5rem; }
@media (min-width: 768px) { .sx-band { padding: 6.5rem 0; margin-top: 7rem; } }
.sx-band--ink { background: #0f1412; color: #fff; }
.sx-band--ink .sx-lead { color: rgba(255, 255, 255, 0.75); }
.sx-themes-intro { font-weight: 600; margin: 0 0 1.5rem; }
.sx-themes { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
@media (min-width: 768px) { .sx-themes { grid-template-columns: 1fr 1fr; gap: 2rem; } }
.sx-theme { margin: 0; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid var(--line); box-shadow: 0 24px 48px -28px rgba(17, 17, 17, 0.3); }
.sx-theme figcaption { padding: 1rem 1.25rem 1.2rem; display: flex; flex-direction: column; gap: 0.2rem; }
.sx-theme figcaption b { font-family: var(--display); font-size: 1.15rem; }
.sx-theme figcaption span { color: var(--ink-2); }

/* Steps */
.sx-steps { list-style: none; padding: 0; margin: 2rem 0 0; display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 768px) { .sx-steps { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; } }
.sx-steps li { border-top: 2px solid var(--ink); padding-top: 1.25rem; }
.sx-step-n { font-family: var(--display); font-size: 2.4rem; font-weight: 600; color: var(--brand); line-height: 1; }
.sx-steps h3 { font-family: var(--display); font-weight: 600; font-size: 1.25rem; margin: 0.8rem 0 0.4rem; }
.sx-steps p { margin: 0; color: var(--ink-2); }

/* Pricing */
.sx-plans { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 900px) { .sx-plans { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; } }
.sx-plan { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.14); padding: 1.75rem 1.5rem; display: flex; flex-direction: column; }
.sx-plan h3 { font-family: var(--display); font-weight: 600; font-size: 1.4rem; margin: 0; }
.sx-plan-for { color: rgba(255, 255, 255, 0.7); margin: 0.25rem 0 1.25rem; }
.sx-plan-monthly { font-size: 1.15rem; font-weight: 700; margin: 0 0 0.5rem; line-height: 1.6; }
.sx-plan-setup { color: var(--gold); font-weight: 600; margin: 0; }
.sx-plan-example { margin: auto 0 0; padding-top: 1rem; color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; }
.sx-included { margin: 2rem auto 1rem; text-align: center; }
.sx-included ul { list-style: none; padding: 0; margin: 0.75rem 0 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.5rem; color: rgba(255, 255, 255, 0.85); }
.sx-pricing-notes { color: rgba(255, 255, 255, 0.7); margin: 0 0 1.75rem; }

/* FAQ */
.sx-faq-wrap { max-width: 52rem; }
.sx-faq { margin-top: 1.5rem; border-top: 1px solid var(--line); }
.sx-faq details { border-bottom: 1px solid var(--line); }
.sx-faq summary { list-style: none; cursor: pointer; padding: 1.25rem 0; font-weight: 600; font-size: 1.05rem; display: flex; justify-content: space-between; gap: 1rem; }
.sx-faq summary::-webkit-details-marker { display: none; }
.sx-faq summary::after { content: '+'; color: var(--brand); font-size: 1.4rem; line-height: 1; }
.sx-faq details[open] summary::after { content: '−'; }
.sx-faq p { margin: 0 0 1.25rem; color: var(--ink-2); line-height: 1.8; }

/* Final */
.sx-final { margin-top: 5rem; background: linear-gradient(135deg, var(--brand-ink), var(--brand)); color: #fff; padding: 4.5rem 0; }
@media (min-width: 768px) { .sx-final { margin-top: 7rem; padding: 6rem 0; } }
.sx-final .sx-lead { color: rgba(255, 255, 255, 0.85); }
.sx-final-phone { margin: 1.5rem 0 0; opacity: 0.85; }
.sx-foot { padding: 1.5rem 0 5rem; font-size: 0.85rem; color: var(--ink-3); }
@media (min-width: 768px) { .sx-foot { padding-bottom: 1.5rem; } }
.sx-foot-in { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }

/* Demos */
.sx-demos { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2rem; }
@media (min-width: 700px) { .sx-demos { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1100px) { .sx-demos { grid-template-columns: repeat(4, 1fr); } }
.sx-demo { background: #fff; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 24px 48px -32px rgba(17, 17, 17, 0.35); }
.sx-demo img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.sx-demo-body { padding: 1.1rem 1.2rem 1.3rem; display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }
.sx-demo-body h3 { font-family: var(--display); font-weight: 600; font-size: 1.2rem; margin: 0; }
.sx-demo-body p { margin: 0; color: var(--ink-2); font-size: 0.95rem; }
.sx-demo-btns { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto; padding-top: 0.9rem; }
.sx a.sx-btn--outline, .sx-btn--outline { color: var(--ink); border: 1px solid var(--ink); background: transparent; }
.sx-btn--outline:hover { background: var(--ivory); }
.sx-demo-logins { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem 1.5rem; margin: 1.5rem 0 0; font-size: 0.9rem; color: var(--ink-2); }
.sx-demo-logins b { color: var(--ink); font-weight: 600; }

/* Floating WhatsApp (phones) */
.sx a.sx-float, .sx-float { position: fixed; bottom: 1rem; inset-inline-end: 1rem; z-index: 60; width: 56px; height: 56px; border-radius: 999px; background: var(--brand); color: #fff; display: grid; place-items: center; box-shadow: 0 10px 25px rgba(15, 118, 110, 0.4); }
@media (min-width: 900px) { .sx a.sx-float, .sx-float { display: none; } }
</style>
