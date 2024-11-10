import React from 'react'

const AdminPageHeader = ({title}) => {
  return (
    <div className='h-full w-full flex flex-col justify-start p-6 font-bold text-2xl text-purple-500'>
      {title}
    </div>
  )
}

export default AdminPageHeader