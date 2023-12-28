import { getProductCategories } from '@/services/fetchData'
import React from 'react'

export default async function page() {
  const categories = await getProductCategories()
  console.log(categories)

  return (
    <section>

      <h1>Soy la categoria</h1>
    </section>
  )
}
