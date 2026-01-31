import Login from './components/Login'

function App() {
  const isLogged = true;

  return (
    <div className="container">
      { isLogged ? <h1>Hello, wellcome!!!</h1> : <Login />} 
    </div>
  )
}

export default App
