

<!-- type Abilities = {
  tools : String,
  domain_img : String,
}

const abilities : Abilities[] = [
  {
    tools : 'HTML',
    domain_img : 'teste',
  },
  {
    tools : 'CSS',
    domain_img : 'teste',
  },
  { 
    tools : 'JS',
    domain_img : 'teste',
  },
  {
    tools : 'GIT',
    domain_img : 'teste',
  }
]
function handleButtonTools(index : number) {
  abilities.splice(abilities.length, 0, (abilities.splice(index, 1)[0]))  
  return;
} -->

<template>
    <article class="text-center text-white min-w-[80rem] h-full flex flex-col justify-evenly">
      <h2 class="">Abilities</h2>
      <div class="flex flex-row justify-center w-full ">
      <button>LEFT</button>
      <ul class="flex relative w-[30rem] flex-row justify-center h-[29.5rem] mr-4"> 
            <li 
              v-for="tools in abilities"
              :key="tools.id"
              :class="`absolute bg-black h-full w-3/4 border-2 border-solid rounded-lg m-1 z-${tools.id}0  rotate rotate-${0+tools.id} rotate`"
              >
              <i></i> 
              <h3>{{ tools.name }}</h3>
            </li>
           
      </ul>
      <button>RIGHT</button>
      </div>
    </article >
</template>

<script>
  export default {
     name : 'Tools',
     data(){
      return {
        abilities : [
                                  {
                                    id : 1,
                                    name : 'HTML',
                                    domain_img : 'teste',
                                  },
                                  {
                                    id : 2,
                                    name : 'CSS',
                                    domain_img : 'teste',
                                  },
                                  { 
                                    id : 3,
                                    name : 'JS',
                                    domain_img : 'teste',
                                  },
                                  {
                                    id : 4,
                                    name : 'GIT',
                                    domain_img : 'teste',
                                  }
                                ]
      }
     }
  }
</script>

