import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Block, Button } from 'components';


class RegisterForm extends React.Component {

    render() {
        const success = true;
        return (
            <div>
                <div className="auth__top">
                    <h2>Authenticated</h2>
                </div>
                <Block>
                    {success?
                    <div className="auth__success-block">
                        <div>
                            <Icon 
                                type="info-circle" 
                                theme="twoTone" 
                            />
                        </div>
                        <Link to="/im">
                            You have successfully registered
                        </Link>
                    </div>
                    :
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input 
                                prefix={<Icon 
                                type="mail" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="email"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
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
                        
                        <Form.Item validateStatus="error" hasFeedback>
                            <Input 
                                prefix={<Icon type="lock" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                placeholder="Repeat Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="large">
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                    }
                </Block>
            </div>
        )
    }
}

export default RegisterForm;