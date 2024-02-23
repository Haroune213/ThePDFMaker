import "./../App.css"
import drop_icon from "../assets/drop.png"

export default function DropFile(){

    return(
        <div className="m-5  text-white w-[60vw] h-[400px] bg-black bg-opacity-[40%] rounded-xl border-slate-100 border-dashed border-2  hover:border-slate-500 border-spacing-1 transition-all shadow-xl shadow-slate-1000 flex items-center justify-center flex-col">
            <img src={drop_icon} className="w-[200px] p-0" draggable="false"/>
            <h2 className="text-5xl font-bold">Drop your files here</h2>
            <span className="text-gray-300 font-medium">upload only PDF files</span>
            <button className="px-8 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition-all mt-5">Upload Image</button>
        </div>
    )
} 