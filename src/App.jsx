import Login from './components/Login'
import Register from './components/Register';

function App() {
  const userIsRegister = false;

  return (
    <div className="container">
      { userIsRegister ? <Login /> : <Register />} 
    </div>
  )
}

export default App
