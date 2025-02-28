const Note = ({ note }) => {
  const noteStyle = {
    fontSize: 15,
    paddingTop: 5
  }
  return (
    <li style={noteStyle}>
      <p>Name: {note.title}</p>
      <p>{note.content}</p>
    </li>
  )
}

export default Note