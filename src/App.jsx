function App() {

  return (
    <>
      <div className="bg-black text-white text-center relative">
        <h1 className="text-xl">Welcome to Vite with TailwindCSS and React</h1>

        <div id="left" className="bg-black text-center absolute left-0 text-red-400">
          Gauche
          <div class="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div class="grid grid-cols-subgrid gap-4 col-span-3">
              <div class="col-start-2">06</div>
              <div>07</div>
            </div>
          </div>
        </div>

        <div id="right" className="bg-black text-center absolute right-0 text-red-400">
          Droite
          <div class="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div class="grid grid-cols-subgrid gap-4 col-span-3">
              <div class="col-start-2">06</div>
              <div>07</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
