import { getProductCategoryBySlug } from '@/services/fetchData'
import React from 'react'

export default async function page({ params }: { params: { categoria: string } }) {

  try{
    const categoryData = await getProductCategoryBySlug(params.categoria as any)

    console.log('info cat',categoryData)

  }catch (error){
    console.error('este es un error',error)
  }
  return (
    <section>

      <h1>Categorias :D especial</h1>

      test
    </section>
  )
}
