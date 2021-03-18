import React, { Component } from 'react'
import Records from './Records'
import {Segment,Header, Container} from 'semantic-ui-react'
import {teachers,teacherForms} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class RecordList extends Component {
        constructor(props) {
            super(props)

            this.state = {
                forms:[],
                teacherData:'',
            }
        }

    componentDidMount(){
        teachers.doc(localStorage.getItem('teacherid')).get().then(res=>{
            const teacherData = res.data()
            console.log(teacherData)
            this.setState({teacherData})
        })

        teacherForms.get().then(res=>{
            const forms = firebaseLooper(res)
            console.log(forms)
            this.setState({forms})
        })
    }

    
    render() {
        const {forms,teacherData} = this.state
        return (
            <>
                    <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                                On Duty Records
                            </Header>
                        </Segment>
                    </Container>
                {forms.map(form=> form.Email === teacherData.Email &&  <Records form={form} availed={teacherData.odavailed}/>)}     
            </>
        )
    }
}
