<script setup lang="ts">
import { SignUpForm } from '@/features/auth/sign-up'
import { LayoutsEnum } from '@/layouts/model'
import { AuthContainer } from '@/widgets/auth'
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: false,
  },
  name: 'sign-up',
})

useHead({
  title: 'Jenda | Sign Up',
})
</script>

<template>
  <div class="auth-page">
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
  </div>
</template>
