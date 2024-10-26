// function App() {
//     return (
//         <div>
//             Hello World
//         </div>
//     )
// }

// // export default App;

// const App2 = () => {
// return (
//     <div>
//         Hello World
//     </div>
// )
// }
// // export default App2;

// export { App, App2 }

// import Navbar from "./components/Navbar"
// const App = () => {
//     const data = {
//         appname: "Hello"
//     }
//     const logodata= "mylogo"
//     const test = "hello world"
//     return (
//     <> 
//         {test}
//      <Navbar appdata={data} logo={logodata} />       
//     </>
//    )
// }

// export default App

import Navbar from "./components/Navbar"
const App = () => {
    const data = {
        appname: "Hello"
    }
    const logodata= "mylogo"
    const test = "hello world"
    return (
    <> 
    <p className="text-blue-400">{test}</p>
     <Navbar appdata={data} logo={logodata} />       
    </>
   )
}

export default App

