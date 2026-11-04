<template>
  <main class="legal" dir="ltr">
    <a href="/" class="legal-home">← ProCode Solutions</a>
    <h1>Terms of Service</h1>
    <p class="legal-updated">Last updated: {{ UPDATED }}</p>

    <p>
      These terms apply to procode-solutions.com and to the services of ProCode Solutions (“ProCode”, “we”, “us”),
      including Wavelink, Gusto! and Storix. By using our website or services you agree to them. A product may have
      its own terms or a written agreement with you; where it does, that applies to the product as well.
    </p>

    <h2>1. Our services</h2>
    <p>We build and run software for businesses: Wavelink (an AI assistant and API for WhatsApp messaging), Gusto!
      (websites, point of sale and online ordering for restaurants) and Storix (point of sale, branches and online stores for shops).
      What each plan includes, its price, and any setup work are as shown on the product's pages or agreed with you
      in writing.</p>

    <h2>2. Your responsibilities</h2>
    <ul>
      <li>Give accurate information and keep your login details safe.</li>
      <li>Only connect accounts, pages and phone numbers you own or are authorized to manage.</li>
      <li>Follow the rules of the platforms you connect, such as Meta's (Facebook, Instagram, WhatsApp) and TikTok's
        terms and policies.</li>
      <li>Do not use our services to send spam, or unlawful, harmful or misleading content.</li>
    </ul>

    <h2>3. Payments and subscriptions</h2>
    <p>Paid plans are billed as described for each product, through our payment provider or another method we agree
      on. If a payment is late, the service may be limited or paused as described for that product until it is paid.</p>

    <h2>4. Your content and ours</h2>
    <p>You keep ownership of your content: your products, prices, images, menus and customer data. You allow us to
      use it only as needed to provide the service to you. Our software, designs and brand remain ProCode's.</p>

    <h2>5. Third-party platforms</h2>
    <p>Our services work with platforms run by others, such as WhatsApp, Facebook, Instagram, TikTok, Google and Paymob.
      Their names and logos belong to their owners, and we are not affiliated with or endorsed by them. Their
      availability and rules are outside our control.</p>

    <h2>6. Availability and liability</h2>
    <p>We work to keep our services available and correct, but they are provided “as is”. To the extent the law
      allows, ProCode is not liable for indirect or consequential losses, and our total liability for a service is
      limited to the amount you paid us for it in the three months before the claim.</p>

    <h2>7. Ending the service</h2>
    <p>You may stop using a service at any time. We may suspend an account that breaks these terms or a platform's
      rules, and will tell you why.</p>

    <h2>8. Law</h2>
    <p>These terms are governed by the laws of the Arab Republic of Egypt.</p>

    <h2>9. Changes</h2>
    <p>We may update these terms. The “last updated” date above shows the latest version.</p>

    <h2>10. Contact</h2>
    <p>ProCode Solutions, Egypt<br />
      Email: <a href="mailto:support@procode-solutions.com">support@procode-solutions.com</a><br />
      WhatsApp: <a href="https://wa.me/201551939977">+20 155 193 9977</a></p>

    <p class="legal-links"><a href="/privacy">Privacy Policy</a></p>
  </main>
</template>

<script setup>
const UPDATED = '17 October 2026'
definePageMeta({ layout: false })
useHead({ title: 'Terms of Service | ProCode Solutions', htmlAttrs: { lang: 'en' } })
</script>

<style src="~/assets/legal.css"></style>
