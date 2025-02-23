<script setup>
import animationLottie from "@/content/animation_index.json";
import animationLottieMobail from "@/content/animation_index_mobail.json";

definePageMeta({
  keepalive: true,
});

const { $anime } = useNuxtApp();
const isVisible = ref(true);
const mobileScin = ref(100);
const AniLotti = ref({});
const lottieAnimation = ref(null);

const animationFun = () => {
  $anime({
    targets: [".title", ".title-h2"],
    translateY: [mobileScin.value],
    easing: "easeInOutExpo",
    delay: 0,
    opacity: {
      value: 1,
    },
  });
};

const mobailScrin = () => {
  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth <= 800) {
      AniLotti.value = animationLottieMobail;
      mobileScin.value = 50;
    } else {
      AniLotti.value = animationLottie;
      mobileScin.value = 100;
    }
  });
  if (document.documentElement.clientWidth <= 800) {
    AniLotti.value = animationLottieMobail;
    mobileScin.value = 50;
  } else {
    AniLotti.value = animationLottie;
    mobileScin.value = 100;
  }
};
onMounted(() => {
  mobailScrin();
  setTimeout(() => {
    animationFun();
  }, 100);
});
onBeforeUnmount(() => {
  $anime({
    targets: [".title", ".title-h2"],
    translateY: 0,
    opacity: 0,
    duration: 0,
  });
  if (lottieAnimation.value) {
    lottieAnimation.value.destroy();
  }
});
useHead({
  title: "FastSite - Разботка web - приложений Nuxt3",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Создаём быстрые сайты любого типа по выгодным ценам.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "FastSite - Разботка web - приложений Nuxt3",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Создаём быстрые сайты любого типа по выгодным ценам.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://fastsite.pro/nuxt-imf.webp`,
    },
  ],
});
</script>

<template>
  <div>
    <div class="bd-docs-main">
      <div class="container is-max-desktop">
        <div class="content">
          <div class="index-title">
            <h1 class="title">Web-решения для бизнеса</h1>
            <div class="title-h2">
              <span
                >Разработка <b>быстрых</b> сайтов, web приложений на базе
                современных технологий.</span
              >
            </div>

            <div class="index-lottie">
              <client-only>
                <Vue3Lottie
                  ref="lottieAnimation"
                  :animationData="AniLotti"
                  :height="300"
                  :width="500"
                />
              </client-only>
            </div>
          </div>
          <div class="index-desctiption">
            <div class="columns is-multiline">
              <div class="column is-4">
                <div
                  v-show="isVisible"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <div class="index-desctiption-block">
                    <strong
                      >Корпаративные сайты, магазины, CRM системы,
                      лендинги.</strong
                    >
                    <Icon name="solar:programming-broken" />
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div
                  v-show="isVisible"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div class="index-desctiption-block">
                    <strong>
                      СЕО оптимизация, настройка в рекламы в сетях,
                      консультация.</strong
                    >
                    <Icon name="solar:screencast-broken" />
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div
                  v-show="isVisible"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <div class="index-desctiption-block">
                    <strong>Сложные проекты по индивидуальным запросам.</strong>
                    <Icon name="solar:code-square-broken" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="index-stack">
            <Stack />
          </div>
          <!-- <div class="index-utp">
        <Utp />
      </div> -->
          <div class="index-project">
            <Project />
          </div>
          <!-- <div class="index-order">
        <Order />
      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
