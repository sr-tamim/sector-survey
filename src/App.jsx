import Survey_Form from "./components/Survey_Form"

export const API_URL = import.meta.env.VITE_API_URL || 'https://sector-survey-production.up.railway.app'

function App() {

  return (
    <main className="px-2">
      <h1 className='text-4xl text-center font-bold'>Sector <span className="text-primary">Survey</span></h1>

      <section className="flex flex-col items-center max-w-xl mx-auto my-8">
        <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
        <Survey_Form />
      </section>
    </main>
  )
}

export default App
