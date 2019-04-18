import React from 'react'
import {
    Form, Icon, Input, Checkbox,
  } from 'antd'
import { Block, Button } from '../../components'

import './Auth.scss'

class Auth extends React.Component {

    
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        })
    }

    render() {

        const { getFieldDecorator } = this.props.form

        return (    
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Authenticate</h2>
                        <p>You have to login for grant access</p>
                    </div>
                    <Block>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item hasFeedback validateStatus="success">
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input 
                                    prefix={<Icon 
                                    type="user" 
                                    style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="Username"
                                    size="large"
                                />
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input 
                                    prefix={<Icon type="lock" 
                                    style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="password" 
                                    placeholder="Password"
                                    size="large"
                                />
                            )}
                            </Form.Item>
                            <Form.Item>
                            
                                <Button type="primary" size="large">
                                    Log in
                                </Button>
                            
                            </Form.Item>
                            <Form.Item>
                                <a className="auth__register-link" href="#">create an account</a>
                            </Form.Item>
                        </Form>
                    </Block>
                </div>
            </section>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'auth' })(Auth)

export default WrappedNormalLoginForm