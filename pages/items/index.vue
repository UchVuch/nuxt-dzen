<script setup>
useSeoMeta({
  title: 'Dzen-агрегатор Липецк',
  ogTitle: 'Dzen-агрегатор Липецк',
  description: 'Dzen-агрегатор Липецк. Ищи и покупай товары в Липецке по выгодным ценам и в удобных вам местах. Лучшее место для поиска нужных товаров',
  ogDescription: 'Dzen-агрегатор Липецк. Ищи и покупай товары в Липецке по выгодным ценам и в удобных вам местах. Лучшее место для поиска нужных товаров'
})
const {data} = useFetch('https://jsonplaceholder.typicode.com/users')
console.log('dasfds')
const items = ref([])
function fetchData () {
  setTimeout(() => {
    items.value = [
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
  <div>
    <h1>Страница товаров</h1>
    <div class="grid grid-cols-1 gap-4">
      <ULink
        v-for="item in data"
        :key="item.id"
        :to="`/items/${item.id}`"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        <UCard>
          <template #header>
            
              <h2>
                {{ item.name }}
              </h2>
            
          </template>

          
            <p>{{ item.email }}</p>
          
          <template #footer>
            
              <p>
                {{ item.phone }}
              </p>
            
          </template>
        </UCard>
      </ULink>
      <ULink
        v-for="item in items"
        :key="item.id"
        :to="`/${item.id}`"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        <UCard>
          <template #header>
            
              <h2>
                {{ item.name }}
              </h2>
            
          </template>

        
            <img :src="item.image" alt="item image" title="item.name" class="w-40 h-40 object-cover rounded">
          

          <template #footer>
            
              <p>
                {{ item.description }}
              </p>
          
          </template>
        </UCard>
      </ULink>
    </div>
  </div>
</template>
