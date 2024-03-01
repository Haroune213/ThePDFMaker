import './App.css'
import DropFile from './components/dropFile'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] flex items-center flex-col'>
    <h1 className='text-5xl text-slate-100 font-bold pt-3 text-center header-leading mb-5'>
    Images to <span className=' bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500  text-transparent bg-clip-text'>PDF</span> 
    </h1>


    <DropFile />
    </div>
  )
}

export default App
