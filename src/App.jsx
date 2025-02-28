// we are using the useState webhook from react to keep track of changes the user makes to input values and to dynamically load resources (notes) to display on the page
// we are using the useEffect webhook only to load our initial resource values
import { useState, useEffect } from 'react'

// these components create a 'piece' of our page; while they could have easily been incorporated into this App.jsx, they create reusable and distinct parts of the app as a whole
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import Notification from './components/Notification'

// the service for the notes resource defines the interactions with the API and separates concerns of the backend fetching from the UI
import noteService from './services/notes'

const App = () => {
  // this webhook sets the initial notes from the db and updates them (via the setNotes function) when a new note is added
  const [notes, setNotes] = useState([])
  // this webhook sets the inputs as a user updates them on the page (via the setInputs function)
  const [inputs, setInputs] = useState({})
  // this webhook sets an error message when an error is issued
  const [errorMessage, setErrorMessage] = useState(null)

  // get all the resources currently stored in the db for processing; this action occurs on the page load
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])

  // set the inputs as name/value pairs as they are updated by the user
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  // this function is run when the user presses save to create a new resource
  const handleSubmit = (event) => {
    // must prevent default to avoid page reload
    event.preventDefault()

    // reset error message if it was previously issued
    setErrorMessage(null)

    // initialize the new object based on the provided data from inputs
    const noteObject = {
      title: inputs.title,
      content: inputs.content,
    }

    // make a request to the service to call the backend and save the resource created
    noteService.create(noteObject)
      .then((returnedNote) => {
        // if the resource was created successfully, add the value to the existing displayed array
        setNotes(notes.concat(returnedNote))
        // clear out inputs we just saved and added to the list to display
        setInputs('')
      })
      .catch((error) => {
        // if an error was thrown, display it to the user
        setErrorMessage('Failed to create note: ' + error.message)
      })
  }
  // the code in this return is the JSX that will render the HTML based on the components and values provided from the JS code mixed in
  return (
    <div>
      <Header />
      <Notification message={errorMessage} />
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Enter note title:
          <input name='title' type="text" value={inputs.title || ''} onChange={handleChange} />
        </label>
        <label>Enter note contents:
          <input name='content' type="text" value={inputs.content || ''} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App