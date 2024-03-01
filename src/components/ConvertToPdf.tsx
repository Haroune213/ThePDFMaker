import "./../App.css"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const ConvertToPdf = ({ onChange, content }: { onChange: any, content: JSX.Element }) => {
    const cancelPDF = () => {
        onChange(true);
    };




    return(
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-10  transition-all flex items-center justify-center">
            <div className="w-[350px] h-[300px] bg-black border-[0.5px] border-slate-300 rounded-xl text-white p-6"> 
            <h1 className="text-xl font-bold">Save as PDF</h1>
            <h1 className="text-md font-medium text-gray-400 mb-5">Merge x elements into a single file </h1>
            <label htmlFor="title">Give your PDF a name</label>
            <br />
            <input type="text" name="title" placeholder="mypdf.pdf"  className="rounded-lg bg-transparent my-2 border border-white outline-none p-2" />

            <div className="w-full flex items-center justify-start gap-x-6 mt-8">
            <button className=" text-md flex justify-center items-center rounded-md border border-white px-8 py-2 hover:bg-gray-600 hover:border-gray-600 transition-all" onClick={cancelPDF}>Cancel</button>
            <button className=" text-md flex justify-center items-center rounded-md border border-blue-800 bg-blue-800 px-8 py-2 hover:bg-blue-700 transition-all">Download</button>

            </div>

            </div>
        </div>
    )
}

export default ConvertToPdf