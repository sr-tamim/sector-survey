import Homepage from "./pages/Homepage"

export const API_URL = import.meta.env.VITE_API_URL || 'https://sector-survey-production.up.railway.app'

function App() {
  return (
    <main className="px-2">
      <h1 className='text-4xl text-center font-bold'>Sector <span className="text-primary">Survey</span></h1>
      <Homepage />
    </main>
  )
}

export default App
