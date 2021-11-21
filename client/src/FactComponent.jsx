import React, {useState, useEffect} from 'react'

export default function FactComponent() {
    const [fact, setFact] = useState('')
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api')
            .then(res => res.json())
            .then(data => setFact(data.data))
    }, [])
    return (
        <div>
            <p>{fact}</p> 
        </div>
    )
}
