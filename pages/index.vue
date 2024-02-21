<script setup>
// import { animationStore } from "@/store/animation";
import animationLottie from "@/content/animation_index.json";
import animationLottieMobail from "@/content/animation_index_mobail.json";
const { $anime } = useNuxtApp();
// const store = animationStore();
// const animationOne = ref(null);
const isVisible = ref(true);
const mobileScin = ref(100);
const AniLotti = ref({});

// const animationFun = () => {
//   $anime({
//     targets: [".title", ".title-h2"],
//     translateY: [mobileScin.value],
//     easing: "easeInOutExpo",
//     // delay: function (el, i, l) {
//     //   return i * 850;
//     // },
//     delay: 0,
//     opacity: {
//       value: 1,
//     },
//     // complete: function () {
//     //   if (!store.isLoaded) {
//     //     fetchData();
//     //   } else {
//     //     animationOne.value = store.animationData;
//     //   }
//     // },
//   });
// };

// const fetchData = async () => {
//   try {
//     const response = await queryContent("/animation_index").findOne();
//     store.setAnimationData(response);
//     animationOne.value = response;
//   } catch (error) {
//     console.error("Ошибка при загрузке данных анимации:", error);
//   }
// };
const mobailScrin = () => {
  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth <= 800) {
      AniLotti.value = animationLottieMobail;
      // mobileScin.value = 50;
    } else {
      AniLotti.value = animationLottie;
      // mobileScin.value = 100;
    }
  });
  if (document.documentElement.clientWidth <= 800) {
    AniLotti.value = animationLottieMobail;
    // mobileScin.value = 50;
  } else {
    AniLotti.value = animationLottie;
    // mobileScin.value = 100;
  }
};
onMounted(() => {
  mobailScrin();
  // animationFun();
});
// onBeforeUnmount(() => {
//   // Сброс анимации перед размонтированием компонента
//   $anime({
//     targets: [".title", ".title-h2"],
//     translateY: 0, // Возвращаем начальное положение
//     opacity: 0, // Скрываем элементы
//     duration: 0, // Длительность анимации равна 0, чтобы мгновенно выполнить сброс
//   });
// });
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
                >Разработка сайтов, CRM систем на базе современных
                технологий.</span
              >
            </div>

            <div class="index-lottie">
              <client-only>
                <Vue3Lottie
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
                    <strong>Разработка корпаративных сайтов, лендингов.</strong>
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
                    <strong>Интернет магазины, СЕО оптимизация.</strong>
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
                    <strong>CRM систем и индивидуальных решений.</strong>
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
