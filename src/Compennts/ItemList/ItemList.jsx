import React from 'react'

const ItemList = ({ item }) => {
    return (
        <li className='py-4 px-4'>
            {JSON.stringify(item)}
        </li>
    )
}

export default ItemList