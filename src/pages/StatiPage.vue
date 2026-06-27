<script setup>
import { ref, defineComponent, h } from 'vue'

const ImgPlaceholder = defineComponent({
  name: 'ImgPlaceholder',
  setup() {
    return () => h('div', { class: 'placeholder' }, [
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '100%',
        height: '100%',
        style: 'position:absolute;top:0;left:0',
      }, [
        h('line', { x1: '0', y1: '0', x2: '100%', y2: '100%', stroke: '#c4c4c4', 'stroke-width': '1' }),
        h('line', { x1: '100%', y1: '0', x2: '0', y2: '100%', stroke: '#c4c4c4', 'stroke-width': '1' }),
      ]),
      h('div', { class: 'placeholder__icon' }, [
        h('svg', { width: '28', height: '24', viewBox: '0 0 28 24', fill: 'none' }, [
          h('rect', { x: '1', y: '1', width: '26', height: '22', rx: '1', stroke: '#bbb', 'stroke-width': '1.5' }),
          h('circle', { cx: '9', cy: '8', r: '2.5', stroke: '#bbb', 'stroke-width': '1.5' }),
          h('path', { d: 'M1 17l7-7 5 5 4-4 10 8', stroke: '#bbb', 'stroke-width': '1.5', 'stroke-linejoin': 'round' }),
        ])
      ])
    ])
  }
})

const tags = [
  'Все рубрики', 'Бизнес', 'Технологии', 'Культура', 'Здоровье', 'Финансы',
  'Образование', 'Путешествия', 'Наука и исследования', 'Спорт',
  'Экология', 'Психология', 'Право', 'Медицина', 'Технологии будущего',
]

const activeTag = ref('Все рубрики')
const showAllTags = ref(false)

const featured = {
  category: 'Бизнес',
  title: 'Логотип компании.',
  excerpt: 'Брось вызов ИИ, чтобы обрести единомышленников',
  author: 'Александр Константинопольский',
  date: '31.01.23',
  fileUrl: '/files/article-featured.pdf',
}

const articlesRow1 = [
  {
    category: 'Технологии',
    title: '«Как это будет по-кошачьи?».',
    excerpt: 'Сможем ли мы благодаря нейросетям овладеть языками котов, китов и других животных',
    author: 'Евгений Котов',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-1.pdf',
  },
  {
    category: 'Финансы',
    title: 'Пьянство самцов снизило успешность ЭКО у мышей.',
    excerpt: 'Результаты исследования релевантны и для людей',
    author: 'Владимир Пружинов',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-2.pdf',
  },
]

const articlesRow2 = [
  {
    category: 'Бизнес',
    title: 'Логотип компании.',
    excerpt: 'Брось вызов ИИ, чтобы обрести единомышленников',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-3.pdf',
  },
  {
    category: 'Бизнес',
    title: '«Как это будет по-кошачьи?».',
    excerpt: 'Сможем ли мы благодаря нейросетям овладеть языками котов, китов и других животных',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-4.pdf',
  },
  {
    category: 'Бизнес',
    title: 'Пьянство самцов снизило успешность ЭКО у мышей.',
    excerpt: 'Результаты исследования релевантны и для людей',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-5.pdf',
  },
]

const articlesRow3 = [
  {
    category: 'Бизнес',
    title: 'Логотип компании.',
    excerpt: 'Брось вызов ИИ, чтобы обрести единомышленников',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-6.pdf',
  },
  {
    category: 'Бизнес',
    title: '«Как это будет по-кошачьи?».',
    excerpt: 'Сможем ли мы благодаря нейросетям овладеть языками котов, китов и других животных',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-7.pdf',
  },
  {
    category: 'Бизнес',
    title: 'Пьянство самцов снизило успешность ЭКО у мышей.',
    excerpt: 'Результаты исследования релевантны и для людей',
    author: 'Александр Константинопольский',
    date: '31.01.23',
    time: '10:32',
    fileUrl: '/files/article-8.pdf',
  },
]

const news = [
  { category: 'Здоровье', date: '31.01.23', time: '10:32', title: 'Доказано. Влияние вируса Эпштейна-Барр на развитие рассеянного склероза. Передача прерагнита', author: 'Александр Константинопольский' },
  { category: 'Бизнес',   date: '31.01.23', time: '10:32', title: 'Логотип компании. Брось вызов ИИ, чтобы обрести единомышленников', author: 'Евгений Котов' },
  { category: 'Здоровье', date: '31.01.23', time: '10:32', title: '«Как это будет по-кошачьи?». Сможем ли мы благодаря нейросетям овладеть языками котов, китов и других животных', author: 'Владимир Пружинов' },
  { category: 'Здоровье', date: '31.01.23', time: '10:32', title: 'Убийство в четырёх стенах: Убийство в четырёх стенах', author: 'Иван Орел' },
]

function downloadFile(article) {
  const link = document.createElement('a')
  link.href = article.fileUrl
  link.download = article.fileUrl.split('/').pop()
  link.click()
}
</script>
<template>
  <div class="page">
    <div class="container">

      <nav class="breadcrumb">
        <span>Главная</span>
        <span class="bc-sep">›</span>
        <span>Статьи</span>
      </nav>

      <h1 class="page-title">Статьи</h1>

      <div class="filters-wrap">
        <div class="filters" :class="{ 'filters--expanded': showAllTags }">
          <button
              v-for="tag in tags"
              :key="tag"
              class="tag-btn"
              :class="{ 'tag-btn--active': activeTag === tag }"
              @click="activeTag = tag"
          >{{ tag }}</button>
        </div>
        <button class="tag-btn tag-btn--more" @click="showAllTags = !showAllTags">
          {{ showAllTags ? 'Скрыть' : 'Смотреть все теги »' }}
        </button>
      </div>

      <div class="content-layout">

        <div class="articles-col">

          <div class="article-featured">
            <div class="article-featured__img">
              <span class="article-badge">{{ featured.category }}</span>
              <button class="dl-btn" @click="downloadFile(featured)" title="Скачать">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v9M5 7l3 3 3-3" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
              <ImgPlaceholder />
            </div>
            <div class="article-featured__body">
              <p class="article-text">
                <strong>{{ featured.title }}</strong> {{ featured.excerpt }}
              </p>
              <div class="article-meta">
                <span class="article-author">{{ featured.author }}</span>
                <span class="article-date">{{ featured.date }}</span>
              </div>
            </div>
          </div>

          <div class="articles-grid articles-grid--2">
            <div
                v-for="(a, i) in articlesRow1"
                :key="'r1-'+i"
                class="article-card"
            >
              <div class="article-card__img">
                <span class="article-badge">{{ a.category }}</span>
                <button class="dl-btn" @click="downloadFile(a)" title="Скачать">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M5 7l3 3 3-3" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
                <ImgPlaceholder />
              </div>
              <div class="article-card__body">
                <p class="article-text">
                  <strong>{{ a.title }}</strong> {{ a.excerpt }}
                </p>
                <div class="article-meta">
                  <span class="article-author">{{ a.author }}</span>
                  <span class="article-date">{{ a.date }}</span>
                  <span class="article-time">{{ a.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="articles-grid articles-grid--3">
            <div
                v-for="(a, i) in articlesRow2"
                :key="'r2-'+i"
                class="article-card"
            >
              <div class="article-card__img">
                <span class="article-badge">{{ a.category }}</span>
                <button class="dl-btn" @click="downloadFile(a)" title="Скачать">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M5 7l3 3 3-3" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
                <ImgPlaceholder />
              </div>
              <div class="article-card__body">
                <p class="article-text">
                  <strong>{{ a.title }}</strong> {{ a.excerpt }}
                </p>
                <div class="article-meta">
                  <span class="article-author">{{ a.author }}</span>
                  <span class="article-date">{{ a.date }}</span>
                  <span class="article-time">{{ a.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="articles-grid articles-grid--3">
            <div
                v-for="(a, i) in articlesRow3"
                :key="'r3-'+i"
                class="article-card"
            >
              <div class="article-card__img">
                <span class="article-badge">{{ a.category }}</span>
                <button class="dl-btn" @click="downloadFile(a)" title="Скачать">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M5 7l3 3 3-3" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
                <ImgPlaceholder />
              </div>
              <div class="article-card__body">
                <p class="article-text">
                  <strong>{{ a.title }}</strong> {{ a.excerpt }}
                </p>
                <div class="article-meta">
                  <span class="article-author">{{ a.author }}</span>
                  <span class="article-date">{{ a.date }}</span>
                  <span class="article-time">{{ a.time }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <aside class="news-sidebar">
          <div class="news-header">Новости</div>
          <div
              v-for="(n, i) in news"
              :key="i"
              class="news-item"
          >
            <div class="news-item__meta">
              <span class="news-tag">{{ n.category }}</span>
              <span class="news-date">{{ n.date }}</span>
              <span class="news-time">{{ n.time }}</span>
            </div>
            <p class="news-title">{{ n.title }}</p>
            <div class="news-author">{{ n.author }}</div>
          </div>
          <button class="btn-all-news">Все новости</button>
        </aside>

      </div>
    </div>
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.page {
  width: 100%;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  color: #111;
  padding: 24px 0 80px;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

:deep(.placeholder) {
  position: relative;
  width: 100%;
  height: 100%;
  background: #e2e2e2;
  overflow: hidden;
}
:deep(.placeholder__icon) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.8;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
}
.bc-sep { color: #bbb; }

.page-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.filters-wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 36px;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.filters--expanded {
  max-height: 200px;
}

.tag-btn {
  height: 32px;
  padding: 0 14px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  background: #fff;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.tag-btn:hover { background: #f0f0f0; }
.tag-btn--active {
  background: #111;
  color: #fff;
  border-color: #111;
}
.tag-btn--more {
  border-color: #bbb;
  color: #555;
  flex-shrink: 0;
}

.content-layout {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.articles-col {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-sidebar {
  width: 220px;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.article-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #111;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 2px;
  z-index: 2;
}

.dl-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: rgba(255,255,255,0.9);
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background 0.15s;
}
.dl-btn:hover { background: #fff; }

.article-featured {
  display: flex;
  gap: 0;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
}
.article-featured__img {
  position: relative;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
}
.article-featured__body {
  padding: 16px;
}

.article-text {
  font-size: 14px;
  line-height: 1.55;
  color: #111;
  margin-bottom: 10px;
}
.article-text strong {
  font-weight: 700;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #888;
}
.article-author { color: #555; }

.articles-grid {
  display: grid;
  gap: 16px;
}
.articles-grid--2 { grid-template-columns: 1fr 1fr; }
.articles-grid--3 { grid-template-columns: 1fr 1fr 1fr; }

.article-card {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.article-card__img {
  position: relative;
  width: 100%;
  height: 140px;
  flex-shrink: 0;
}
.article-card__body {
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.news-header {
  background: #111;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 14px;
}
.news-item {
  padding: 12px 14px;
  border-bottom: 1px solid #f0f0f0;
}
.news-item:last-of-type { border-bottom: none; }

.news-item__meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}
.news-tag {
  font-size: 11px;
  font-weight: 700;
  color: #333;
}
.news-date, .news-time {
  font-size: 11px;
  color: #aaa;
}
.news-title {
  font-size: 12px;
  line-height: 1.55;
  color: #222;
  margin-bottom: 6px;
}
.news-author {
  font-size: 11px;
  color: #888;
}

.btn-all-news {
  display: block;
  width: 100%;
  height: 40px;
  background: #fff;
  border: none;
  border-top: 1px solid #e0e0e0;
  font-size: 13px;
  color: #555;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-all-news:hover { background: #f5f5f5; }

/* ───── Tablet (≤1024px) ───── */
@media (max-width: 1024px) {
  .page {
    padding: 20px 0 60px;
  }
  .page-title {
    font-size: 30px;
  }
  .news-sidebar {
    width: 200px;
  }
  .articles-grid--3 {
    grid-template-columns: 1fr 1fr;
  }
}

/* ───── Mobile (≤768px) ───── */
@media (max-width: 768px) {
  .page {
    padding: 16px 0 40px;
  }
  .breadcrumb {
    font-size: 12px;
    flex-wrap: wrap;
  }
  .page-title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .filters-wrap {
    margin-bottom: 20px;
  }
  .filters {
    max-height: 80px;
  }
  .tag-btn {
    height: 30px;
    padding: 0 12px;
    font-size: 12px;
  }
  .content-layout {
    flex-direction: column;
    gap: 24px;
  }
  .articles-col {
    width: 100%;
    gap: 16px;
  }
  .news-sidebar {
    width: 100%;
  }
  .article-featured__img {
    height: 180px;
  }
  .articles-grid--2,
  .articles-grid--3 {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .article-card__img {
    height: 120px;
  }
  .article-text {
    font-size: 13px;
  }
}

/* ───── Small mobile (≤480px) ───── */
@media (max-width: 480px) {
  .page-title {
    font-size: 22px;
  }
  .articles-grid--2,
  .articles-grid--3 {
    grid-template-columns: 1fr;
  }
  .article-featured__img {
    height: 160px;
  }
  .article-card__img {
    height: 160px;
  }
  .article-meta {
    flex-wrap: wrap;
    gap: 6px;
  }
}
</style>