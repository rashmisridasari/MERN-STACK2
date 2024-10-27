import React from 'react'

const Navbar = () => {

        const Linksdata = [
            {
                title : 'Home',
                path: '/'
            },
            {
                title: 'Products',
                path: '/'
            },
            {
                title: 'Contact',
                path: '/'
            }
        ]

  return (
    <>
        <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
            <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                My Store
            </div>
            < div className='w-[40%] h-full flex justify-end items-center'>
                {/* <ul className='w-full flex flex-row justify-end  items-center gap-8'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>  */}
            <div className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>


            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar