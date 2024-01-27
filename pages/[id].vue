<script setup>
const route = useRoute()
const product = ref({
  name: '',
  firm: '',
  group: '',
  description: '',
  image: ''
})
const {data} = useFetch('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid', {
  pick: ['data']
})
useSeoMeta({
  title: `Купить аниме фигурку DarkTimes Samurai | Dzen-агрегатор`,
  ogTitle: `Купить аниме фигурку DarkTimes Samurai | Dzen-агрегатор`,
  description: `Купить аниме фигурку DarkTimes Samurai - купить в Липецке по выгодным ценам на Dzen-агрегатор Липецк! &#10004; Скидки. &#10004; Реальные отзывы покупателей. &#10004; Быстрая доставка по РФ. &#10004; Dzen-агрегатор Липецк – найди лучшие товары для покупок!`,
  ogDescription: `Купить аниме фигурку DarkTimes Samurai - купить в Липецке по выгодным ценам на Dzen-агрегатор Липецк! &#10004; Скидки. &#10004; Реальные отзывы покупателей. &#10004; Быстрая доставка по РФ. &#10004; Dzen-агрегатор Липецк – найди лучшие товары для покупок!`
})
// function fetchData () {
//   setTimeout(() => {
//     data.value = [
//       {
//         id: 61166,
//         name: 'DS-H104G 4-х канальный гибридный HD-TVI регистратор',
//         firm: 'HiWatch',
//         group: 'ВИДЕОРЕГИСТРАТОРЫ HD-TVI',
//         description: 'DS-H104G HD-TVI регистратор; гибридный; 4-х канальный; AHD; TVI; CVI: 1080p Lite/ 720p@25к/с; 1 SATA; 1 IP-канал; 12В DC;  8Вт; HiWatch 300217353',
//         image: 'https://crdx.ru/upload/goods/061/166/big/DS-H104G.jpg'
//       },
//       {
//         id: 64452,
//         name: 'Сетевой неуправляемый коммутатор',
//         firm: 'HiWatch',
//         group: 'HiWatch  DS-S604P Сетевой неуправляемый коммутатор 301802013',
//         description: 'HiWatch  DS-S604P Сетевой неуправляемый коммутатор 301802013',
//         image: ''
//       },
//       {
//         id: 64454,
//         name: 'Комплект аналогового видеодомофона  ',
//         firm: 'HiWatch',
//         group: 'ДОМОФОНЫ',
//         description: 'HiWatch "DS-D100KF Комплект аналогового видеодомофона  c памятью до 200 снимков" 305303182',
//         image: 'https://crdx.ru/upload/goods/061/166/big/DS-H104G.jpg'
//       }
//     ]
//     console.log(data.value)
//     const currentProduct = data.value.find(item => item.id === Number(route.params.id))
//     product.value = currentProduct
//     useSeoMeta({
//       title: `${product.value.name} | Dzen`,
//       ogTitle: `${product.value.name} | Dzen`,
//       description: `
//         ${product.value.description}. ${product.value.group}. ${product.value.firm}. Липецк. ${product.value.description}. ${product.value.group}. ${product.value.firm} в Липецке.
//       `,
//       ogDescription: `
//         ${product.value.description}. ${product.value.group}. ${product.value.firm}. Липецк. ${product.value.description}. ${product.value.group}. ${product.value.firm} в Липецке.
//       `,
//       ogImage: product.value.image,
//       twitterCard: 'product'
//     })
//   }, 1000)
// }
// fetchData()
</script>
<template>
  <div>
    <UCard>
      <template #header>
        <Placeholder class="h-8">
          <h2>
            {{ data.data[0].name }}
          </h2>
        </Placeholder>
      </template>

      <Placeholder class="h-32">
        <img :src="data.data[0].image" alt="item image" title="item.name" class="w-40 h-40 object-cover rounded">
      </Placeholder>

      <template #footer>
        <Placeholder class="h-8">
          <p>
            {{ data.data[0].description }}
          </p>
        </Placeholder>
      </template>
    </UCard>
  </div>
</template>
