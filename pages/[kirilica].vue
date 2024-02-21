<script setup>
const router = useRouter();
const route = useRoute();
const kirilicaParam = route.params.kirilica;
let filteredResults = ref([]);

try {
  const { data: project } = await useAsyncData("myProject", () =>
    queryContent("/myproject").only("results").findOne()
  );

  filteredResults = project.value.results.filter(
    (item) => item.kirilica === kirilicaParam
  );

  // Проверяем, остались ли элементы после фильтрации
  if (filteredResults.length === 0) {
    // Выполняем перенаправление на другую страницу
    router.push("/"); // Пример перенаправления на страницу ошибки
  }
} catch (error) {
  // Обработка ошибки
  console.error("Error fetching data:", error);
  router.push("/"); // Пример перенаправления на страницу ошибки в случае ошибки при загрузке данных
}
</script>

<template>
  <div>
    <div class="bd-docs-main">
      <div class="container is-max-desktop">
        <div class="content">
          <div v-for="item in filteredResults" :key="item">
            <div class="back" @click="$router.back()">
              <Icon name="solar:round-alt-arrow-left-broken" />
              <strong>Назад</strong>
            </div>
            <h1 class="h1-project">{{ item.name }}</h1>
            <div class="breadcrums">
              <nuxt-link to="/">Главная</nuxt-link>
              <b>/</b>
              <nuxt-link :to="item.kirilica">{{ item.name }}</nuxt-link>
            </div>
            <div class="project-info">
              <div class="project-info-name">
                {{ item.type }}
              </div>
              <div class="project-info-icon">
                <nuxt-link :to="'https://' + item.link" target="_blank"
                  ><span>{{ item.link }}</span
                  ><Icon name="solar:square-top-down-broken"
                /></nuxt-link>
              </div>
            </div>
            <div class="project-block">
              <div class="project-block-img">
                <div class="project-block-img-left">
                  <NuxtImg
                    provider="aliyun"
                    :src="item.imgone"
                    alt="noimg"
                    format="webp"
                    sizes="sm:100px md:100px lg:100px"
                    data-fancybox="galery project"
                    preload
                  ></NuxtImg>
                </div>
                <div
                  class="project-block-img-right"
                  v-for="itemImg in item.images"
                  :key="itemImg"
                >
                  <NuxtImg
                    provider="aliyun"
                    :src="itemImg"
                    alt="noimg"
                    format="webp"
                    sizes="sm:50px md:50px lg:50px"
                    data-fancybox="galery project"
                    loading="lazy"
                  ></NuxtImg>
                </div>
              </div>
            </div>
            <div class="project-preview">
              <div class="columns is-multiline">
                <div class="column is-4">
                  <div class="project-preview-block">
                    <strong>Разработка корпаративных сайтов, лендингов.</strong>
                    <Icon name="solar:programming-broken" />
                  </div>
                </div>
                <div class="column is-4">
                  <div class="project-preview-block">
                    <strong>Разработка корпаративных сайтов, лендингов.</strong>
                    <Icon name="solar:programming-broken" />
                  </div>
                </div>
                <div class="column is-4">
                  <div class="project-preview-block">
                    <strong>Разработка корпаративных сайтов, лендингов.</strong>
                    <Icon name="solar:programming-broken" />
                  </div>
                </div>
              </div>
            </div>
            <div class="project-description">
              <div v-html="item.description"></div>
            </div>
            <div>{{ filteredResults.images }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
