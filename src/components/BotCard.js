import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartPulse, faBolt, faShieldHalved} from '@fortawesome/free-solid-svg-icons'

export default function BotCard({id,name,url,catchphrase,created,bclass,damage,health,armor}) {
  return (
    <div className="card col-2" >   
        <img src={url} className="card-img-top"alt='im'/> 
        <div className="card-body" >
            <h5 className="card-title">{name}
               <small>{bclass} </small>  
            </h5>
            <p className="meta text-wrap">
              <small>{catchphrase}</small>
            </p> 
          <div>
            <span><FontAwesomeIcon icon={faHeartPulse} beat></FontAwesomeIcon>
                {health}
            </span>

            <span><FontAwesomeIcon icon={faBolt} shake ></FontAwesomeIcon>
                {damage}
            </span>

            <span><FontAwesomeIcon icon={faShieldHalved} shake ></FontAwesomeIcon>
                {armor} 
            </span>
          </div>
        </div>
    </div>
  )
}
