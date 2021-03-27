import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button } from 'semantic-ui-react'
import {teachers} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'
import {Alert} from '../Tools/Tools'

export default class EditTeacher extends Component {
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
    
    componentDidMount(){
        teachers.doc(this.props.id).get().then(res=>{
            const TeacherData = res.data()
            if(TeacherData !== undefined){
                this.setState({
                    Name:TeacherData.Name,
                    phone:TeacherData.phone,
                    Email:TeacherData.Email,
                    Dept:TeacherData.Dept,
                    address:TeacherData.address,
                    Designation:TeacherData.Designation,
                    qualification:TeacherData.qualification,

                })
            }
        })
    }
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,phone,Email,Dept,address,Designation,qualification} = this.state
        teachers.doc(this.props.id).update({Name,phone,Email,Dept,address,Designation,qualification}).then(()=>{
            Alert("success","Success!","Profile Updated")
            this.props.renderTab()
        })
    }
    render() {
        const {Name,phone,Email,address,Designation,qualification}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                    <Segment>
                        <Header as='h2'textAlign='center' color='teal'>
                            Edit Profile
                        </Header>
                        
                            <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>

                            <Form.Input type="text" placeholder="Name" value={Name} label='Name' name='Name' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Phone Number" value={phone} label='Phone Number' name='phone' onChange={this.onChange}/>


                            <Form.Field>
                                <label>Select Department</label>
                                <select name='Dept' className='form-control' onChange={this.onChange}>
                                    <option value=''disabled selected>Select Department</option>
                                    <option value='cs'>CS</option>
                                    <option value='commerce'>Commerce</option>
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="email" placeholder="Email" value={Email} label='Email' name='Email' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Designation" value={Designation} label='Designation' name='Designation' onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Qualification" value={qualification} label='Qualification' name='qualification' onChange={this.onChange}/>
                            
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
