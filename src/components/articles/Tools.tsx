export default function Tools() {
  return (
    <article className="text-center text-white min-w-[80rem] h-full flex flex-col justify-evenly">
      <h2>Abilities</h2>
      <ul className="flex relative  flex-row justify-center h-[29.5rem] mr-4">
        <li className="absolute bg-black h-full w-2/6 border-2 border-solid rounded-lg m-1 z-40">
          <i></i>
          <h3>
            HTML
          </h3>
        </li>
        <li className="absolute h-full w-2/6 border-2 border-solid rounded-lg m-1 z-30 rotate-3">
          <i></i>
          <h3 className="hidden">
            CSS
          </h3>
        </li>
        <li className="absolute h-full w-2/6 border-2 border-solid rounded-lg m-1 z-20 rotate-6">
          <i></i>
          <h3 className="hidden">
            JS
          </h3>
        </li>
        <li className="absolute h-full w-2/6 border-2 border-solid rounded-lg m-1 z-10 rotate-[9deg]">
          <i></i>
          <h3 className="hidden">GIT</h3>
        </li>
      </ul>
    </article >
  );
}