<template>
    <div>
      <vue-recaptcha
        :sitekey="recaptchaSiteKey"
        @verify="recaptchaVerified"
        @expire="recaptchaExpired"
        @fail="recaptchaFailed"
      ></vue-recaptcha>
    </div>
  </template>
  
  <script>
  import vueRecaptcha from 'vue3-recaptcha2';
  
  export default {
    name: 'RecaptchaForm',
    components: {
      vueRecaptcha,
    },
    data() {
      return {
        recaptchaSiteKey: '6LfBRsYoAAAAAOS9H9wZ0NHm8vkyNTl7T-0IQ54W',
      };
    },
    methods: {
      recaptchaVerified(response) {
        this.$emit('recaptcha-verified', response);
      },
      recaptchaExpired() {
        this.$emit('recaptcha-expired');
      },
      recaptchaFailed() {
        this.$emit('recaptcha-failed');
      },
    },
  };
  </script>
  