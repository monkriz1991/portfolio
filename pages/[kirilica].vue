<script setup>
const router = useRouter();
const route = useRoute();
const kirilicaParam = route.params.kirilica;
const filteredResults = ref([]);
try {
  const { data: project } = await useAsyncData("myProject", () =>
    queryContent("/myproject").only("results").findOne()
  );

  filteredResults.value = project.value.results.filter(
    (item) => item.kirilica === kirilicaParam
  );

  if (filteredResults.value.length === 0) {
    router.push("/");
  }
} catch (error) {
  console.error("Error fetching data:", error);
  router.push("/");
}

useHead({
  title: filteredResults.value[0].seoTitle,
  meta: [
    {
      hid: "description",
      name: "description",
      content: filteredResults.value[0].seoDescription,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: filteredResults.value[0].seoTitle,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: filteredResults.value[0].seoDescription,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://fastsite.pro" + filteredResults.value[0].img,
    },
  ],
});
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
                    :alt="`Основной img проекта  ${item.name}`"
                    format="webp"
                    sizes="sm:100px md:100px lg:100px"
                    data-fancybox="galery project"
                    preload
                  ></NuxtImg>
                </div>
                <div
                  class="project-block-img-right"
                  v-for="(itemImg, index) in item.images"
                  :key="itemImg"
                >
                  <NuxtImg
                    provider="aliyun"
                    :src="itemImg"
                    :alt="`Доп. img ${index} проекта ${item.name}`"
                    format="webp"
                    sizes="sm:100px md:100px lg:100px"
                    data-fancybox="galery project"
                    loading="lazy"
                  ></NuxtImg>
                </div>
              </div>
            </div>
            <div class="project-preview">
              <div class="columns is-multiline">
                <div
                  class="column is-4"
                  v-for="itemStage in item.infostage"
                  :key="itemStage"
                >
                  <div class="project-preview-block">
                    <strong>{{ itemStage }}</strong>
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
