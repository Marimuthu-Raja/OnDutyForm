import React, { Component } from 'react'
import { Container,Segment,Header,Card,Image,Button } from 'semantic-ui-react'
import {teacherForms} from '../FireBase/Firbase'
import SingleTeacherForm from './SingleTeacherForm'
import { firebaseLooper } from '../FireBase/FirebaseLooper'

export default class Teacherforms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             renderform:false,
             allforms:[],
             form:[],
        }
    }
    
    componentDidMount(){
        teacherForms.get().then(res=>{
            const allforms = firebaseLooper(res)
            this.setState({allforms})
        })
    }



    renderform = (form) =>{
        this.setState({renderform:!this.state.renderform,form})
        this.componentDidMount()
     }
    render() {
        const {renderform,form,allforms} = this.state
        return (
            <>
            {renderform?<SingleTeacherForm formload={this.renderform} form={form}/>:
                <Container>
                    <Segment style={{marginTop:'20px'}}>
                        <Header as='h2' color='teal' textAlign='center'>Requested OD Forms - Teachers</Header>
                    </Segment>
                    <Segment>
                    <Container text style={{marginTop:'20px'}}>
                    <Card.Group>
                    {allforms.map(form=> (form.accepted === false && form.rejected === false) &&
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>{form.name}</Card.Header>
                                            <Card.Meta>OD Form Request</Card.Meta>
                                                <Card.Description>
                                                    {form.name} wants On Duty for {form.purpose}
                                                </Card.Description>
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button inverted fluid color='violet' onClick={()=>this.renderform(form)}>
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                                )}
                            </Card.Group>
                            </Container>
                            </Segment>
                </Container>}
            </>
        )
    }
}
