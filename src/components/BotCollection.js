import React, { useEffect } from 'react'

export default function BotCollection() {
    

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])

  return (
    <div>
        
    </div>
  )
}
