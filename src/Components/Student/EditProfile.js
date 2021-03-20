import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button } from 'semantic-ui-react'
import {students} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'
import {firebaseLooper} from '../FireBase/FirebaseLooper'
export default class EditProfile extends Component {
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
    
    componentDidMount(){
        students.doc(localStorage.getItem('studentid')).get().then(res=>{
            const StudentData = res.data()
            if(StudentData !== undefined){
                this.setState({
                    Name:StudentData.Name,
                    RegNo:StudentData.RegNo,
                    Email:StudentData.Email,
                    Dept:StudentData.Dept,
                    address:StudentData.address,
                    DOB:StudentData.DOB,
                })
            }
        })
    }
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,RegNo,Email,Dept,address,DOB} = this.state
        students.doc(localStorage.getItem('studentid')).update({Name,RegNo,Email,Dept,address,DOB}).then(()=>Alert("success","Success!","Profile Updated"))
    }

    render() {
        const {Name,RegNo,Email,address,DOB}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                    <Segment>
                        <Header as='h2'textAlign='center' color='teal'>
                            Edit Profile
                        </Header>
                        
                            <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>

                            <Form.Input type="text" placeholder="Name" value={Name} label='Name' name='Name' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Register Number" value={RegNo} label='Register Number' name='RegNo' onChange={this.onChange}/>


                            <Form.Field>
                                <label>Select Department</label>
                                <select name='Dept' className='form-control' onChange={this.onChange}>
                                    <option value=''disabled selected>Select Department</option>
                                    <option value='cs'>CS</option>
                                    <option value='commerce'>Commerce</option>
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="email" placeholder="Email" value={Email} label='Email' name='Email' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="01/01/2000" value={DOB} label='Date of Birth' name='DOB' onChange={this.onChange}/>
                            
                            <Form.Input type="text" placeholder="Address" value={address} label='Address' name='address' onChange={this.onChange}/>
                            
                            <div style={{textAlign:'center',marginTop:"45px"}}>
                                       <Button color='teal' size='large'>Update</Button>
                                    </div>
                            
                            </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}
