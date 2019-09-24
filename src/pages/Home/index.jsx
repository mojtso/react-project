import React from 'react'
import { Route } from 'react-router-dom'
import { Message } from 'components'

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={false}
        />
        <Message 
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={true}
        />
        <Message 
            avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            text={"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras sed felis eget velit aliquet sagittis id. Sit amet luctus venenatis lectus magna fringilla urna"} 
            date={new Date().toISOString()}
            isMe={false}
        />
    </section>
)

export default Home