<script setup>
const activeTab = ref(0);
const { data: tabs } = await useAsyncData("myStack", () =>
  queryContent("/mystack").only("results").findOne()
);

const activateTab = (index) => {
  activeTab.value = index;
};
</script>
<template>
  <div>
    <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
      <h4><Icon name="solar:widget-4-broken" />Наш стек</h4>
      <div class="index-stack-info">
        <p>
          Обеспечивает высокую производительность, быструю загрузку и надежное
          управление данными.
        </p>
        <div class="stack-info-item">
          <div class="custom-tabs">
            <div class="custom-tabs-left">
              <div
                v-for="(tab, index) in tabs.results"
                :key="index"
                @click="activateTab(index)"
                :class="{ active: activeTab === index }"
                class="custom-tabs-tab"
              >
                <NuxtImg
                  provider="aliyun"
                  :src="tab.img"
                  :alt="`img stack ${tab.type}`"
                  format="webp"
                  loading="lazy"
                  sizes="sm:50px md:50px lg:50px"
                ></NuxtImg>
                <span>{{ tab.type }}</span>
              </div>
            </div>
            <div class="stack-tabs-wraper">
              <div v-for="(tab, index) in tabs.results" :key="index">
                <div
                  class="stack-tabs-content"
                  v-show="activeTab === index"
                  v-html="tab.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
