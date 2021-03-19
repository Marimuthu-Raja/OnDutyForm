import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button } from 'semantic-ui-react'
import {students} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'


export default class AddStudents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'',
             RegNo:'',
             Email:'',
             Dept:'',
             address:'',
             DOB:'',
        }
    }
    
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,RegNo,Email,Dept,address,DOB} = this.state
        students.doc(localStorage.getItem('studentid')).add({Name,RegNo,Email,Dept,address,DOB}).then(()=>Alert("success","Success!","Student Added"))
    }

    render() {
        const {Name,RegNo,Email,address,DOB}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                    <Segment>
                        <Header as='h2'textAlign='center' color='teal'>
                           Add Student
                        </Header>
                        
                            <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>

                            <Form.Input type="text" placeholder="Name" value={Name} label='Name' name='Name' required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Register Number" value={RegNo} label='Register Number' required name='RegNo' onChange={this.onChange}/>


                            <Form.Field required>
                                <label >Select Department</label>
                                <select name='Dept' className='form-control' required onChange={this.onChange}>
                                    <option value=''disabled selected>Select Department</option>
                                    <option value='cs'>CS</option>
                                    <option value='commerce'>Commerce</option>
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="email" placeholder="Email" value={Email} label='Email' name='Email' required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="01/01/2000" value={DOB} label='Date of Birth' name='DOB' required onChange={this.onChange}/>
                            
                            <Form.Input type="text" placeholder="Address" value={address} label='Address' name='address' required onChange={this.onChange}/>
                            
                            <div style={{textAlign:'center',marginTop:"45px"}}>
                                       <Button color='teal' size='large'>Add Student</Button>
                                    </div>
                            
                            </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}
