import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Teendők</Link></li>
        <li><Link to="/add">Új teendő felvétele</Link></li>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
