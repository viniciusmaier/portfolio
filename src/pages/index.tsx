import Header from "@/src/components/Header"
import AnimationString from "@/src/components/utils/animationStrings";
import { Roboto } from "next/font/google"

const fontRoboto = Roboto({
  subsets: ['latin'],
  weight: "900"
});

export default function Home() {
  return (
    <main>
      <div className="w-screen h-[55rem] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/imgs/backGround.gif)' }}>
        <div className="w-96 h-full flex justify-end flex-col text-center">
          <AnimationString />
          <img src="/imgs/perfil.png" className="w-full animate-personaMove my-10" alt="teste" />
        </div>
        <div className="bg-gradient-to-b from-midnight-blue to-black w-full h-[30rem] flex justify-center text-white">
          <div className="flex flex-col w-[35rem] h-[15rem] text-center justify-evenly">
            <div className={`${fontRoboto.className} font-bold -rotate-2 text-letterRgb text-center`}>
              <span className="transition animate-rgbLetter delay-150">A</span>
              <span className="transition animate-rgbLetter delay-200">b</span>
              <span className="transition animate-rgbLetter delay-250">o</span>
              <span className="transition animate-rgbLetter delay-[300]">u</span>
              <span className="transition animate-rgbLetter delay-[350]">t</span>
              <span> </span>
              <span className="transition animate-rgbLetter delay-[400]">M</span>
              <span className="transition animate-rgbLetter delay-[450]">e</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptate quam accusantium porro quis, quia officiis sunt, doloremque vitae neque voluptatem adipisci nesciunt officia eligendi corporis. Dolore sunt iusto nam?</p>
          </div>
        </div>
      </div>
    </main >
  );
}
