import React, { useEffect, useState } from 'react'
import BotCard from './BotCard'
import BotArmy from './BotArmy'

export default function BotCollection() {
    const [bot,setBot] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(response => response.json())
        .then(data => setBot(data))
    },[])

  return (
    <div className='container'> 
    
      <div className='bot-army'>
          <BotArmy />
      </div>

      <div className='row'> 
          {bot.map((e) => {
              return <BotCard id={e.id} name={e.name}  bclass={e.bot_class} damage={e.damage} health={e.health} armor={e.armor}
              url={e.avatar_url}  catchphrase={e.catchphrase} created={e.created_at} /> 
          })}
      </div>

    </div>
  )
}
