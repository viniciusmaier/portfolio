const fontAlegreya = Alegreya({
  subsets: ["latin"],
  weight: "400",
});

<template>
    <header className={`w-screen h-12 bg-[#050D0C] bg-opacity-90 fixed z-20`}>
        <div className={`flex justify-center items-center h-full outline outline-[#7e244e96] outline-offset-4 ${fontAlegreya.className} text-xl`}>
            <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
            <div className={`text-[#F22786] flex flex-row gap-2`}>
                <i className="text-[#F22786]"><Icons.computer /></i>
                <span className="font-extrabold">V-M</span>
            </div>

            <div className="text-[#F22786] font-bold text">
                <a href="#" className="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">AboutMe</a>
                <a href="#" className="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">Projects</a>
                <a href="#" className="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">Contacts</a>
            </div>
            </div>
        </div>
    </header>
</template>