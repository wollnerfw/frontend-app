const Notification = ({ message }) => {
  const notificationStyle = {
    color: 'red',
    fontSize: 20,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10
  }

  if (message === null) {
    return null
  }

  return <div style={notificationStyle}>{message}</div>
}

export default Notification
