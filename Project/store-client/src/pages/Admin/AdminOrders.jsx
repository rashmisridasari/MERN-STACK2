import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react'
import { getOrders } from '../../api/api'

const AdminOrders = () => {
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await getOrders()
      if (res.status === 200) {
        setOrders(res.data)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
          {/* animate-spin is used to spi the loader icon from lucide react */}
        </div>
      </>
    )
  }
  if (!orders || orders.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Orders Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Orders' />
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>User ID</th>
            <th className='p-6'>Product ID</th>
            <th className='p-6'>Phone</th>
            <th className='p-6'>Total</th>
            <th className='p-6'>Address</th>
            <th className='p-6'>Orderd At</th>
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            orders.map((product, index) => (
              <tr key={index}>
                <td className='p-4'>{order.uid} </td>
                <td className='p-4'>{order.pid}</td>
                <td className='p-4'>{order.phone}</td>
                <td className='p-4'>{order.total}</td>
                <td className='p-4'>{order.address}</td>
                <td className='p-4'>{order.orderedAt}</td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrders