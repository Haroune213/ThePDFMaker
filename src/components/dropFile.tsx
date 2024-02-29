import "./../App.css"
import drop_icon from "../assets/drop.png"
import pdf_icon from "../assets/pdf.png"
import { useState,useRef } from "react"





export default function DropFile(){
    const[files, setFiles]=   useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [imgElements, setImgElements] = useState<(JSX.Element | null)[]>([]);



    function handleFileType(file: File): number {
        const fileType = file.type;
        switch(fileType){
            case 'application/pdf':
                return 0;
            case 'image/png':
                return 1;
            case 'image/jpeg':
                return 1;
            default:
                return -1;
        }
    }


    const handleDragOver=(event:any)=>{ 
        event.preventDefault()
    }

    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()

        if (event.dataTransfer.files) {
            const newImgElements: (JSX.Element | null)[] = [];
            Array.from(event.dataTransfer.files).forEach((file, index) => {
                const fileType = handleFileType(file);
                switch (fileType) {
                    case 0:
                        newImgElements.push(
                            <img src={pdf_icon} draggable="true"  className="rounded-lg h-[180px] w-[150px]"/>
                            )
                        setImgElements([...newImgElements]);
                        break;
                    case 1:
                        const reader = new FileReader();
                        reader.onload = () => {
                            const imgData = reader.result as string;
                            newImgElements.push(<img key={index} src={imgData} draggable="true" className="rounded-lg h-[180px] w-[150px]"/>);
                            setImgElements([...newImgElements]);
                        };
                        reader.readAsDataURL(file);
                        break;
                        break;
                }
            });
            setFiles(Array.from(event.dataTransfer.files));
        }
    };
        
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = event.target.files;
            setFiles(Array.from(selectedFiles));
            const newImgElements: (JSX.Element | null)[] = [];
            Array.from(selectedFiles).forEach((file, index) => {
                const fileType = handleFileType(file);
                switch (fileType) {
                    case 0:
                        newImgElements.push(
                            <img src={pdf_icon} draggable="true"  className="rounded-lg h-[180px] w-[150px]"/>
                            )
                        setImgElements([...newImgElements]);
                        break;
                    case 1:
                        const reader = new FileReader();
                        reader.onload = () => {
                            const imgData = reader.result as string;
                            newImgElements.push(<img key={index} src={imgData} draggable="true" className="rounded-lg h-[180px] w-[150px]"/>);
                            setImgElements([...newImgElements]);
                        };
                        reader.readAsDataURL(file);
                        break;
                    default:
                        break;
                }
            });
        }
    }
    
    const removeElement = (elem_id:number) => {
        setImgElements(imgElements => imgElements.filter((_, index) => index !== elem_id));


        setFiles((oldValues:any )=> {
          return oldValues.filter((_:any, i:number) => i !== elem_id)
        })

      }


    return (
        <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="m-5 text-white w-[60vw] h-[400px] bg-black bg-opacity-[40%] rounded-xl border-slate-100 border-dashed border-2 hover:border-slate-500 border-spacing-1 transition-all shadow-xl shadow-slate-1000 flex items-center justify-center flex-col "
        >
            {files.length>0 ? (
                <div className="w-full h-full p-5 bg-[rgba(0,0,0,0.1)] transition-all">
                    <ul className="w-full h-full p-5 grid grid-cols-4 gap-8 no-scrollbar overflow-scroll overflow-x-hidden">
                        {Array.from(files).map((file: any, id: number) => {
                            return (
                                
                                <li key={id} className="relative flex flex-col items-center justify-center h-fit">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center absolute -top-3 -left-2 shadow-slate-900 shadow-md">{id}</div>
                                    <button className="p-3 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center absolute top-1 right-2" onClick={()=>{ removeElement(id) }}>X</button> 
                                    {imgElements[id]} {/* Render the corresponding imgElement */}
                                    {file.name.length > 14 ? file.name.slice(0, 14) + "..." : file.name}
                                </li>
                                
                            );
                        })}
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
                        onChange={handleFileInputChange}
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