import './App.css'
import Form from './components/Form';
import { useState } from 'react'

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function getInput(evt) {
    const {value:insertedData, name:inputType} = evt.target
    //console.log(insertedName, inputType)
    switch (inputType) {
      case 'fName':
        setContact (
          {...contact,
            fName: insertedData
          }
        )
        console.log(contact)
        break;
      
      case 'lName':
        setContact (
          {...contact,
            lName: insertedData
          }
        )
        break;

      case 'email':
        setContact (
          {...contact,
            email: insertedData
          }
        )
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <Form 
        tratarInput = {getInput}
      ></Form>
    </div>
  );
}

export default App
