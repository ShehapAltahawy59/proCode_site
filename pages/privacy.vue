<template>
  <main class="legal" dir="ltr">
    <a href="/" class="legal-home">← ProCode Solutions</a>
    <h1>Privacy Policy</h1>
    <p class="legal-updated">Last updated: {{ UPDATED }}</p>

    <p>
      ProCode Solutions (“ProCode”, “we”, “us”) is a software company in Egypt. We build and run
      <b>Wavelink</b> (an AI assistant and API for WhatsApp messaging), <b>Gusto!</b> (websites, point of sale and online
      ordering for restaurants) and <b>Storix</b> (point of sale, branches and online stores for shops), and we
      operate this website, procode-solutions.com. This policy explains what information we collect, how we use
      it, and the choices you have.
    </p>
    <p>
      Each product also has its own policy for the data its customers put into it; for example,
      <a href="https://wavelink.procode-solutions.com/api/privacy">the Wavelink Privacy Policy</a>.
      Where a product's policy is more specific, it applies to that product.
    </p>

    <h2>1. Information we collect</h2>
    <ul>
      <li><b>What you send us.</b> When you contact us (on WhatsApp, by email, through our social media pages or
        our ads), we receive what you choose to share: your name, phone number, business name and details, and
        your messages.</li>
      <li><b>Customer accounts.</b> When you use one of our products, we keep the account details needed to run it
        (such as the business name, the owner's login email, and subscription and payment records). Card payments
        are processed by our payment provider, Paymob; we do not store full card details.</li>
      <li><b>Technical data.</b> Our hosting providers record basic technical information when you visit our sites,
        such as your IP address, browser type and the pages requested, to deliver and secure the site.</li>
    </ul>

    <h2>2. How we use information</h2>
    <ul>
      <li>To answer your questions, give demos, and set up and support the products you use.</li>
      <li>To run, secure and improve our products and this website.</li>
      <li>To manage subscriptions and billing.</li>
      <li>To publish and manage ProCode's own marketing on social media (see sections 4 and 5).</li>
    </ul>

    <h2>3. How we share information</h2>
    <p>We do not sell personal data. We share it only with providers that help us run our services, and only as
      needed: Google (website hosting through Firebase, and the Gemini AI models used by Wavelink), Meta (Facebook,
      Instagram and WhatsApp), TikTok, Paymob (payments), and our server hosting providers. We may also disclose
      information when the law requires it.</p>

    <h2>4. TikTok</h2>
    <p>
      We use TikTok's Login Kit and Content Posting API in an internal tool that sends ProCode's own marketing
      videos and photos to <b>our own TikTok account's drafts</b>. A member of our team then reviews each draft
      and posts it from the TikTok app. The tool is connected only to accounts we own.
    </p>
    <ul>
      <li><b>Data accessed:</b> the connected account's basic profile information (its TikTok ID and display name,
        to confirm the right account is connected), and permission to upload content to that account's drafts
        (scopes <code>user.info.basic</code> and <code>video.upload</code>).</li>
      <li><b>Data not collected:</b> we do not collect information about other TikTok users, their videos,
        comments, followers or messages.</li>
      <li><b>Storage:</b> the access tokens TikTok issues are stored privately on our own systems, are used only to
        upload our content, and are never shared or sold.</li>
      <li><b>Revoking access:</b> the account owner can remove the tool's access at any time in the TikTok app
        (Settings and privacy → Security → Apps and services permissions), after which we can no longer use it.
        Tokens are deleted when access is removed or the tool is no longer used.</li>
    </ul>

    <h2>5. Facebook and Instagram</h2>
    <p>We manage ProCode's own Facebook pages, Instagram accounts and ads through Meta's APIs, in line with Meta's
      Platform Terms and Developer Policies. When you comment on or message our pages, we see what you post and
      may reply. We do not use this data for anything other than talking with you and running our own pages and
      ads.</p>

    <h2>6. How long we keep data</h2>
    <p>We keep information for as long as needed for the purpose it was collected for: conversations for as long as
      we are in touch, and customer account data while the account is active and as required by law afterwards.</p>

    <h2>7. Your rights and deleting your data</h2>
    <p>You can ask us to show, correct or delete the personal data we hold about you. Contact us (below) and we will
      answer within 30 days.</p>

    <h2>8. Security</h2>
    <p>Our sites use HTTPS, access to data is limited to the people who need it, and access tokens are kept
      server-side or on our own computers, never in public places.</p>

    <h2>9. Children</h2>
    <p>Our products are business tools and are not directed to children under 16.</p>

    <h2>10. Changes</h2>
    <p>We may update this policy. The “last updated” date above shows the latest version.</p>

    <h2>11. Contact</h2>
    <p>ProCode Solutions, Egypt<br />
      Email: <a href="mailto:support@procode-solutions.com">support@procode-solutions.com</a><br />
      WhatsApp: <a href="https://wa.me/201551939977">+20 155 193 9977</a></p>

    <p class="legal-links"><a href="/terms">Terms of Service</a></p>
  </main>
</template>

<script setup>
const UPDATED = '17 October 2026'
definePageMeta({ layout: false })
useHead({ title: 'Privacy Policy | ProCode Solutions', htmlAttrs: { lang: 'en' } })
</script>

<style src="~/assets/legal.css"></style>
