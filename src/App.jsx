import Login from './components/Login'

function App() {
  const isLogged = true;

  return (
    <div className="container">
      <h1>Hello</h1>
      {!isLogged && <Login />}
    </div>
  )
}

export default App
