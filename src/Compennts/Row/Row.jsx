import React from 'react'
import Cell from '../Cell/Cell'

const Row = ({item}) => {
    return (
        <tr className="border-2">
            {Object.entries(item).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
}

export default Row