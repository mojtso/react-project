import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components';

class LoginForm extends React.Component {


    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Authenticate</h2>
                    <p>You have to login for grant access</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input 
                                prefix={<Icon 
                                type="user" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Username"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Input 
                                prefix={<Icon type="lock" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="large">
                                Log in
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link className="auth__register-link" to="/register">
                                create an account
                            </Link>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm