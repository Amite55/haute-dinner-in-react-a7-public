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
  const [preparingAdd, setPreparing] = useState([]);
  
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

  const handleParingBtn = (items) => {
   const newPrepairing = recipeSidebar.filter(item =>  item.id !== items.id)
    setRecipeSidebar(newPrepairing)
    // preparing adding
    const newAddingperparing = [...preparingAdd, items];
    setPreparing(newAddingperparing)
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className='flex gap-6'>

      <AllRecipes handleCookBtn={handleCookBtn}></AllRecipes>

      <Sidebar 
      recipeSidebar={recipeSidebar}
      preparingAdd={preparingAdd}
      handleParingBtn={handleParingBtn}
      ></Sidebar>
      <ToastContainer />
      </div>
    </>
  )
}

export default App
