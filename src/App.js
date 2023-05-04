import { createBrowserRouter, Outlet } from "react-router-dom";

const ChildAppSetup = ({name="sourav", age="23"})=>{
  return(
    <>
      it is child component {name} {age}
    
    </>
  )
}



const AppSetup=()=>{
  return(
    <>
    just checking  <br />

    <ChildAppSetup/>
    </>
  )
}
export default AppSetup



//   const AppLayout = ()=>{
//     return(
//       <>
//       <header>
//       this is header section
//       </header>

//       <Outlet />

//       <footer>
//         This is footer section
//       </footer>

//       </>

      
//     )
//   }

//    const router = createBrowserRouter([
//     {
//     path : "/",
//     element : <AppLayout/>,
//     errorElement : <>error page</>,
//     children : [
//       {
//         path : "/about",
//         element : <>about page
//         <Outlet />
//         </>,
//         children : [
//           {
            
//               path : "about1",
//               element : <>about1 page</>,
            
//           }
//         ]
//       },
//       {
//         path : "/contact",
//         element : <>contact page</>,
//       },
//       {
//         path : "/servises",
//         element : <>serivice page</>,
//       }
//     ]
//     }
//    ])
  

// export default router;