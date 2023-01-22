import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditSubmission from "./pages/EditSubmission"
import Homepage from "./pages/Homepage"
import Submissions from "./pages/Submissions"

// set api url from env file. if not found set hosted url
export const API_URL = import.meta.env.VITE_API_URL || 'https://sector-survey-production.up.railway.app'

function App() {
  return (
    <main className="px-2">
      <h1 className='text-4xl text-center font-bold'>Sector <span className="text-primary">Survey</span></h1>

      {/* routing through pages functionality implemented */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* homepage */}
          <Route path="/submissions" element={<Submissions />} />  {/* view previous submission */}
          <Route path="/submissions/:id" element={<EditSubmission />} /> {/* edit specific submission */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
