import notFoundImage from '@/assets/Image-not-found.png'
export const setDataImage=(obj:any)=>{
  if(obj===null || obj=== undefined){return { name:"", url: notFoundImage, alternativeText: "image" }}
  const newProduct = {
    id:obj.id,
    name:obj.attributes.name,
    alternativeText:obj.attributes.alternativeText,
    url:obj.attributes.url,

  }
  return newProduct
}


export const setDataTag=(arr:any)=>{
  if(arr===null || arr=== undefined){return undefined}
  const newArr = arr.map((obj:any)=>{
    const newTag = {
      id:obj.id,
      title:obj.attributes.title,
      slug:obj.attributes.slug,


    }
    return newTag

  })
  return newArr[0]
}

export const setDataProduct=(obj:any)=>{
  const newProduct = {
    ...obj.attributes,
    id:obj.id,
    image_1:setDataImage(obj.attributes.image_1?.data),
    image_2:setDataImage(obj.attributes.image_2?.data),
    // product_tags:obj.attributes.product_tags
    product_categories:setDataTag(obj.attributes.product_categories?.data)

  }
  return newProduct
}


export const setDataCategory=(obj:any)=>{
  const newObj = {
    id:obj.id,
    title:obj.attributes.title,
    slug:obj.attributes.slug,
    description:obj.attributes.description,
    cover:setDataImage(obj.attributes.cover.data),
    products:obj.attributes.products.data.map((element:any)=>setDataProduct(element)),
  }
  return newObj
}
