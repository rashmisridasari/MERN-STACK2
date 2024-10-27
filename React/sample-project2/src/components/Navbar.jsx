import React,{ useEffect, useState} from 'react'

const Navbar = ({appdata,logo}) => {
    const [numberstate, setNumberstate]= useState(0)
    const [stringstate, setStringstate]= useState("name")
    const [arraystate, setArraystate]= useState([
        "Hey",false,0
    ])
    // console.log(numberstate)
    // console.log(stringstate)
    // console.log(arraystate)

    const [count,setCount] = useState(0);
    useEffect( () => {
      //alert('effect rendered')
      console.log("Count is " +count)
    },[count])
  return (
    <>
      { /*{appdata.appname} {logo}*/ }
      <button button className='w-[6rem] h-[4rem] bg-blue-500 text-white'
      onClick= { () => { setCount(count+1)}} >
        Count {count}
    </button>
    </>
  )
}

export default Navbar 