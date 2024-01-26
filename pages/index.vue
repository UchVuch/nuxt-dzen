<script setup>
useSeoMeta({
  title: 'Dzen агрегатор Липецк',
  ogTitle: 'Dzen агрегатор Липецк',
  description: 'Dzen агрегатор Липецк. Камеры для наблюдения за территориeй. Камеры для домофонов. Регистраторы. Коммутаторы. Видеодомофоны. Камеры для наблюдения за территориeй Липецк. Камеры для домофонов Липецк. Регистраторы Липецк. Коммутаторы Липецк. Видеодомофоны Липецк. Найти товары в Липецке. Агрегатор Липецк. Найти товары агрегатор Липецк.',
  ogDescription: 'Dzen агрегатор Липецк. Камеры для наблюдения за территориeй. Камеры для домофонов. Регистраторы. Коммутаторы. Видеодомофоны. Камеры для наблюдения за территориeй Липецк. Камеры для домофонов Липецк. Регистраторы Липецк. Коммутаторы Липецк. Видеодомофоны Липецк. Найти товары в Липецке. Агрегатор Липецк. Найти товары агрегатор Липецк.'
})
const data = ref([])
function fetchData () {
  setTimeout(() => {
    data.value = [
      {
        id: 61166,
        name: 'DS-H104G 4-х канальный гибридный HD-TVI регистратор',
        firm: 'HiWatch',
        group: 'ВИДЕОРЕГИСТРАТОРЫ HD-TVI',
        description: 'DS-H104G HD-TVI регистратор; гибридный; 4-х канальный; AHD; TVI; CVI: 1080p Lite/ 720p@25к/с; 1 SATA; 1 IP-канал; 12В DC;  8Вт; HiWatch 300217353',
        image: 'https://crdx.ru/upload/goods/061/166/big/DS-H104G.jpg'
      },
      {
        id: 64452,
        name: 'Сетевой неуправляемый коммутатор',
        firm: 'HiWatch',
        group: 'HiWatch  DS-S604P Сетевой неуправляемый коммутатор 301802013',
        description: 'HiWatch  DS-S604P Сетевой неуправляемый коммутатор 301802013',
        image: ''
      },
      {
        id: 64454,
        name: 'Комплект аналогового видеодомофона  ',
        firm: 'HiWatch',
        group: 'ДОМОФОНЫ',
        description: 'HiWatch "DS-D100KF Комплект аналогового видеодомофона  c памятью до 200 снимков" 305303182',
        image: 'https://crdx.ru/upload/goods/061/166/big/DS-H104G.jpg'
      }
    ]
  }, 1000)
}

fetchData()
</script>
<template>
  <div class="grid grid-cols-1 gap-4">
    <ULink
      v-for="item in data"
      :key="item.id"
      :to="`/${item.id}`"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      <UCard>
        <template #header>
          <Placeholder class="h-8">
            <h2>
              {{ item.name }}
            </h2>
          </Placeholder>
        </template>

        <Placeholder class="h-32">
          <img :src="item.image" alt="item image" title="item.name" class="w-40 h-40 object-cover rounded">
        </Placeholder>

        <template #footer>
          <Placeholder class="h-8">
            <p>
              {{ item.description }}
            </p>
          </Placeholder>
        </template>
      </UCard>
    </ULink>
  </div>
</template>
