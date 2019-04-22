import React from 'react'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { Route } from 'react-router-dom'
import { Message } from 'components'

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://pbs.twimg.com/profile_images/1102277767524163584/7lJaR7qP_200x200.jpg"
            text="hello" 
            date="Mon Apr 22 2019 21:29"
        />
    </section>
)

export default Home