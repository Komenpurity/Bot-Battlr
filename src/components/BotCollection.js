import React, { useEffect, useState } from 'react'

export default function BotCollection() {
    const [bot,setBot] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(response => response.json())
        .then(data => setBot(data))
    },[])

  return (
    <div>
        {bot.map((e) => {
            console.log(e) 
        })}
    </div>
  )
}
