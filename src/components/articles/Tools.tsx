

type Abilities = {
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
}

export default function Tools() {
  return (
    <article className="text-center text-white min-w-[80rem] h-full flex flex-col justify-evenly">
      <h2>Abilities</h2>
      <div className="flex flex-row justify-center w-full ">
      <button>LEFT</button>
      <ul className="flex relative w-[30rem] flex-row justify-center h-[29.5rem] mr-4">
        {abilities.map((tools, index) => 
            <li className={`absolute bg-black h-full w-3/4 border-2 border-solid rounded-lg m-1 z-[${index}0]  rotate-${index}`}>
              <i></i> 
              <h3>
                {tools.tools}
              </h3>
            </li>)
        }
      </ul>
      <button>RIGHT</button>
      </div>
    </article >
  );
}

function setState(arg0: number) {
  throw new Error("Function not implemented.")
}
