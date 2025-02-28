// axios simplifies XMLHttpRequests from the client - which is why it is being used here
import axios from 'axios'

// this is the route to the notes API; if you need to create another resource, just create another service (like this one) with the specific route
const baseUrl = '/api/notes'

// request to get all notes resources 
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

// request to create a new notes resource
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

// request to update existing notes resource (this is not currently being used in this frontend)
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

export default {
  getAll,
  create,
  update,
}
