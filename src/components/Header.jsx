import { Icons } from "../../public/icons/Icons";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function HeaderPage() {
  return (
    <header className="w-screen h-12 bg-[#050D0C] bg-opacity-90 fixed">
      <div className="flex justify-center items-center h-full outline outline-[#e02d8196] outline-offset-4">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
          <div className={`${roboto.className} text-[#F22786] flex flex-row gap-2`}>
            <i className="text-[#F22786]"><Icons.computer /></i>
            <span className="font-extrabold">V-M</span>
          </div>

          <div className="text-[#F22786] font-extrabold">
            <a href="#" className="mr-4 p-3.5 hover:bg-lime-900 transition duration-700">AboutMe</a>
            <a href="#" >Projects</a>
            <a href="#" className="mr-4 p-2">Contacts</a>
          </div>
        </div>
      </div>
    </header>
  );
}