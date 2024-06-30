<template>
    <div class="w-screen h-[55rem] bg-black bg-cover bg-center bg-no-repeat" :style="{
        backgroundImage: 'url(/imgs/backGround.gif)'
      }" >
        <div className="w-96 h-full flex justify-end flex-col text-center">
          <AnimationString />
          <img src="/imgs/perfil.png" className="w-full animate-personaMove my-10" alt="teste" />
        </div>

        <div class="bg-gradient-to-b from-midnight-blue to-black w-full h-[30rem] flex justify-center text-white">
          <div class="flex flex-col w-[35rem] h-[15rem] text-center justify-evenly">
            <div class="font-bold -rotate-2 text-letterRgb text-center">
              <span class="transition animate-rgbLetterAboutA">A</span>
              <span class="transition animate-rgbLetterAboutB">b</span>
              <span class="transition animate-rgbLetterAboutO">o</span>
              <span class="transition animate-rgbLetterAboutU">u</span>
              <span class="transition animate-rgbLetterAboutT">t</span>
              <span> </span>
              <span class="transition animate-rgbLetterAboutM">M</span>
              <span class="transition animate-rgbLetterAboutE">e</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptate quam accusantium porro quis, quia officiis sunt, doloremque vitae neque voluptatem adipisci nesciunt officia eligendi corporis. Dolore sunt iusto nam?</p>
          </div>
        </div>


        <div class="bg-black w-full h-[40rem] ">
          <div class="w-full h-full flex justify-end">
            <div class="max-w-full h-full flex flex-col justify-center">
                <Tools/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import Tools from "../components/articles/Tools.vue"
    import AnimationString from "../components/utils/AnimationStrings.vue"
    export default {
        name : "Home",
        components : {
            Tools,
            AnimationString
        }
    };
</script>