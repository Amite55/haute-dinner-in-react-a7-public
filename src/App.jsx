import { useState } from 'react'
import AllRecipes from './AllRecipes'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import OurRecipe from './Components/OurRecipe'
import Sidebar from './Components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipeSidebar, setRecipeSidebar] = useState([]);
  
  const handleCookBtn = (recipe) =>{
    const isExist = recipeSidebar.find(item => item.id == recipe.id);
    if(!isExist){
      const newSidebarRecipe = [...recipeSidebar, recipe];
      setRecipeSidebar(newSidebarRecipe)
    }
    else{
      toast.error('This Cook All ready Existed')
    }

  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className='flex gap-6'>

      <AllRecipes handleCookBtn={handleCookBtn}></AllRecipes>

      <Sidebar recipeSidebar={recipeSidebar}></Sidebar>
      <ToastContainer />
      </div>
    </>
  )
}

export default App
