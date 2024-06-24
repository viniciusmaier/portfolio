import Header from "@/src/components/Header"
import TypeIt from "typeit-react";
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
          <TypeIt
            className="text-slate-200 font-extrabold text-xl"
            options={{
              strings: ["I'm Developer"],
              speed: 200,
              waitUntilVisible: true,
              loop: true
            }}></TypeIt>
          <img src="/imgs/perfil.png" className="w-full animate-personaMove my-10" alt="teste" />
        </div>
        <div className="bg-gradient-to-b from-midnight-blue to-black w-full h-[30rem] flex justify-center text-white">
          <div className="flex flex-col w-[35rem] h-[15rem] text-center justify-evenly">
            <div className={`${fontRoboto.className} font-bold -rotate-2 animate-rgbLetter text-letterRgb text-center`}>About Me</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptate quam accusantium porro quis, quia officiis sunt, doloremque vitae neque voluptatem adipisci nesciunt officia eligendi corporis. Dolore sunt iusto nam?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
