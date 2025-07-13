
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/dashboard/export"
import { Home, FeeCollection, ManageClass, NotFound, Routine, Salary, Settings, Staffs, Students, Transportation  } from "./components/pages/export";


function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>} />
          <Route path="manageClasses" element={<ManageClass/>} />
          <Route path="staffs" element={<Staffs/>} />
          <Route path="students" element={<Students/>} />
          <Route path="feeCollection" element={<FeeCollection/>} />
          <Route path="salary" element={<Salary/>} />
          <Route path="transportation" element={<Transportation/>} />
          <Route path="routine" element={<Routine/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      )

  )



  return (
    <>
      <RouterProvider router = {router} >
        <Dashboard/>  
      </RouterProvider>
    </>
  )
}

export default App
