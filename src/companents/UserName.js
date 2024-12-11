import React from 'react'

export const UserName = (props) => {
  const result = "hello I'm Ainur"
  console.log(props);
  props.onSave(result)

  return (
    <div>
        <h1>{props.render}</h1>
        <h2>{props.age}</h2>
        <h2>{props.onSave}</h2>
      
    </div>
  )
}
