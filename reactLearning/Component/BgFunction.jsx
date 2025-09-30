import { useState } from "react"

function BgFunction() {

    const [bgcolor, setBg] = useState("bg-gray-600");

    function changeBg(color) {
        setBg(color);
    }
    return (
        <div className={` ${bgcolor == "" ? "bg-gray-500" : bgcolor} m-auto h-screen flex justify-center w-full`}>
            <div className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white p-1 rounded-full flex items-center justify-center w-30 h-15 shadow-lg">
                <button onClick={() => changeBg("bg-gray-600")}> change gray</button>
            </div>
            <div className="cursor-pointer bg-red-600 hover:bg-red-700 text-white p-1 rounded-full flex items-center justify-center w-30 h-15 shadow-lg">
                <div onClick={() => changeBg("bg-red-600")}>Change Red</div>
            </div>
            <div className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full flex items-center justify-center w-30 h-15 shadow-lg">
                <div onClick={() => changeBg("bg-blue-600")}>Change Blue</div>
            </div>
        </div>
    )
}

export default BgFunction;