import React from 'react'
import Row from '../Row/Row'

const Table = ({items}) => {
  return (
    <table className='mt-8'>
    <tbody>
        {items.map(item =>(
            <Row key={item.id} item={item}/>
        ))}
    </tbody>
   </table>
  )
}

export default Table