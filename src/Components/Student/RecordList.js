import React, { Component } from 'react'
import Records from './Records'
import {Segment,Header, Container,Divider} from 'semantic-ui-react'
import {students,studentForms} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class RecordList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             studentid:localStorage.getItem('studentid'),
             forms:[],
             studentData:''
        }
    }

    componentDidMount(){
        students.doc(`${this.state.studentid}`).get().then((res)=>{
            const studentData = res.data()
                this.setState({studentData},()=>{
                    studentForms.where('RegNo','==',`${studentData.RegNo}`).get().then(res=>{
                        const forms = firebaseLooper(res)
                        this.setState({forms})
                    })
                })
        })

        
    }
    
    render() {
        const {forms} = this.state
        return (
            <>
                    <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                                On Duty Records
                            </Header>
                        </Segment>
                    </Container>
                    {forms.map(form=>
                    <>
                    <Records form={form} availed={this.state.studentData.availed}/>
                    <Divider/>
                    </>
                    )}
                    
            </>
        )
    }
}
