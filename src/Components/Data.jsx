import React from 'react'
import { TodoITem } from '../Components/TodoITem'
export const Data = ({todos}) => {
  return (
    <div>
      Data
    <TodoITem todo={todos.Data[0]}/>
    </div>
  )
}
