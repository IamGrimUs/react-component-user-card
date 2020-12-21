import * as React from 'react';
import './card.styles.css'

export const Card = ({user, sections}) => {
  return (
    <div className="card-frame center bg-white">
      <div className="card-background-pattern" style={{ backgroundImage: `url(${user.background})` }}></div>
      <figure className="avatar center"><img src={user.avatar} alt={user.firstName} /></figure>
      <div class="card-details">
        <p>{`${user.firstName} ${user.lastName}`} <span class="">{ user.age}</span></p>
        <p>{user.country}</p>
      </div>
      <div className="flex-box three-col">
        <div><p>{user.followers}K</p><p>{sections[0]}</p></div>
        <div><p>{user.likes}K</p><p>{sections[1]}</p></div>
        <div><p>{user.photos}K</p><p>{sections[2]}</p></div>
      </div>
    </div>
  )
}