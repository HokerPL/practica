<script setup>
import { ref, computed } from 'vue'

const categories = ref([
  { id: 1, name: 'Гигиена рук', icon: '/images/mainpage/circle.svg' },
  { id: 2, name: 'Дезинфекция поверхностей', icon: '/images/mainpage/circle.svg' },
  { id: 3, name: 'Дезинфекция для стоматологии и диализа', icon: '/images/mainpage/circle.svg' },
  { id: 4, name: 'Обработка инструментов', icon: '/images/mainpage/circle.svg' },
  { id: 5, name: 'Дезинфекция для чистых помещений, лабораторий и фармпроизводств', icon: '/images/mainpage/circle.svg' },
  { id: 6, name: 'Дозирующие устройства', icon: '/images/mainpage/circle.svg' },
  { id: 7, name: 'Автоматические мойки эндоскопов', icon: '/images/mainpage/circle.svg' },
  { id: 8, name: 'Автоматические моечно-дезинфекционные машины', icon: '/images/mainpage/circle.svg' },
  { id: 9, name: 'Шкафы для хранения', icon: '/images/mainpage/circle.svg' },
  { id: 10, name: 'Система ультрамягкого хирургического льда', icon: '/images/mainpage/circle.svg' },
  { id: 11, name: 'Уборочный инвентарь', icon: '/images/mainpage/circle.svg' },
  { id: 12, name: 'Тест-полоски программа контроля качества', icon: '/images/mainpage/circle.svg' },
  { id: 13, name: 'Защитные чехлы и покрытия', icon: '/images/mainpage/circle.svg' },
  { id: 14, name: 'Средства для уборки', icon: '/images/mainpage/circle.svg' },
  { id: 15, name: 'Средства для стирки', icon: '/images/mainpage/circle.svg' },
  { id: 16, name: 'Средства для защиты кожи', icon: '/images/mainpage/circle.svg' }
])
const products = ref([
  {
    id: 1,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product1.png'
  },
  {
    id: 2,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product2.png'
  },
  {
    id: 3,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product3.png'
  },
  {
    id: 4,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product4.png'
  },
  {
    id: 5,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product5.png'
  },
  {
    id: 6,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product6.png'
  },
  {
    id: 7,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product7.png'
  },
  {
    id: 8,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product8.png'
  },
  {
    id: 9,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product9.png'
  },
  {
    id: 10,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product10.png'
  },
  {
    id: 11,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product11.png'
  },
  {
    id: 12,
    name: '',
    description: 'Абактерил Хлор таблетки 300 штук',
    article: '00319',
    brand: 'Абактерил',
    price: 689,
    oldPrice: 1400,
    discount: '-51%',
    savings: '600 ₽',
    rating: 5,
    isHit: true,
    isNew: false,
    isSuperPrice: false,
    image: '/images/products/product12.png'
  },
])
const quantities = ref({})
products.value.forEach(p => { quantities.value[p.id] = 0 })

const activeFilter = ref('superprice')
const visibleCount = ref(8)
const productsPerPage = 4

const visibleProducts = computed(() => products.value.slice(0, visibleCount.value))
const hasMoreProducts = computed(() => visibleCount.value < products.value.length)

const showMoreProducts = () => {
  visibleCount.value = Math.min(visibleCount.value + productsPerPage, products.value.length)
}

const decQty = (id) => { if (quantities.value[id] > 1) quantities.value[id]-- }
const incQty = (id) => { quantities.value[id]++ }

const products2 = [
  {
    id: 1,
    tag: 'Лучший выбор 2021 года!',
    title: 'Дезитабс хлорные таблетки',
    description: 'Подбирайте правильное средство для дезинфекции любых подходящих поверхностей.',
  },
  {
    id: 2,
    tag: 'Проверенное временем качество',
    title: 'Дезиптол гель',
    description: 'Используйте антисептик в виде геля и получите защиту от вирусов на весь день.',
  },
  {
    id: 3,
    tag: 'Бесконтактное использование',
    title: 'Автоматический дозатор Дезнэт',
    description: 'Надежное устройство для мыла и антисептика работает от сети или батареек.',
  },
  {
    id: 4,
    tag: 'Вкус детства',
    title: 'Бэйбилайф жидкое мыло Дезнэт',
    description: 'Ваш ребенок будет идеально чистым, а его кожа безупречно здорова.',
  },
]

</script>

<template>
<section class="welcome_window">
  <div class="container">
    <div class="text-photo">
      <div class="text-btn">
        <h2>Товары для дезинфекции<br>медицинских учреждений</h2>
        <p>Высококачественное инновационное медицинское<br> оборудование передовых мировых производителей.</p>
        <div class="btn-photo">
          <router-link to="Catalog" class="button">Перейти в каталог</router-link>
          <button class="button">Читать статьи</button>
        </div>
      </div>
      <div class="welcome_logo">
        <img src="/images/mainpage/Group1314966.png" alt="">
      </div>
    </div>
  </div>
</section>
  <section class="popular-categories">
    <div class="container">
      <div class="title-categories">
        <p>Популярные категории</p>
        <router-link to="Catalog" class="btn-categories">Весь каталог</router-link>
      </div>
      <div class="blocks-categories">
        <div class="blocks" v-for="category in categories" :key="category.id">
          <img :src="category.icon" :alt="category.name">
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="popular-products">
    <div class="container">

      <div class="products-header">
        <h2>Популярные товары</h2>
        <div class="filter-tags">
          <button class="tag" :class="{ active: activeFilter === 'superprice' }" @click="activeFilter = 'superprice'">Суперцена</button>
          <button class="tag" :class="{ active: activeFilter === 'hit' }"        @click="activeFilter = 'hit'">Хит</button>
          <button class="tag" :class="{ active: activeFilter === 'new' }"        @click="activeFilter = 'new'">Новинка</button>
          <button class="btn-catalog">Весь каталог</button>
        </div>
      </div>

      <div class="products-grid">
        <div class="product-card" v-for="product in visibleProducts" :key="product.id">

          <div class="card-image">
            <img :src="product.image" :alt="product.name" />

            <div class="badges">
              <span v-if="product.isSuperPrice" class="badge badge--superprice">Суперцена</span>
              <span v-if="product.isHit"        class="badge badge--hit">Хит</span>
              <span v-if="product.isNew"        class="badge badge--new">Новинка</span>
            </div>

            <div class="card-actions">
              <button class="action-btn" title="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <button class="action-btn" title="Сравнить">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6"  y1="20" x2="6"  y2="14"/>
                </svg>
              </button>
              <button class="action-btn" title="В корзину">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </button>
              <button class="action-btn" title="Быстрый просмотр">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="card-body">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-desc">{{ product.description }}</p>

            <div class="product-meta">
              <span>Артикул: <b>{{ product.article }}</b></span>
              <span>Бренд: <b>{{ product.brand }}</b></span>
            </div>

            <div class="price-row">
              <span class="price-now">{{ product.price }} ₽</span>
              <span class="price-old">{{ product.oldPrice }} ₽</span>
            </div>

            <div class="discount-row">
              <span class="disc-badge">{{ product.discount }}</span>
              <span class="savings-badge">Экономия {{ product.savings }}</span>
            </div>
            <div class="product-footer">
              <div class="qty-ctrl">
                <button class="qty-btn" @click="decQty(product.id)">−</button>
                <span class="qty-val">{{ quantities[product.id] }}</span>
                <button class="qty-btn" @click="incQty(product.id)">+</button>
              </div>
              <button v-if="product.hasPrice" class="cart-btn">В корзину</button>
              <button v-else class="ask-btn">Запросить цену</button>
            </div>
          </div>

        </div>
      </div>

      <div class="show-more-wrap" v-if="hasMoreProducts">
        <button class="show-more-btn" @click="showMoreProducts">
          Загрузить ещё
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>

    </div>
  </section>
  <section class="four-tovars">
    <div class="container">
      <div class="row">
        <div class="tovar1">
          <img src="/images/mainpage/circle.svg" alt="">
          <p>3000 средств для<br> дезинфекции! 20000<br> медтоваров в каталоге</p>
          <div class="podtitle">
            <p>Работаем напрямую с ведущими<br> производителями</p>
          </div>
        </div>
        <div class="tovar1">
          <img src="/images/mainpage/circle.svg" alt="">
          <p>Достаточный складской запас<br> для отгрузки крупных партий</p>
          <div class="podtitle">
            <p>Товаров хватит<br>всем покупателям</p>
          </div>
        </div>
        <div class="tovar1">
          <img src="/images/mainpage/circle.svg" alt="">
          <p>Оперативная доставка в<br> любую точку России</p>
          <div class="podtitle">
            <p>Бережно доставляем товары<br> по Москве и России</p>
          </div>
        </div>
        <div class="tovar1">
          <img src="/images/mainpage/circle.svg" alt="">
          <p>Бережно доставляем товары<br> по Москве и России</p>
          <div class="podtitle">
            <p>Максимум полезной информации<br> о товаре</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="articles">
    <div class="container">
      <div class="articles">
        <div class="title-acticles">
          <p>Статьи</p>
          <button>Дезинфексия</button>
          <button>Статьи про нас</button>
          <button>Еще тег</button>
        </div>
        <div class="articles-btn">
          <button>Все статьи</button>
        </div>
      </div>
      <div class="articles-blocks">
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Микроскопы, их назначение и виды
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one" >
          <div style="max-width: 260px; min-height: 325px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Лабораторные пробирки
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Лабораторное оборудование и инструменты
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Таблетки для обеззараживания воды
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="brends">
    <div class="container">
      <div class="brend">
        <div class="left-block">
          <p>Бренды</p>
          <p>Наш интернет-магазин предлагает приобрести товары<br>
            представленных ниже торговых марок. Все товары, предлагаемые<br>
            к продаже в нашем магазине, являются подлинными, на товары<br>
            распространяется гарантия производителя, товары от зарубежных<br>
            производителей ввезены в Российскую Федерацию на законном<br>
            основании.
          </p>
          <router-link to="BrendsPage" class="btn-brends">Все бренды</router-link>
        </div>
        <div class="right-imgs-brend">
          <img src="/images/mainpage/Rectangle%204997.png" alt="">
          <img src="/images/mainpage/Rectangle%204998.png" alt="">
          <img src="/images/mainpage/Rectangle%204999.png" alt="">
          <img src="/images/mainpage/Rectangle%205000.png" alt="">
          <img src="/images/mainpage/Rectangle%204997-1.png" alt="">
          <img src="/images/mainpage/Rectangle%204998-1.png" alt="">
          <img src="/images/mainpage/Rectangle%204999-1.png" alt="">
          <img src="/images/mainpage/Rectangle%205000-1.png" alt="">
          <img src="/images/mainpage/Rectangle 4997-2.png" alt="">
          <img src="/images/mainpage/Rectangle%204998-2.png" alt="">
          <img src="/images/mainpage/Rectangle%204999-2.png" alt="">
          <img src="/images/mainpage/Rectangle 5000-2.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="promo-grid">
    <div class="container">
      <div class="promo-grid__inner">
        <div
            v-for="product in products2"
            :key="product.id"
            class="promo-card"
        >
          <div class="promo-card__content">
            <span class="promo-card__tag">{{ product.tag }}</span>
            <h2 class="promo-card__title">{{ product.title }}</h2>
            <p class="promo-card__description">{{ product.description }}</p>
          </div>

          <div class="promo-card__image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="#c8c8c8" stroke-width="1.5"/>
              <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#c8c8c8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="#c8c8c8"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="form-order">
    <div class="container">
      <div class="form">
        <div class="form-text-left">
          <p>Оставьте заявку на<br> комплексный заказ</p>
          <p>
            Мы осуществляем комплексные поставки товаров медицинского и<br>
            иного назначения на предприятия различных сфер деятельности, а<br>
            также оптовые продажи по минимальным ценам, за счет прямых<br>
            договоров с заводами-производителями, на многих из которых мы<br>
            являемся официальными представителями и дистрибьюторами.
          </p>
        </div>
        <div class="form-input-right">
          <div class="form-input-4">
            <div>
              <p>ФИО*</p>
              <input type="text" placeholder="Иванов Иван Иванович" class="fio-input" />
            </div>
            <div>
              <p>E-mail*</p>
              <input type="email" placeholder="example@gmail.com" class="email-input" />
            </div>
            <div>
              <p>Телефон*</p>
              <input type="tel" placeholder="+7(909)-777-77-77" class="tel-input" />
            </div>
            <div>
              <p>Город*</p>
              <input type="text" placeholder="Москва" class="city-input" />
            </div>
          </div>
          <p>Название организации*</p>
          <input type="text" placeholder="Название компании" class="company-input" />
          <input type="text" placeholder="Комментарий" class="comment-input" />
          <div class="zayavka-btn">
            <button type="button">Оставить заявку</button>
            <p>Я даю согласие на обработку моих<br>персональных данных</p>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section class="company-garantiya">
    <div class="container">
      <div class="kachestvo">
        <div class="text-left-block">
          <p>Наша компания -<br>
            качество и гарантия
          </p>
          <p>Профессиональные дезинфицирующие средства широко<br>
            применяются в медицине, на предприятиях общественного<br>
            питания, службы быта, в учебных заведениях, фитнес-центрах,<br>
            квартирах и частных домах. Безопасные антисептики, расходные<br>
            материалы, оборудование для дезинфекции поддерживают<br>
            высокий уровень гигиены. Их использование гарантирует<br>
            позитивные заключения при проверках контролирующих органов.
          </p>
          <p>Компания за 16 лет работы стала добросовестным поставщиком<br>
            дезинфицирующих средств и медицинской продукции. В числе<br>
            услуг – помощь в выборе препаратов, тщательный контроль<br>
            формирования и отгрузки заказов.
          </p>
          <button>Подробности</button>
        </div>
        <div class="null-img-right">
          <div style="background: #f0f0f0; width: 800px; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
              <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
              <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
            <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
              <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="articles">
    <div class="container">
      <div class="articles">
        <div class="title-acticles">
          <p>Новости</p>
          <button>Новости компании</button>
          <button>Новости отрасли</button>
          <button>Еще тег</button>
        </div>
        <div class="articles-btn">
          <button>Все новости</button>
        </div>
      </div>
      <div class="articles-blocks">
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Микроскопы, их назначение и виды
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one" >
          <div style="max-width: 260px; min-height: 325px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Лабораторные пробирки
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Лабораторное оборудование и инструменты
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
        <div class="cartochka-one">
          <div style="max-width: 260px; border: 2px solid gray; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
            <div style="background: #f0f0f0; width: 100%; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <circle cx="18" cy="21" r="3" stroke="#aaa" stroke-width="1.5" fill="none"/>
                <path d="M8 30l8-6 6 5 5-4 7 7" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <svg style="position:absolute;top:0;left:0;width:100%;height:100%;" viewBox="0 0 100 75" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="75" stroke="#ccc" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="0" y2="75" stroke="#ccc" stroke-width="0.5"/>
              </svg>
            </div>
            <div style="padding: 16px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">
                <span style="font-size: 12px; color: #888;">Советы покупателям</span>
              </div>
              <p style="font-size: 15px; font-weight: 500; color: #1a1a1a; margin: 0 0 14px; line-height: 1.4;">
                Таблетки для обеззараживания воды
              </p>
              <a href="#" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: #1a1a1a; text-decoration: none; font-weight: 500;">
                Читать подробнее →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Montserrat, arial, sans-serif;
}
button {
  cursor: pointer;
}
.container {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}
.welcome_window {
  margin: 20px 0 0 0;
  background: #f0f0f0;
}
.text-btn {
  margin: 0 85px 0 0;
}
.text-btn h2 {
  font-size: 45px;
  padding: 0 0 28px 0;
  font-weight: bold;
}
.text-btn p {
  font-size: 18px;
  padding: 0 0 32px 0;
}
.btn-photo button{
  width: 218px ;
  height: 54px;
  border-radius: 8px;
  margin: 0 28px 0 0;
  color: white;
  background: #000000;
  font-size: 16px;
  list-style: none;
  text-decoration: none;
}
.btn-photo .button {
  width: 218px;
  height: 54px;
  border-radius: 8px;
  margin: 0 28px 0 0;
  color: white;
  background: #000000;
  font-size: 16px;
  list-style: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}
.text-photo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.welcome_logo img {
  padding: 50px 0 0 0;
}
.title-categories {
  display: flex;
  flex-direction: row;
  font-size: 36px;
  padding: 56px 0 28px 0;
  justify-content: space-between;

}
.btn-categories {
  color: white;
  background: black;
  border-radius: 10px;
  width: 158px;
  height: 48px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blocks-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.blocks {
  width: 310px;
  border: 1px solid gray;
  height: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
    padding: 0 0 16px 0;
  }
}
.popular-products {
  padding: 60px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
}

/* ── Header ── */
.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 16px;
}

.products-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
}

.filter-tags {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.tag {
  background: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
  color: #1a1a1a;
  padding: 0;
  font-family: Montserrat, Arial, sans-serif;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.2s;
}
.tag.active,
.tag:hover {
  text-decoration-color: #1a1a1a;
  font-weight: 600;
}

.btn-catalog {
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: Montserrat, Arial, sans-serif;
}
.btn-catalog:hover { opacity: 0.85; }

/* ── Grid ── */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

/* ── Card ── */
.product-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Image ── */
.card-image {
  position: relative;
  background: #ebebeb;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
}

.badges {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
}
.badge--hit        { background: #1a1a1a; color: #fff; }
.badge--new        { background: #2563eb; color: #fff; }
.badge--superprice { background: #dc2626; color: #fff; }

.card-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  transition: color 0.15s;
}
.action-btn:hover { color: #1a1a1a; }
.action-btn svg   { width: 18px; height: 18px; }

/* ── Body ── */
.card-body {
  padding: 16px 14px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2px;
  line-height: 1.4;
}

.product-desc {
  font-size: 13px;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.4;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 10px;
}
.product-meta span   { font-size: 12px; color: #999; }
.product-meta span b { color: #333; font-weight: 600; }

.price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}
.price-now { font-size: 18px; font-weight: 700; color: #1a1a1a; }
.price-old { font-size: 13px; color: #bbb; text-decoration: line-through; }

.discount-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.disc-badge    { background: #1a1a1a; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; }
.savings-badge { background: #f0f0f0; color: #444; font-size: 11px; padding: 3px 8px; border-radius: 4px; }

/* ── Footer ── */
.product-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.qty-ctrl {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}
.qty-btn {
  background: none;
  border: none;
  width: 34px;
  height: 38px;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qty-btn:hover { background: #f5f5f5; }

.qty-val {
  font-size: 14px;
  font-weight: 600;
  min-width: 28px;
  text-align: center;
  color: #1a1a1a;
}

.cart-btn {
  flex: 1;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 6px;
  height: 38px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: Montserrat, Arial, sans-serif;
  transition: opacity 0.2s;
}
.cart-btn:hover { opacity: 0.85; }

.ask-btn {
  flex: 1;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 6px;
  height: 38px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: Montserrat, Arial, sans-serif;
  transition: opacity 0.2s;
}
.ask-btn:hover { opacity: 0.85; }

/* ── Show more ── */
.show-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.show-more-btn {
  background: none;
  border: 2px solid #1a1a1a;
  color: #1a1a1a;
  border-radius: 5px;
  padding: 11px 36px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Montserrat, Arial, sans-serif;
  transition: background 0.2s, color 0.2s;
}
.show-more-btn:hover { background: #1a1a1a; color: #fff; }
.show-more-btn svg   { width: 18px; height: 18px; }



.four-tovars {
  padding: 36px 0 56px 0;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  gap: 62px;
}
.tovar1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 16px;
  line-height: 24px;
  width: 310px;
  gap: 10px;
  img {
    width: 60px;
    height: 60px;
  }
}
.podtitle {
  color: #121212;
  line-height: 24px;
  font-size: 14px;
  font-weight: normal;
}
.articles-blocks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.articles {
  display: flex;
  flex-direction: row;
}
.title-acticles p{
  font-size: 30px;
  font-weight: bold;
}
.cartochka-one {
  width: 310px;
  height: 386px;
}
.title-acticles button {
  font-size: 14px;
  background: lightgray;
  color: gray;
  border-radius: 8px;
  border: none;
  width: 126px;
  height: 32px;
  margin: 24px 8px 20px 0;
}
.articles-btn button{
  border: none;
  margin: 0 0 0 800px;
  width: 138px;
  height: 48px;
  background: black;
  color: white;
  border-radius: 10px;
  font-size: 16px;
}
.brend {
  display: flex;
}
.brend p:nth-child(1) {
  font-size: 48px;
  font-weight: bold;
  padding: 0 0 24px 0;
}
.brend p:nth-child(2) {
  font-size: 16px;
  color: dimgray;
  letter-spacing: 1px;
}
.btn-brends {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: black;
  color: white;
  font-size: 16px;
  width: 197px;
  height: 51px;
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
  margin: 20px 0 0 0;
}
.left-block {
  padding: 0 26px 0 0;
}
.right-imgs-brend {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.promo-grid {
  padding: 16px 0 35px 0;
}
.promo-grid__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.promo-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 48px 40px 5px 44px;
  gap: 24px;
  border: none;
}

.promo-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.promo-card__tag {
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999999;
}

.promo-card__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #1a1a1a;
  margin: 0;
}

.promo-card__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #666666;
  margin: 0;
}

.promo-card__image {
  width: 310px;
  height: 369px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-order {
  background: #d9d9d9;
  height: 525px;
}
.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  padding: 55px 0 0 0;
}

.form-text-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 0 0 50px;
}

.form-text-left p:nth-child(1) {
  font-size: 26px;
  line-height: 1.3;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.form-text-left p:nth-child(2) {
  font-size: 16px;
  color: #666666;
  letter-spacing: 1px;
  margin: 0;
}

.form-input-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-input-4 {
  display: grid;
  grid-template-columns: repeat(2, 302px);
  column-gap: 16px;
  row-gap: 8px;
}

.form-input-4 p {
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #1a1a1a;
}

.form-input-right > p {
  font-size: 12px;
  color: #1a1a1a;
  margin: 4px 0 0 0;
}

.form-input-right input,
.form-input-4 input {
  height: 46px;
  border-radius: 6px;
  border: none;
  background: #ffffff;
  padding: 0 14px;
  font-size: 13px;
  color: #1a1a1a;
  outline: none;
  box-sizing: border-box;
  width: 302px;
}

.form-input-right input::placeholder,
.form-input-4 input::placeholder {
  color: #aaaaaa;
}

.company-input {
  width: 302px !important;
}

.comment-input {
  width: 620px !important;
  height: 68px !important;
}

.zayavka-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  width: 620px;
}

.zayavka-btn button {
  flex-shrink: 0;
  height: 46px;
  padding: 0 28px;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.zayavka-btn p {
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
  margin: 0;
}

.company-garantiya {
  padding: 0 0 56px 0;
}
.kachestvo {
  display: flex;
  padding: 55px 0 0 0;
}
.text-left-block {
  padding: 0 29px 0 0;
}
.text-left-block p:nth-child(1) {
  font-size: 48px;
  padding: 20px 0 24px 0;
  line-height: 120%;
}
.text-left-block p:nth-child(2) {
  font-size: 16px;
  padding: 0 0 12px 0;
  line-height: 130%;
}
.text-left-block p:nth-child(3) {
  font-size: 16px;
  padding: 0 0 12px 0;
  line-height: 130%;
}
.text-left-block button {
  width: 210px;
  height: 51px;
  background: #333333;
  color: #ffffff;
  font-size: 16px;
  margin: 16px 0 0 0;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .text-photo {
    gap: 24px;
  }
  .text-btn {
    margin: 0;
  }
  .text-btn h2 {
    font-size: 32px;
  }
  .text-btn p {
    font-size: 16px;
  }
  .text-btn h2 br,
  .text-btn p br {
    display: none;
  }
  .welcome_logo img {
    max-width: 100%;
    height: auto;
  }
  .title-categories {
    font-size: 28px;
    padding: 40px 0 20px 0;
  }
  .blocks-categories {
    grid-template-columns: repeat(3, 1fr);
  }
  .blocks {
    width: 100%;
  }
  .products-header h2 {
    font-size: 28px;
  }
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .row {
    flex-wrap: wrap;
    gap: 32px;
  }
  .tovar1 {
    width: calc(50% - 16px);
  }
  .tovar1 p br,
  .podtitle p br {
    display: none;
  }
  .articles-blocks {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  .cartochka-one {
    width: calc(50% - 8px);
  }
  .articles-btn button {
    margin: 0 0 0 auto;
  }
  .promo-grid__inner {
    grid-template-columns: 1fr;
  }
  .promo-card {
    padding: 32px 24px;
  }
  .promo-card__image {
    width: 240px;
    height: 280px;
  }
  .right-imgs-brend {
    grid-template-columns: repeat(3, 1fr);
  }
  .form {
    flex-wrap: wrap;
    gap: 32px;
    padding: 40px 16px 0;
  }
  .form-text-left {
    margin: 0;
    width: 100%;
  }
  .form-text-left p br {
    display: none;
  }
  .form-input-right {
    width: 100%;
  }
  .form-input-4 {
    grid-template-columns: 1fr 1fr;
  }
  .form-input-right input,
  .form-input-4 input {
    width: 100%;
  }
  .company-input,
  .comment-input {
    width: 100% !important;
  }
  .zayavka-btn {
    width: 100%;
    flex-wrap: wrap;
  }
  .kachestvo {
    flex-direction: column;
    gap: 32px;
  }
  .text-left-block {
    padding: 0;
  }
  .text-left-block p:nth-child(1) {
    font-size: 36px;
  }
  .text-left-block p br {
    display: none;
  }
  .null-img-right > div {
    width: 100% !important;
  }
}

@media (max-width: 768px) {
  .welcome_window {
    margin: 12px 0 0 0;
    padding: 24px 0;
  }
  .text-photo {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
  .text-btn h2 {
    font-size: 26px;
    padding: 0 0 16px 0;
  }
  .text-btn p {
    font-size: 14px;
    padding: 0 0 20px 0;
  }
  .btn-photo {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .btn-photo button,
  .btn-photo .button {
    width: 100%;
    margin: 0;
  }
  .welcome_logo img {
    padding: 0;
    width: 100%;
  }
  .title-categories {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    font-size: 22px;
    padding: 32px 0 16px 0;
  }
  .blocks-categories {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .blocks {
    height: 160px;
    font-size: 12px;
    padding: 8px;
    img {
      width: 44px;
      height: 44px;
      padding: 0 0 10px 0;
    }
  }
  .popular-products {
    padding: 40px 0;
  }
  .products-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 24px;
  }
  .products-header h2 {
    font-size: 24px;
  }
  .filter-tags {
    width: 100%;
    gap: 10px;
  }
  .btn-catalog {
    margin-left: auto;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .card-image {
    height: 160px;
  }
  .product-name {
    font-size: 13px;
  }
  .product-desc {
    font-size: 12px;
  }
  .price-now {
    font-size: 16px;
  }
  .product-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .qty-ctrl {
    align-self: flex-start;
  }
  .cart-btn,
  .ask-btn {
    width: 100%;
  }
  .four-tovars {
    padding: 24px 0 40px 0;
  }
  .row {
    flex-direction: column;
    gap: 24px;
  }
  .tovar1 {
    width: 100%;
  }
  .articles {
    flex-wrap: wrap;
    gap: 12px;
  }
  .title-acticles p {
    font-size: 24px;
    width: 100%;
  }
  .title-acticles button {
    margin: 8px 6px 12px 0;
  }
  .articles-btn button {
    margin: 0;
    width: 100%;
  }
  .cartochka-one {
    width: 100%;
  }
  .cartochka-one > div {
    max-width: 100% !important;
  }
  .brend {
    flex-direction: column;
    gap: 24px;
  }
  .brend p:nth-child(1) {
    font-size: 32px;
    padding: 0 0 16px 0;
  }
  .left-block {
    padding: 0;
  }
  .right-imgs-brend {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .promo-card {
    flex-direction: column;
    padding: 24px 16px;
    text-align: left;
  }
  .promo-card__image {
    width: 100%;
    height: 200px;
  }
  .promo-card__title {
    font-size: 20px;
    line-height: 1.3;
  }
  .promo-card__description {
    font-size: 14px;
  }
  .form-order {
    height: auto;
    padding-bottom: 32px;
  }
  .form {
    padding: 24px 0 0 0;
    gap: 24px;
  }
  .form-text-left p:nth-child(1) {
    font-size: 22px;
  }
  .form-text-left p:nth-child(2) {
    font-size: 14px;
  }
  .form-input-4 {
    grid-template-columns: 1fr;
  }
  .zayavka-btn {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .zayavka-btn button {
    width: 100%;
  }
  .zayavka-btn p {
    font-size: 13px;
  }
  .zayavka-btn p br {
    display: none;
  }
  .text-left-block p:nth-child(1) {
    font-size: 28px;
    padding: 12px 0 16px 0;
  }
  .text-left-block p {
    font-size: 14px;
  }
  .text-left-block button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .text-btn h2 {
    font-size: 22px;
  }
  .blocks-categories {
    grid-template-columns: 1fr;
  }
  .blocks {
    height: 140px;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    padding: 16px;
    gap: 12px;
    img {
      padding: 0;
    }
  }
  .blocks img {
    width: 40px;
    height: 40px;
    padding: 0;
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
  .card-image {
    height: 200px;
  }
  .right-imgs-brend {
    grid-template-columns: 1fr;
  }
  .filter-tags {
    flex-wrap: wrap;
  }
  .tag {
    font-size: 13px;
  }
  .form-input-right input,
  .form-input-4 input,
  .company-input,
  .comment-input {
    font-size: 16px;
  }
  .show-more-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>