import React from 'react'

function ProductCard(props)
 {
    var id=props.id

    var title=props.title

    var image=props.image

    var dis=props.discount


  return (
    <div>
      <h1>id:{id}</h1>
      <h3>title:{title}</h3>
      {/* <img src={image} width={300} height={300}/> */}

      <h6>discount:{dis}</h6>
    </div>
  )
}

export default ProductCard
