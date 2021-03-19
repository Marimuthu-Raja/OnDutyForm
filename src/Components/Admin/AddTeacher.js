import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button } from 'semantic-ui-react'
import {teachers} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'


export default class AddTeacher extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'',
             phone:'',
             Email:'',
             Dept:'',
             address:'',
             Designation:'',
             qualification:'',

        }
    }
    
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,phone,Email,Dept,address,Designation,qualification} = this.state
        teachers.add({Name,phone,Email,Dept,address,Designation,qualification}).then(()=>Alert("success","Success!","Teacher Added"))
    }

    render() {
        const {Name,phone,Email,address,Designation,qualification}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                    <Segment>
                        <Header as='h2'textAlign='center' color='teal'>
                            Add Teacher
                        </Header>
                        
                            <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>

                            <Form.Input type="text" placeholder="Name" value={Name} label='Name' name='Name' required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Phone Number" value={phone} label='Phone Number' required name='phone' onChange={this.onChange}/>


                            <Form.Field required>
                                <label >Select Department</label>
                                <select name='Dept' className='form-control' required onChange={this.onChange}>
                                    <option value=''disabled selected>Select Department</option>
                                    <option value='cs'>CS</option>
                                    <option value='commerce'>Commerce</option>
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="email" placeholder="Email" value={Email} label='Email' name='Email'required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Designation" value={Designation} label='Designation' required name='Designation' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Qualification" value={qualification} label='Qualification' required name='qualification' onChange={this.onChange}/>
                            
                            <Form.Input type="text" placeholder="Address" value={address} label='Address' name='address' required onChange={this.onChange}/>
                            
                            <div style={{textAlign:'center',marginTop:"45px"}}>
                                <Button color='teal' size='large'>Add Teacher</Button>
                            </div>
                            
                            </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}
