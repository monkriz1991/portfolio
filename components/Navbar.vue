<script setup>
let Glitch;
const isGlitchLoaded = ref(false);

onMounted(async () => {
  ({ Glitch } = await import("vue-glitched"));
  isGlitchLoaded.value = true;
});
</script>
<template>
  <div>
    <div class="bd-docs-main">
      <div class="container is-max-desktop">
        <div class="index-header">
          <div class="header-nav">
            <div class="header-logo">
              <nuxt-link to="/">
                <Glitch
                  v-if="isGlitchLoaded"
                  id="psychadelic"
                  fga="red"
                  fgb="blue"
                >
                  FastSite
                </Glitch>
              </nuxt-link>
            </div>
            <div class="left-bar">
              <nuxt-link to="/">Главная</nuxt-link>
              <nuxt-link to="/contact">Контакты</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
