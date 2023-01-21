import { useState } from "react"
import AllSectors from "./components/AllSectors"

function App() {
  const [showAllSectors, setShowAllSectors] = useState(false)
  const [selectedSectors, setSelectedSectors] = useState([])
  const selectAction = (selected, sector) => {
    if (selected) {
      setSelectedSectors(prev => [...prev, sector])
    } else {
      setSelectedSectors(prev => prev.filter(item => item.id !== sector.id))
    }
  }

  return (
    <main className="px-2">
      <h1 className='text-4xl text-center font-bold'>Sector <span className="text-primary">Survey</span></h1>

      <section className="flex flex-col items-center max-w-xl mx-auto my-8">
        <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
        <div className="w-full grid gap-4 my-4">
          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-primary" />
            <span className="label-text-alt text-error">Alt label</span>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">Sectors:</span>
            </label>
            <div tabIndex={0} onClick={() => setShowAllSectors(prev => !prev)}
              className="group relative w-full min-h-[3rem] flex items-center gap-2 flex-wrap border border-primary rounded-lg px-4 py-2 focus:outline outline-2 outline-primary outline-offset-2">
              {!selectedSectors.length ? <span className="text-gray-400">Select</span>
                : selectedSectors.map(sector => <div key={sector.id}
                  className="badge badge-sm badge-primary">
                  {sector.name}
                </div>)}

              {/* background div to detect outside click */}
              {showAllSectors && <div className="fixed left-0 top-0 w-full h-full z-[9]"></div>}

              <div onClick={(e) => e.stopPropagation()}
                className={`absolute top-[110%] left-0 w-full h-44 bg-base-100 overflow-y-auto border border-primary rounded px-4 shadow-lg z-[10] transition origin-top ${showAllSectors ? 'scale-y-100' : 'scale-y-0'}`}>
                {AllSectors.map(sector => <div className="flex flex-col my-4 text-sm" key={sector.id}>

                  <span className="text-gray-500">{sector.categoryName}</span>
                  {sector.sectors.map(subSector => <label className="flex gap-2 items-center pl-3 py-1 cursor-pointer" key={subSector.id}>
                    <input type="checkbox" className="checkbox checkbox-xs checkbox-primary"
                      defaultChecked={selectedSectors.find(item => item.id === subSector.id)}
                      onChange={({ target }) => selectAction(target.checked, subSector)} />
                    {subSector.name}</label>
                  )}

                  {sector?.subCategories?.map(subCategory => <div key={subCategory.id} className="flex flex-col pl-3 my-2">
                    <span className="text-gray-500">{subCategory.categoryName}</span>
                    {subCategory.sectors.map(subSubSector => <label key={subSubSector.id} className="flex gap-2 items-center pl-4 py-1 cursor-pointer">
                      <input type="checkbox" className="checkbox checkbox-xs checkbox-primary"
                        defaultChecked={selectedSectors.find(item => item.id === subSubSector.id)}
                        onChange={({ target }) => selectAction(target.checked, subSubSector)} />
                      {subSubSector.name}</label>
                    )}
                  </div>)}
                </div>)}
              </div>
            </div>
          </div>

          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label justify-center gap-4 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text">Agree to terms</span>
            </label>
          </div>
          <button className="btn btn-primary w-full max-w-sm mx-auto">Save</button>
        </div>
      </section>
    </main>
  )
}

export default App
