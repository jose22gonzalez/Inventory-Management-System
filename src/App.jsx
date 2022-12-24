import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/styles.scss'
import SupplierForm from './components/SupplierForm/SupplierForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SupplierForm />
    </div>
  )
}

export default App
