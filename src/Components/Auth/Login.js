import React, { Component } from 'react'
import './Login.css'
import {  Button, Form, Grid, Header, Segment, Image } from 'semantic-ui-react';
import Logo from '../logo.png'
import {Alert} from '../Tools/Tools'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             teacher:'teacher',
             tpassword:'password',
             student:'student',
             spassword:'password',
             admin:'admin',
             apassword:'password',
             username:'',
             password:'',

        }
    }
    
    HandleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    login = () =>{
        const {username,password,teacher,tpassword,student,spassword,admin,apassword} = this.state
        if(username === '' || password === ''){
            Alert('error','Oops!','Please Fill out All Fields')
        }
        else if(username === teacher && password === tpassword){
            this.props.history.push('/od-form')
        }
        else if(username === student && password === spassword){
            this.props.history.push('/student-od-form')
        }
        else if(username === admin && password === apassword){
            this.props.history.push('/dashboard')
        }
        else{
            Alert('error','Oops!','Check Username and Password')
        }

    }
    render() {
        return (
            <div className="background">
                <Grid textAlign='center' style={{ height: '102vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Image src={Logo}/>
                
                <Form size='large'>
                    <Segment raised>
                    <Header as='h2' color='teal' textAlign='center'>
                   Log-in 
               </Header>
                    <Form.Input fluid icon='user' iconPosition='left' name='username' placeholder='E-mail address' onChange={this.HandleInput} />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        onChange={this.HandleInput}
                    />

                    <Button color='teal' fluid size='large' onClick={this.login}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}
