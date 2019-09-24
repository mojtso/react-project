import React from 'react'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { Route } from 'react-router-dom'
import { Message } from 'components'

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            text="hello" 
            date="Mon Apr 22 2019 21:29"
        />
    </section>
)

export default Home