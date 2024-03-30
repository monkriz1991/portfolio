<script setup>
import animationLottie from "@/content/animation_contact.json";

const { $anime } = useNuxtApp();
const mobileScin = ref(100);
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
  lottieAnimation.value.destroy();
});
useHead({
  title: "FastSite — Ваши контакты с креативом и профессионализмом",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Связаться с нами — значит войти в мир креативных возможностей и профессионального подхода. FastSite готов предложить вам свои услуги в области веб-разработки и дизайна. Давайте создадим вместе что-то уникальное!",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "FastSite — Ваши контакты с креативом и профессионализмом",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Связаться с нами — значит войти в мир креативных возможностей и профессионального подхода. FastSite готов предложить вам свои услуги в области веб-разработки и дизайна. Давайте создадим вместе что-то уникальное!",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://fastsite.pro/nuxt-imf.webp",
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
            <h1 class="title">Контакты</h1>
            <div class="title-h2">
              <span>Здесь Вы можете отправить заявку на разработку.</span>
            </div>
            <div class="index-lottie">
              <client-only>
                <Vue3Lottie
                  ref="lottieAnimation"
                  :animationData="animationLottie"
                  :height="300"
                  :width="500"
                />
              </client-only>
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-8">
              <div class="contact-form">
                <Order />
              </div>
            </div>
            <div class="column is-4">
              <div data-aos="fade-up" data-aos-delay="900" data-aos-once="true">
                <div class="columns is-variable is-2 is-multiline">
                  <div class="column is-12 pb-1">
                    <div class="social-block">
                      <nuxt-link
                        href="viber://chat?number=%2B375298966076"
                        class="button is-link is-light"
                      >
                        <span class="icon"
                          ><Icon name="solar:phone-calling-broken"
                        /></span>
                        <span>Viber</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="column is-12 pb-1">
                    <div class="social-block">
                      <nuxt-link
                        href="tg://resolve?domain=monkrizi"
                        class="button is-info is-light"
                      >
                        <span class="icon"
                          ><Icon name="solar:plain-2-broken"
                        /></span>
                        <span>Telegram</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="column is-12 pb-1">
                    <div class="social-block">
                      <nuxt-link
                        href="mailto: monkriz1991@gmail.com"
                        class="button is-primary is-light"
                      >
                        <span class="icon"
                          ><Icon name="solar:letter-broken"
                        /></span>
                        <span>Email</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="social-block">
                      <nuxt-link
                        href="tel:+37529153-13-99"
                        class="button is-warning is-light"
                      >
                        <span class="icon"
                          ><Icon name="solar:smartphone-broken"
                        /></span>
                        <span>Mobail</span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
