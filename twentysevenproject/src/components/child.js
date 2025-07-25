/*
import Grandchild from './grandchild'
function Child(props)
{
     console.log(props)

  return (
    <div>
      <h2>i am child component</h2>
      <Grandchild data={props.data}/>
    </div>
  )
}

export default Child

*/


import Grandchild from './grandchild'
function child() {
  return (
    <div>
      <h2>i am child component</h2>
      <Grandchild/>
    </div>
  )
}

export default child

