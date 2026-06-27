<script setup>
import { ref, computed, onMounted } from 'vue'

const PAGE_SIZE = 8

const allBrands = ref([])
const visibleCount = ref(PAGE_SIZE)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/src/data/brands.json')
    allBrands.value = await res.json()
  } catch (e) {
    console.error('Не удалось загрузить brands.json', e)
  } finally {
    loading.value = false
  }
})

const visibleBrands = computed(() => allBrands.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < allBrands.value.length)

function showMore() {
  visibleCount.value += PAGE_SIZE
}
</script>

<template>
  <div class="brands-page">
    <div class="container">
      <nav class="breadcrumb">
        <router-link to="/" class="breadcrumb-link">Главная</router-link>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">Бренды</span>
      </nav>
      <h1 class="page-title">Производители</h1>
      <p class="page-desc">
        Наш интернет-магазин имеет достаточно большой ассортимент торговых марок. Вся продукция, представленная в нашем интернет-магазине,
        поставляется исключительно напрямую с заводов-изготовителей или официальными дистрибьюторами на территории РФ. Это означает, что вся
        продукция действительно фирменная, никакого «серого импорта». На все товары распространяется гарантия производителя, а цены в нашем
        магазине соответствуют рекомендованным производителями или официальными дистрибьюторами.
      </p>
      <div v-if="loading" class="loading">Загрузка...</div>
      <div v-else class="brands-grid">
        <a
            v-for="brand in visibleBrands"
            :key="brand.id"
            href="#"
            class="brand-card"
        >
          <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
        </a>
      </div>
      <div v-if="!loading && hasMore" class="show-more-wrap">
        <button class="btn-show-more" @click="showMore">Показать ещё</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  list-style: none;
}

.brands-page {
  background: #fff;
  min-height: 100vh;
  padding-bottom: 60px;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 20px 0 16px;
  font-size: 14px;
  color: #888;
}

.breadcrumb-link {
  color: #888;
  transition: color 0.15s;
}

.breadcrumb-link:hover {
  color: #191919;
}

.breadcrumb-sep {
  color: #bbb;
}

.breadcrumb-current {
  color: #191919;
}

.page-title {
  font-size: 36px;
  font-weight: 700;
  color: #191919;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.page-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  max-width: 960px;
  margin-bottom: 36px;
}

.loading {
  text-align: center;
  padding: 60px 0;
  color: #888;
  font-size: 16px;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.brand-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8e8e8;
  border-radius: 4px;
  height: 180px;
  padding: 24px;
  transition: background 0.18s;
  cursor: pointer;
}

.brand-card:hover {
  background: #d8d8d8;
}

.brand-logo {
  width: 300px;
  max-height: 150px;
  filter: grayscale(100%);
  transition: filter 0.2s;
}

.brand-card:hover .brand-logo {
  filter: grayscale(60%);
}

.show-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.btn-show-more {
  width: 580px;
  height: 52px;
  background: #191919;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.2px;
  transition: background 0.18s, transform 0.1s;
}

.btn-show-more:hover {
  background: #333;
}

.btn-show-more:active {
  transform: scale(0.99);
}

/* ───── Tablet (≤1024px) ───── */
@media (max-width: 1024px) {
  .brands-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .page-title {
    font-size: 30px;
  }
}

/* ───── Mobile (≤768px) ───── */
@media (max-width: 768px) {
  .brands-page {
    padding-bottom: 40px;
  }
  .page-title {
    font-size: 24px;
  }
  .page-desc {
    font-size: 13px;
    margin-bottom: 24px;
  }
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .brand-card {
    height: 130px;
    padding: 16px;
  }
  .brand-logo {
    width: 100%;
    max-width: 200px;
    max-height: 100px;
  }
  .btn-show-more {
    width: 100%;
    height: 48px;
    font-size: 15px;
  }
}

/* ───── Small mobile (≤480px) ───── */
@media (max-width: 480px) {
  .page-title {
    font-size: 22px;
  }
  .brand-card {
    height: 100px;
  }
}
</style>