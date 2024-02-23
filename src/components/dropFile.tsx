import "./../App.css"
import drop_icon from "../assets/drop.png"
import { useState,useRef } from "react"



export default function DropFile(){
    const[files, setFiles]=  useState<any | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver=(event:any)=>{
        event.preventDefault()
    }

    const handleDrop=(event:any)=>{
        event.preventDefault()
        console.log(event.dataTransfer.files)
        setFiles(event.dataTransfer.files)
        alert(files)
    }


    return (
        <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="m-5 text-white w-[60vw] h-[400px] bg-black bg-opacity-[40%] rounded-xl border-slate-100 border-dashed border-2 hover:border-slate-500 border-spacing-1 transition-all shadow-xl shadow-slate-1000 flex items-center justify-center flex-col"
        >
            {files ? (
                <div>
                    <ul>
                        {Array.from(files).map((file: any, id: number) => (
                            <li key={id}>
                                {file.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <>
                    <img src={drop_icon} className="w-[200px] p-0" draggable="false"/>
                    <h2 className="text-5xl font-bold">Drop your files here</h2>
                    <span className="text-gray-300 font-medium">Upload only PDF files</span>
                    <input 
                        type="file"
                        multiple 
                        onChange={(event) => setFiles(event.target.files)}
                        hidden
                        ref={inputRef}
                    />
                    <button 
                        className="px-8 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition-all mt-5"
                        onClick={() => inputRef.current?.click()}
                    >
                        Upload Image
                    </button>
                </>
            )}
        </div>
    );

} 