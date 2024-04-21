<script setup lang="ts">
import { usePresets } from '@composables/usePresets.ts'
import BaseHeader from '@components/BaseHeader.vue'
import MySocial from '@components/MySocial.vue'
import emailjs from 'emailjs-com'
import { ref } from 'vue'

// const runtimeConfig = useRuntimeConfig()

const form = ref('')
const success = ref(true)
const failure = ref(false)
const loading = ref(false)
const showMessage = ref(true)

const {
  isGreenActive,
} = usePresets()

// function sendEmail(e: any): void {
//   loading.value = true
//   emailjs
//     .sendForm(
//       runtimeConfig.public.emailService,
//       runtimeConfig.public.emailTemplate,
//       form.value,
//       runtimeConfig.public.emailKey,
//     )
//     .then(
//       () => {
//         loading.value = false
//         showMessage.value = true
//         success.value = true
//         failure.value = false
//         clearStatus()
//       },
//       () => {
//         loading.value = false
//         showMessage.value = true
//         success.value = false
//         failure.value = true
//         clearStatus()
//       },
//     )
// }

function clearStatus(): void {
  setTimeout(() => {
    success.value = false
    failure.value = false
    showMessage.value = false
  }, 5000)
}
</script>

<template>
  <section id="contact" class="tw-container">
    <BaseHeader text="Contact Me" />

    <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-20 lg:tw-gap-40">
      <div class="lg:tw-w-1/2 tw-space-y-6">
        <p>Get in contact with me to talk shop or even if you wanna say Hi.</p>
        <div class="tw-flex tw-flex-col tw-space-y-2">
          <span>Phone: <a href="tel:0415473948" class="hover:tw-text-pink focus:tw-text-pink">0415 473 948</a></span>
          <span>Email: <a href="mailto:alex@devcalledalex.com" class="hover:tw-text-pink focus:tw-text-pink">alex@devcalledalex.com</a></span>
        </div>

        <MySocial />
      </div>
      <div class="lg:tw-w-1/2">
        <form ref="form" class="tw-flex tw-flex-col tw-space-y-4" @submit.prevent="sendEmail">
          <input type="text" class="tw-input tw-h-10" :class="{ 'tw-border-green tw-text-green tw-placeholder-[#4e6d42]': isGreenActive }" placeholder="first name" name="firstName" required>
          <input type="text" class="tw-input tw-h-10" :class="{ 'tw-border-green tw-text-green tw-placeholder-[#4e6d42]': isGreenActive }" placeholder="last name" name="lastName">
          <input type="tel" class="tw-input tw-h-10" :class="{ 'tw-border-green tw-text-green tw-placeholder-[#4e6d42]': isGreenActive }" placeholder="phone" name="phone" required>
          <input type="email" class="tw-input tw-h-10" :class="{ 'tw-border-green tw-text-green tw-placeholder-[#4e6d42]': isGreenActive }" placeholder="email" name="email" required>
          <textarea class="tw-input tw-h-28 tw-py-2" :class="{ 'tw-border-green tw-text-green tw-placeholder-[#4e6d42]': isGreenActive }" placeholder="message" name="message" required />

          <div class="tw-flex tw-flex-col tw-space-y-4">
            <button class="tw-ml-auto tw-h-10 tw-px-4 tw-bg-pink tw-text-off-black tw-rounded hover:tw-saturate-200 focus:tw-saturate-200">
              Get in touch
            </button>

            <div
              class="tw-transition tw-text-white tw-text-center tw-px-3 tw-py-2 tw-rounded tw-text-sm tw-bg-opacity-40"
              :class="[
                showMessage ? 'tw-opacity-100 tw-visible' : 'tw-opacity-0 tw-invisible',
                success ? 'tw-border-green-500 tw-bg-green-500 ' : 'tw-border-red-500 tw-bg-red-500',
              ]"
            >
              <p v-if="success" class="tw-flex tw-justify-center tw-space-x-3">
                <IconCheck class="tw-fill-white tw-mt-1" />
                <span>Thanks for your message, i'll be in touch very soon :) </span>
              </p>
              <p v-else class="tw-flex tw-justify-center tw-space-x-3">
                <IconFailure class="tw-fill-white tw-mt-1" />
                <span>Looks like theres been a problem, please try again later </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tw-input {
  @apply tw-w-full tw-px-3 tw-bg-transparent tw-border-2 tw-rounded hover:tw-border-pink focus:tw-border-pink tw-outline-none;
}
</style>
