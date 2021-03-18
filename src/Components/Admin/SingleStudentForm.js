import React, { Component } from 'react'
import Record from '../Student/Records'
import {Button,Container,Segment,Header} from 'semantic-ui-react'
import {Alert} from '../Tools/Tools'
import {studentForms, students} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class SingleStudentForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             studentData:''
        }
    }
    


    componentDidMount(){
        students.where('RegNo','==',`${this.props.form.RegNo}`).get().then(res=>{
            const studentData = firebaseLooper(res)
            this.setState({studentData:studentData[0]})
            console.log(studentData[0])
        })
    }
    
    HandleSuccess = (form) =>{
        const availed = this.state.studentData.availed+parseInt(form.req_days)
        
        studentForms.doc(form.id).update({
            accepted:true,pending:false,
        })

        students.doc(this.state.studentData.id).update({
            availed
        })
        
        Alert("success","Success!","OD Form Accepted")
        this.props.formload()
        
    }

    HandleReject = (form) =>{
        studentForms.doc(form.id).update({
            rejected:true,pending:false
        })
        Alert("warning","Form Rejected!")
        this.props.formload()
    }

    render() {
        const {form} = this.props
        return (
            <div>
                <Container style={{marginTop:'20px'}}>
                <Segment>
                <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                               Application for On Duty 
                            </Header>
                        </Segment>
                    </Container>
                    <Record form={form} availed={this.state.studentData.availed}/>
                    <div style={{textAlign:'center',marginTop:"20px"}}>
                        <Button color='green' size="large" onClick={()=>this.HandleSuccess(form)}>Accept</Button>
                        <Button color='red' size="large" onClick={()=>this.HandleReject(form)}>Reject</Button>
                    </div>
                </Segment>
                </Container>
               
            </div>
        )
    }
}
