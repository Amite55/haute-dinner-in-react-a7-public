import AllRecipes from './AllRecipes'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import OurRecipe from './Components/OurRecipe'
import Sidebar from './Components/Sidebar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className='flex gap-6'>
      <AllRecipes></AllRecipes>

      <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
