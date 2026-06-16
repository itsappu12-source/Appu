import React from 'react'


const TableData = () => {
  return (
    <div className='px-6'>
      <table className='w-full mt-6 '>
        <thead>
            <tr className='bg-gray-800 text-white border'>
                <th className='p-3 border'>Name</th>
                <th className='p-3 border'>Place</th>
                <th className='p-3 border'>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border hover:bg-yellow-100'>
                <td className='p-3 border'>Bella</td>
                <td className='p-3 border'>EKM</td>
                <td className='p-3 border'>12</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}


export default TableData



