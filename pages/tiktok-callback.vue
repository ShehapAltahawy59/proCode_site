<template>
  <section class="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
    <div class="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h1 class="text-2xl font-semibold text-slate-900">TikTok login</h1>

      <p v-if="!ready" class="mt-4 text-slate-600">Reading TikTok's answer…</p>

      <template v-else-if="error">
        <p class="mt-4 text-red-700">TikTok did not give access: {{ error }}</p>
        <p class="mt-2 text-slate-600">Run <code>python -m meta_ads tiktok-login</code> again and approve the app.</p>
      </template>

      <template v-else-if="command">
        <p class="mt-4 text-slate-700">
          Done on TikTok's side. To finish, run this in the <b>meta_ads</b> folder on your computer
          (it saves the access in <code>.env</code>; the code works once and only for a few minutes):
        </p>
        <pre class="mt-4 whitespace-pre-wrap break-all rounded-lg bg-slate-900 p-4 text-sm text-slate-100" dir="ltr">{{ command }}</pre>
        <button type="button" class="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white" @click="copy">
          {{ copied ? 'Copied' : 'Copy the command' }}
        </button>
        <p class="mt-6 text-slate-600" dir="rtl">انسخ الأمر وشغّله في فولدر meta_ads على الكمبيوتر، وبعدها قفل الصفحة.</p>
      </template>

      <p v-else class="mt-4 text-slate-600">This page is only used when connecting a TikTok account to our posting tool.</p>
    </div>
  </section>
</template>

<script setup>
// Login Kit sends the browser here (the redirect URI registered on the TikTok
// app) with ?code=&state= or ?error=. The page never sends them anywhere; it only
// shows the command that exchanges the code on the owner's own computer.
import { onMounted, ref } from 'vue'

definePageMeta({ layout: false })
useHead({ title: 'TikTok login', meta: [{ name: 'robots', content: 'noindex' }] })

const ready = ref(false)
const error = ref('')
const command = ref('')
const copied = ref(false)

onMounted(() => {
  const q = new URLSearchParams(window.location.search)
  error.value = q.get('error_description') || q.get('error') || ''
  const code = q.get('code')
  const state = q.get('state')
  if (code && state) {
    command.value = `python -m meta_ads tiktok-login --code "${code}" --state "${state}"`
  }
  ready.value = true
})

async function copy() {
  try {
    await navigator.clipboard.writeText(command.value)
    copied.value = true
  } catch {
    copied.value = false
  }
}
</script>
