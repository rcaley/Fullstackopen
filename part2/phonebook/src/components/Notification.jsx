const Notification = ({message}) => {
    const notifStyleSuccess = {
        color: 'green',
        border: '2px',
        borderStyle: 'solid',
        fontSize: '20px',
        backgroundColor: 'lightgrey',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    } 
    
    const notifStyleFailure = {
        ...notifStyleSuccess,
        color: 'red',
    }

    if (message[0] && message[1]) {
        return (
            <div style={notifStyleSuccess}>
                {message}
            </div>
        )
    } else if (message[0] && !message[1]) {
        return (
            <div style={notifStyleFailure}>
                {message}
            </div>
        )
    }

}

export default Notification