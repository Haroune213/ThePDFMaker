import './App.css'
import DropFile from './components/dropFile'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] flex items-center flex-col'>
    <Navbar />  
    <h1 className='text-7xl text-slate-100 font-bold pt-3 text-center header-leading'>
    THE PDF<span className='block bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500  text-transparent bg-clip-text'>Maker</span>
    </h1>
    <DropFile />
    </div>
  )
}

export default App
