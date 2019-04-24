import React from 'react'
import { Route } from 'react-router-dom'
import { Message } from 'components'

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://pbs.twimg.com/profile_images/1102277767524163584/7lJaR7qP_200x200.jpg"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={false}
        />
        <Message 
            avatar="https://pbs.twimg.com/profile_images/1102277767524163584/7lJaR7qP_200x200.jpg"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={true}
        />
        <Message 
            avatar="https://pbs.twimg.com/profile_images/1102277767524163584/7lJaR7qP_200x200.jpg"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={false}
        />
    </section>
)

export default Home