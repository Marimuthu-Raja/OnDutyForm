import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button } from 'semantic-ui-react'
import {departments, teachers} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'
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
             odavailed:0,
             password:'',
             depts:[],
        }
    }

    componentDidMount(){
        departments.get().then(res=>{
            const depts = firebaseLooper(res)
            this.setState({depts})
        })
    }
    
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,phone,Email,Dept,address,Designation,qualification,odavailed,password} = this.state
        teachers.add({Name,phone,Email,Dept,address,Designation,qualification,odavailed,password}).then(()=>Alert("success","Success!","Teacher Added"))
    }

    render() {
        const {Name,phone,Email,address,Designation,qualification,password,depts}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                    <Segment raised>
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
                                        {depts.map(dept=> <option value={dept.Dept}>{dept.Dept}</option>)}
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="text" placeholder="Password" value={password} label='Password' name='password' required onChange={this.onChange}/>

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
