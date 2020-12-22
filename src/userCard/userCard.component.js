import * as React from 'react'
import faker from 'faker'
import {Card} from '../components/card.component.js'
import './userCard.styles.css'

const { useState } = React;

const currentUser = {
  background: faker.image.abstract(),
  avatar: faker.image.animals(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.random.number(),
  country: faker.address.country(),
  userStats: [{ followers: faker.random.number() }, {likes: faker.random.number() }, {photos: faker.random.number() }]
}

const renderUserStats = (user) => {
  const { userStats } = user;
  return userStats.map((stat, index) => {
    const key = Object.keys(stat)
    return <div key={`panel-${index}`}><p>{stat[key]}K</p><p>{Object.keys(stat)}</p></div>
  })
}

export const UserCard = () => {
  const [user, setUser] = useState(currentUser)
  return (
    <div className="extra-mark-up">
      <Card>
        <div className="card-background-pattern" style={{ backgroundImage: `url(${user.background})` }}></div>
        <figure className="avatar center"><img src={user.avatar} alt={user.firstName} /></figure>
        <div className="card-details">
          <p>{`${user.firstName} ${user.lastName}`} <span>{ user.age}</span></p>
          <p>{user.country}</p>
        </div>
        <div className="flex-box user-stats">
          {renderUserStats(user)}
        </div>
      </Card>
    </div>
  )
}