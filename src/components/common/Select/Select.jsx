import React from 'react'

const Select = ({option,disable,selected,setSelectedValue,optionToShow}) => {
  return (
    <select style={{width:"100%" ,height:"1.90rem"}} onChange={(e)=>setSelectedValue(e.target.value)} value={optionToShow}>
   {option.map((data)=>{
        return(
            <option value={data?.id}>
           {data?.name}
            </option>
        )
    })}
    </select>
  )
}

export default Select