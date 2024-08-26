import React from 'react'

const Cell = ({cellData}) => {
  return (
    <td className='border mt-4 px-6'>
        {cellData}
    </td>
  )
}

export default Cell