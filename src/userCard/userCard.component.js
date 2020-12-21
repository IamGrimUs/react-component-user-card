import * as React from 'react'
import faker from 'faker'
import {Card} from '../components/card.component.js'

const { useState } = React;

const currentUser = {
  background: faker.image.abstract(),
  avatar: faker.image.animals(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.random.number(),
  followers: faker.random.number(),
  likes: faker.random.number(),
  photos: faker.random.number(),
  country: faker.address.country()
}

const sectionTitles = ['Followers', 'Likes', 'Photos'];

export const UserCard = () => {
  const [user, setUser] = useState(currentUser)
  return (
    <Card user={user} sections={sectionTitles} />
  )
}