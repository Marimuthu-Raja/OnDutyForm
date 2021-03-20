import React, { Component } from 'react'
import Records from './Records'
import {Segment,Header, Container,Card,Image,Button} from 'semantic-ui-react'
import {students,studentForms} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class RecordList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             studentid:localStorage.getItem('studentid'),
             forms:[],
             studentData:'',
             renderform:false,
             form:{},
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

    renderform = (form) =>{
        this.setState({renderform:!this.state.renderform,form})
    }
    
    render() {
        const {forms,form,renderform} = this.state
        return (
            <>
                    <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                                On Duty Records
                            </Header>
                        </Segment>
                    </Container>
                    {/* {forms.map(form=>
                    <>
                    <Records form={form} availed={this.state.studentData.availed}/>
                    <Divider/>
                    </>
                    )} */}
                    {renderform?
                    <>
                    <Records form={form} availed={this.state.studentData.availed}/>
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
