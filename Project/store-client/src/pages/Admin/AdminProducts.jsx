import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'

const AdminProducts = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title= 'Products'/>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>Title</th>
            <th className='p-6'>Price</th>
            <th className='p-6'>Actions</th>
          </tr>

        </thead>
        <tbody>
          <td className='p-4'>Product1</td>
          <td className='p-4'>100</td>
          <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4
          '>
            Edit
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default AdminProducts