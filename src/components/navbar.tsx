

export default function Navbar(){
    return(
        <div className="w-[100vw] h-[56px] flex justify-center">
            <div className="w-[60%] h-full text-slate-100 flex justify-between py-2 font-medium"> 
            <span>ThePDFMaker</span>
                <ul className="flex gap-4">
                    <li className="cursor-pointer">
                        Home
                    </li>
                    <li className="text-slate-300">
                        Merge pdf
                    </li>
                </ul>
            
            </div>
        </div>
    )
}