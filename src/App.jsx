import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditSubmission from "./pages/EditSubmission"
import Homepage from "./pages/Homepage"
import Submissions from "./pages/Submissions"

export const API_URL = import.meta.env.VITE_API_URL || 'https://sector-survey-production.up.railway.app'

function App() {
  return (
    <main className="px-2">
      <h1 className='text-4xl text-center font-bold'>Sector <span className="text-primary">Survey</span></h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/submissions/:id" element={<EditSubmission />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
