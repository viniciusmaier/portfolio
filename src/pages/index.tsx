import Header from "@/src/components/Header"
import AnimationString from "@/src/components/utils/animationStrings";
import { Roboto } from "next/font/google"
import Tools from "@/src/components/articles/Tools"
const fontRoboto = Roboto({
  subsets: ['latin'],
  weight: "900"
});

export default function Home() {
  return (
    <main>
      {/* layoutMain */}
      <div className="w-screen h-[55rem] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/imgs/backGround.gif)' }}>
        <div className="w-96 h-full flex justify-end flex-col text-center">
          <AnimationString />
          <img src="/imgs/perfil.png" className="w-full animate-personaMove my-10" alt="teste" />
        </div>

        {/*  About Me */}
        <div className="bg-gradient-to-b from-midnight-blue to-black w-full h-[30rem] flex justify-center text-white">
          <div className="flex flex-col w-[35rem] h-[15rem] text-center justify-evenly">
            <div className={`${fontRoboto.className} font-bold -rotate-2 text-letterRgb text-center`}>
              <span className="transition animate-rgbLetterAboutA">A</span>
              <span className="transition animate-rgbLetterAboutB">b</span>
              <span className="transition animate-rgbLetterAboutO">o</span>
              <span className="transition animate-rgbLetterAboutU">u</span>
              <span className="transition animate-rgbLetterAboutT">t</span>
              <span> </span>
              <span className="transition animate-rgbLetterAboutM">M</span>
              <span className="transition animate-rgbLetterAboutE">e</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptate quam accusantium porro quis, quia officiis sunt, doloremque vitae neque voluptatem adipisci nesciunt officia eligendi corporis. Dolore sunt iusto nam?</p>
          </div>
        </div>


        <div className="bg-black w-full h-[40rem] ">
          <div className="w-full h-full flex justify-end">
            <div className="max-w-full h-full flex flex-col justify-center">
              <Tools />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
