import React from 'react'
import { Block, Button } from '../../components'

import './Auth.scss'

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <div className="auth__top">
                <h2>Authenticate</h2>
                <p>you have to login for grant access</p>
            </div>
            <Block>
                <Button type="primary" size="large">This is a Button</Button>
            </Block>
        </div>
    </section>
)

export default Auth