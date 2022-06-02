const { useState, useEffect } = require("react");

export default function Effect(props) {
    const [myName, setMyName] = useState(props.myName)

    useEffect(() => {
        alert('OK')
    }, [myName])
    return (<h1>{myName}</h1>)
}