<!-- const fontAlegreya = Alegreya({
  subsets: ["latin"],
  weight: "400",
}); -->

<template>
    <header class="w-screen h-12 bg-[#050D0C] bg-opacity-90 fixed z-20">
        <div class="flex justify-center items-center h-full outline outline-[#7e244e96] outline-offset-4 ${fontAlegreya.class} text-xl">
            <div class="flex items-center justify-between w-full max-w-screen-xl px-4">
            <div class="text-[#F22786] flex flex-row gap-2">
                <i class="text-[#F22786]"></i>
                <span class="font-extrabold">V-M</span>
            </div>

            <div class="text-[#F22786] font-bold text">
                <a href="#" class="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">AboutMe</a>
                <a href="#" class="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">Projects</a>
                <a href="#" class="mr-5 p-3 hover:text-[#e6e6e696] transition duration-700">Contacts</a>
            </div>
            </div>
        </div>
    </header>
</template> 

<script>
    export default {
        name : "Header"
    }
</script>