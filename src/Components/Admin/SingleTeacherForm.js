import React, { Component } from 'react'
import {Button,Container,Segment,Header} from 'semantic-ui-react'
import Record from '../Teacher/Records'
import {Alert} from '../Tools/Tools'
import {teacherForms,teachers} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class SingleTeacherForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             teacherData:'',
        }
    }
    



    componentDidMount(){
        teachers.where('Email','==',`${this.props.form.Email}`).get().then(res=>{
            const teacherData = firebaseLooper(res)
            this.setState({teacherData:teacherData[0]})
        })
    }


    HandleSuccess = (form) =>{

        teacherForms.doc(form.id).update({accepted:true,pending:false})
        Alert("success","Success!","OD Form Accepted")
        this.props.formload()
    }

    HandleReject = (form) =>{
        teacherForms.doc(form.id).update({rejected:true,pending:false})
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
                    <Record form={form} availed={this.state.teacherData.odavailed}/>
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
