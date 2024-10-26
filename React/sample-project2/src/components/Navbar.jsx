import React,{useState} from 'react'

const Navbar = ({appdata,logo}) => {
    const [numberstate, setNumberstate]= useState(0)
    const [stringstate, setStringstate]= useState("rashmi model")
    const [arraystate, setArraystate]= useState([
        "Hey",false,0
    ])
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
  return (
    <>
      {appdata.appname} {logo}
    </>
  )
}

export default Navbar