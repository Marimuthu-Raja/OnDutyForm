import React, { Component } from 'react'
import { Grid, Segment,Image,Header, Divider, Container,Button } from 'semantic-ui-react'
import {teachers} from '../FireBase/Firbase'
import {Link} from 'react-router-dom'
export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             teacherData:'',
        }
    }
    
    componentDidMount(){
        teachers.doc(localStorage.getItem('teacherid')).get().then(res=>{
            const teacherData = res.data()
            this.setState({teacherData})
        })
    }
    render() {
        const {teacherData} = this.state

        return (
                    <Container text>
                            <Segment style={{marginTop:'20px'}} raised>
                                <Header as='h2' color='teal' textAlign='center'>
                                    Profile
                                </Header>
                                <div>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular centered/>
                                </div>
                                <Divider fitted style={{marginTop:'20px'}}/>
                                <div style={{marginTop:'30px'}}>
                                    <Container text>
                                         <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                   Name
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.Name}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                   Qualification
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.qualification}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Email
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.Email}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Phone
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.phone}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Designation
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.Designation}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Address
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {teacherData.address}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>
                                        
                                    </Container>
                                    
                                </div>
                                <div style={{textAlign:'center',marginTop:"40px"}}>
                                        <Link to='/teacher-edit-profile'><Button color='teal'>Edit</Button></Link>
                                    </div>
                            </Segment>
                        </Container>
        )
    }
}
