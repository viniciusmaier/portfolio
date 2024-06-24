import { Icons } from "../../public/icons/Icons";
export default function HeaderPage(){
    return(
      <header className= "w-screen h-12 bg-black bg-opacity-85">
        <div className="flex justify-center items-center h-full"> 
          <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
            <div className="text-blue-500 font-semibold flex flex-row gap-2">
              <i className="text-blue-500"><Icons.computer/></i>
              <h3>V-M</h3>
            </div>

            <div className="text-blue-500">
              <a href="#" className="mr-4 p-3.5 hover:bg-lime-900 transition duration-700">projects</a> 
              <a href="#" className="mr-4 p-2">contacts</a> 
              <a href="#" className="mr-4 p-2">about</a>
            </div>
          </div>
        </div>
      </header>
    );
}