<script setup>
import { reactive } from 'vue'

const expanded = reactive({})

const categories = [
  {
    title: 'Гигиена рук',
    count: 2108,
    tags: ['Антисептика рук', 'Жидкое мыло', 'Крем для рук', 'Салфетки для рук'],
    allTags: ['Антисептика рук', 'Жидкое мыло', 'Крем для рук', 'Салфетки для рук']
  },
  {
    title: 'Дезинфекция поверхностей',
    count: 2108,
    tags: ['Концентраты', 'Готовые средства', 'Аэрозольная дезинфекция', 'Влажные салфетки', 'Сухие салфетки', 'Салфетки для инъекций'],
    allTags: ['Концентраты', 'Готовые средства', 'Аэрозольная дезинфекция', 'Влажные салфетки', 'Сухие салфетки', 'Салфетки для инъекций']
  },
  {
    title: 'Обработка инструментов',
    count: 2108,
    tags: ['Ручная обработка', 'Автоматическая обработка', 'Обработка эндоскопов'],
    allTags: ['Ручная обработка', 'Автоматическая обработка', 'Обработка эндоскопов']
  },
  {
    title: 'Дезинфекция для стоматологии и диализа',
    count: 2108,
    tags: ['Обработка', 'Средства специального'],
    allTags: ['Обработка', 'Средства специального']
  },
  {
    title: 'Дезинфекция для чистых помещений',
    count: 2108,
    tags: ['Автоматические', 'Ручные домовые', 'Диспенсеры', 'Стойки для антисептиков', 'Стойки для мыла', 'Полки', 'Распылители', 'Держатели'],
    allTags: ['Автоматические', 'Ручные домовые', 'Диспенсеры', 'Стойки для антисептиков', 'Стойки для мыла', 'Полки', 'Распылители', 'Держатели']
  },
  {
    title: 'Автоматические мойки эндоскопов',
    count: 2108,
    tags: ['Мойки для гибких', 'Мойки для нестких'],
    allTags: ['Мойки для гибких', 'Мойки для нестких']
  },
  {
    title: 'Автоматические моечно-дезинфекционные машины',
    count: 2108,
    tags: ['Моечно-дезинфицирующие', 'Судновоочистные машины', 'Установки для обеззараживания поверхностей'],
    allTags: ['Моечно-дезинфицирующие', 'Судновоочистные машины', 'Установки для обеззараживания поверхностей']
  },
  {
    title: 'Шкафы для хранения',
    count: 2108,
    tags: ['Для эндоскопов', 'Для инструментов', 'Для белья'],
    allTags: ['Для эндоскопов', 'Для инструментов', 'Для белья']
  },
  {
    title: 'Система ультрамягкого хирургического льда',
    count: 2108,
    tags: [],
    allTags: []
  },
  {
    title: 'Уборочный инвентарь',
    count: 2108,
    tags: ['Здравоохранение', 'Чистые помещения', 'Гигиена пищевых'],
    allTags: ['Здравоохранение', 'Чистые помещения', 'Гигиена пищевых']
  },
  {
    title: 'Тест-полоски программа контроля качества',
    count: 621,
    tags: ['Контроль гигиены рук', 'Контроль уборки в операционных', 'Контроль уборки в палатах', 'Контроль процессов'],
    allTags: ['Контроль гигиены рук', 'Контроль уборки в операционных', 'Контроль уборки в палатах', 'Контроль процессов']
  },
  {
    title: 'Защитные чехлы и покрытия',
    count: 2108,
    tags: ['Покрытия для микроскопов', 'Покрытия для ручек', 'Покрытия для кабеля', 'Покрытия для рентгеновского оборудования'],
    extraTags: true,
    allTags: [
      'Покрытия для микроскопов', 'Покрытия для ручек', 'Покрытия для кабеля',
      'Покрытия для рентгеновского оборудования', 'Покрытия "Мешок с резинкой"',
      'Покрытия для эндоскопической камеры', 'Чехол для запечатывания эндоскопа',
      'Чехлы для УЗ-датчиков с адгезивным слоем', 'Чехлы для термодатчиков',
      'Чехлы для УЗ-датчиков', 'Покрытия для мониторов', 'Покрытия для клавиатур',
      'Покрытия для пультов д/у', 'Покрытия для педалей управления',
      'Покрытия для операционных столов и полов', 'Покрытия для рентген кассет'
    ]
  },
  {
    title: 'Средства для уборки',
    count: 2108,
    tags: ['Средства для мытья посуды', 'Средства для уборки на кухне'],
    extraTags: true,
    allTags: [
      'Средства для мытья посуды', 'Средства для уборки на кухне',
      'Средства для уборки туалетов и мытья ванных комнат'
    ]
  },
  {
    title: 'Средства для стирки',
    count: 2108,
    tags: ['Средства для основной стирки', 'Кондиционеры, ополаскиватели, нейтрализаторы'],
    extraTags: true,
    allTags: [
      'Средства для основной стирки', 'Кондиционеры, ополаскиватели, нейтрализаторы',
      'Пятновыводители, отбеливатели и усилители стирки'
    ]
  },
  {
    title: 'Средства для защиты',
    count: 2108,
    tags: ['Защита', 'Очистка', 'Регенерация'],
    allTags: ['Защита', 'Очистка', 'Регенерация']
  }
]
</script>

<template>
<section class="catalog-section">
  <div class="container">
    <div class="catalog-page">
      <nav class="breadcrumb">
        <router-link to="/" class="breadcrumb-link">Главная</router-link>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">Каталог</span>
      </nav>

      <h1 class="page-title">Каталог</h1>

      <div class="catalog-grid">
        <div
            v-for="(category, index) in categories"
            :key="index"
            class="category-card"
        >
          <div class="card-left">
            <div class="card-icon">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4C10.5 4 7 6.5 7 10.5C7 13 8.5 15 10.5 16.5V20H17.5V16.5C19.5 15 21 13 21 10.5C21 6.5 17.5 4 14 4Z" fill="#C8D8E8" stroke="#A0B8CC" stroke-width="1"/>
                <rect x="10" y="20" width="8" height="2" rx="1" fill="#A0B8CC"/>
                <rect x="11" y="22.5" width="6" height="1.5" rx="0.75" fill="#A0B8CC"/>
              </svg>
            </div>
          </div>

          <div class="card-body">
            <div class="card-header">
              <h2 class="card-title">{{ category.title }}</h2>
              <span class="card-count">{{ category.count }}</span>
            </div>
            <div class="card-tags">
              <template v-if="!category.extraTags || expanded[index]">
                <span v-for="(tag, ti) in category.allTags" :key="ti" class="card-tag">{{ tag }}</span>
              </template>
              <template v-else>
                <span v-for="(tag, ti) in category.tags" :key="ti" class="card-tag">{{ tag }}</span>
              </template>

              <a
                  v-if="category.extraTags && !expanded[index]"
                  href="#"
                  class="card-more"
                  @click.prevent="expanded[index] = true"
              >Посмотреть ещё</a>

              <a
                  v-if="category.extraTags && expanded[index]"
                  href="#"
                  class="card-more"
                  @click.prevent="expanded[index] = false"
              >Скрыть</a>
            </div>
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
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  list-style: none;

}
.container {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}
.catalog-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 32px 64px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  font-size: 13px;
}
.breadcrumb-link { color: #6b7a90; text-decoration: none; }
.breadcrumb-link:hover { color: #2563eb; }
.breadcrumb-sep { color: #b0bac8; font-size: 12px; }
.breadcrumb-current { color: #1a2233; font-weight: 500; }

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a2233;
  letter-spacing: -0.5px;
  margin-bottom: 28px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: start;
}

.category-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #ffffff;
  border: 1px solid #e8edf2;
  border-radius: 14px;
  padding: 20px 24px;
  min-height: 100px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: box-shadow 0.18s ease, border-color 0.18s ease;
}
.category-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border-color: #c8d8e8;
}

.card-left { flex-shrink: 0; padding-top: 2px; }

.card-icon {
  width: 56px;
  height: 56px;
  background: #f0f4f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #1a2233;
  letter-spacing: -0.1px;
  line-height: 1.3;
}

.card-count {
  display: inline-flex;
  align-items: center;
  padding: 1px 8px;
  background: #f0f4f8;
  border: 1px solid #dce4ed;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 500;
  color: #6b7a90;
  white-space: nowrap;
  flex-shrink: 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  align-items: center;
}

.card-tag {
  font-size: 12.5px;
  color: #5b6b80;
  cursor: pointer;
  transition: color 0.15s ease;
}
.card-tag:hover { color: #2563eb; }

.card-more {
  font-size: 12.5px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;
  white-space: nowrap;
}
.card-more:hover { opacity: 0.7; }

@media (max-width: 768px) {
  .catalog-page {
    padding: 20px 0 48px;
  }
  .page-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .catalog-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .category-card {
    padding: 16px;
    gap: 14px;
  }
  .card-icon {
    width: 44px;
    height: 44px;
  }
  .card-icon svg {
    width: 22px;
    height: 22px;
  }
  .card-title {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .breadcrumb {
    font-size: 12px;
    flex-wrap: wrap;
  }
  .page-title {
    font-size: 22px;
  }
  .card-tag {
    font-size: 12px;
  }
}
</style>