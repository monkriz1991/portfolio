<script setup>
// import { animationStore } from "@/store/animation";
import animationLottie from "@/public/animation_contact.json";

const { $anime } = useNuxtApp();
// const store = animationStore();
// const animationOne = ref(null);
// const isVisible = ref(true);
const mobileScin = ref(100);
const animationFun = () => {
  $anime({
    targets: [".title", ".title-h2"],
    translateY: [mobileScin.value],
    easing: "easeInOutExpo",
    delay: function (el, i, l) {
      return i * 850;
    },
    opacity: {
      value: 1,
    },
    // complete: function () {
    //   if (!store.isLoadedContact) {
    //     fetchData();
    //   } else {
    //     animationOne.value = store.animationDataContact;
    //   }
    // },
  });
};

// const fetchData = async () => {
//   try {
//     const response = await queryContent("/animation_contact").findOne();
//     store.setAnimationDataContact(response);
//     animationOne.value = response;
//   } catch (error) {
//     console.error("Ошибка при загрузке данных анимации:", error);
//   }
// };
const mobailScrin = () => {
  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth <= 800) {
      mobileScin.value = 50;
    } else {
      mobileScin.value = 100;
    }
  });
  if (document.documentElement.clientWidth <= 800) {
    mobileScin.value = 50;
  } else {
    mobileScin.value = 100;
  }
};
onMounted(() => {
  mobailScrin();
  animationFun();
});
onBeforeUnmount(() => {
  // Сброс анимации перед размонтированием компонента
  $anime({
    targets: [".title", ".title-h2"],
    translateY: 0, // Возвращаем начальное положение
    opacity: 0, // Скрываем элементы
    duration: 0, // Длительность анимации равна 0, чтобы мгновенно выполнить сброс
  });
});
</script>

<template>
  <div>
    <div class="bd-docs-main">
      <div class="container is-max-desktop">
        <div class="content">
          <div class="index-title">
            <h1 class="title">Контакты</h1>
            <div class="title-h2">
              <span>Здесь Вы можете отправить заявку на разработку.</span>
            </div>
            <div class="index-lottie">
              <client-only>
                <Vue3Lottie
                  :animationData="animationLottie"
                  :height="300"
                  :width="500"
                />
              </client-only>
            </div>
          </div>
          <div class="contact-form">
            <Order />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
