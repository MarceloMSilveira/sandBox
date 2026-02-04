import './App.css'


function App() {
  
  

  let theUl = ['fazer 1', 'fazer 2', 'fazer 3', 'fazer 4']

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {theUl.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
