import React, { Component } from 'react'
import Records from './Records'
import {Segment,Header, Container, Card, Image, Button} from 'semantic-ui-react'
import {teachers,teacherForms} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class RecordList extends Component {
        constructor(props) {
            super(props)

            this.state = {
                forms:[],
                teacherData:'',
                form:{},
                renderform:false
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

    renderform = (form) =>{
        this.setState({renderform:!this.state.renderform,form})
    }
    
    render() {
        const {forms,teacherData,form,renderform} = this.state
        return (
            <>
                    <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                                On Duty Records
                            </Header>
                        </Segment>
                    </Container>
                {/*       */}
                {renderform?
                    <>
                    {forms.map(form=> form.Email === teacherData.Email &&  <Records form={form} availed={teacherData.odavailed}/>)}
                    <div style={{textAlign:'center',marginTop:"20px"}}>
                        <Button color='teal' size='large' onClick={()=>this.setState({renderform:!this.state.renderform})}>Back</Button>
                    </div>
                    </>
                    :
                <Container style={{marginTop:"30px"}}>
                                <Segment raised style={{minHeight:"700px"}}>
                                <Card.Group>
                                    {forms.map(form=> (form.accepted === false && form.rejected === false) &&
                                    <Card>
                                    <Card.Content style={{padding:"30px"}}>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>{form.Name}</Card.Header>
                                            <Card.Meta>Request of OD</Card.Meta>
                                                <Card.Description>
                                                    {form.Name} wants On Duty for {form.purpose}<br/>
                                                    <span>Status :</span><span style={{color:`${form.accepted === true?"green":form.rejected === true?"red":"orange"}`,marginLeft:"20px"}}>
                                                    {form.accepted === true?"Accepted":form.rejected === true?"Rejected":"Pending"}</span>
                                                </Card.Description>
                                    </Card.Content>
                                    
                                    <Card.Content extra >
                                        <Button inverted fluid color='violet' onClick={()=>this.renderform(form)} >
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                                )}
                            </Card.Group>
                            </Segment>
                        </Container>}

            </>
        )
    }
}
