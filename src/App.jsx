
import Sectors_SelectField from "./components/Sectors_SelectField"

function App() {
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
            <Sectors_SelectField />
          </div>

          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label justify-center gap-4 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text">Agree to terms</span>
            </label>
          </div>
          <button className="btn btn-primary w-full max-w-sm mx-auto"
            onClick={() => {
            }}
          >Save</button>
        </div>
      </section>
    </main>
  )
}

export default App
