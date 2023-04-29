import React, { useEffect, useState } from 'react'
import BotCard from './BotCard'

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
            return <BotCard id={e.id} health={e.health} name={e.name}  damage={e.damage}  
            url={e.avatar_url}  catchphrase={e.catchphrase} created={e.created_at} /> 
        })}
    </div>
  )
}
