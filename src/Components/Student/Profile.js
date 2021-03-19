import React, { Component } from 'react'
import { Grid, Segment,Image,Header, Divider, Container,Button } from 'semantic-ui-react'
import {students} from '../FireBase/Firbase'
import {Link} from 'react-router-dom'
export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             studentData:[]
        }
    }
    


    componentDidMount(){
        students.doc(localStorage.getItem('studentid')).get().then(res=>{
            const studentData = res.data()
            this.setState({studentData})
        })
    }

    render() {
        const {studentData} = this.state
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
                                                    {studentData.Name}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                    Register Number
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {studentData.RegNo}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Department
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {studentData.Dept}
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
                                                {studentData.Email}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                        <Grid columns={2} style={{marginTop:'20px'}}>
                                            <Grid.Column>
                                                <Header as="h5" textAlign='center'>
                                                Date Of Birth
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Header as="h4">
                                                {studentData.DOB}
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
                                                {studentData.address}
                                                </Header>
                                            </Grid.Column>
                                        </Grid>

                                       
                                    </Container>
                                    
                                </div>
                                <div style={{textAlign:'center',marginTop:"45px"}}>
                                       <Link to='student-edit-profile'> <Button color='teal'>Edit</Button></Link>
                                    </div>
                            </Segment>
                        </Container>
        )
    }
}
