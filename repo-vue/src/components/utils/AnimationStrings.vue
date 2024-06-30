<template>
    <h3 ref="typeItTarget" class="text-[#00ffffc9] font-extrabold text-[30px] cursor font-Alegreya" ></h3>
  </template>
  
  <script>
  import "@/style/cursorTypeIt.css"
  import TypeIt from 'typeit';
  
  export default {
    data() {
      return {
        animationString: ''  // String para armazenar o resultado da animação
      };
    },
    mounted() {
      this.initTypeIt();
    },
    methods: {
      initTypeIt() {
        new TypeIt(this.$refs.typeItTarget, {
          speed: 200, 
          cursor: {
            animation : {
              options: {
                  iterations: Infinity,
                  easing: "linear",
                  fill: "forwards",
              },
            }
          },
          loop : false,
        })
        .move(0)
        .type("Programmer", { delay: 500 })
        .pause(400)
        .empty()
        .type("Web Developer", { delay: 200 })
        .move(-9, { delay: 500 })
        .delete(4, { delay: 500 })
        .move(12, { delay: 300 })
        .type('<span style="color: #F22786;"> Front-End </span>', { delay: 500 })
        .delete(10, { delay: 500 })
        .pause(500)
        .type('<span style="color: #ff7c02c9;"><em><strong> Back-End</strong></em></span>', { delay: 500 })
        .pause(200)
        .exec(() => {
          this.animationString = this.$refs.typeItTarget.innerHTML;
        })
        .go();
      }
    }
  };
  </script>