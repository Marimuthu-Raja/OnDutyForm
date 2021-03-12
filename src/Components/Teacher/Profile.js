import React, { Component } from 'react'
import { Grid, Segment,Image,Header, Divider, Container,Button } from 'semantic-ui-react'

export default class Profile extends Component {
    render() {
        return (
                    <Grid centered columns={2}>
                        <Grid.Column>
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
                                        <Header as='h5'>
                                            Name:
                                        </Header>
                                        <Header as='h5'>
                                            Degree:
                                        </Header>
                                        <Header as='h5'>
                                            Email:
                                        </Header>
                                        <Header as='h5'>
                                            Phone:
                                        </Header>
                                        <Header as='h5'>
                                            Designation:
                                        </Header>
                                        <Header as='h5'>
                                            Address:
                                        </Header>
                                        <div style={{textAlign:'center'}}>
                                        <Button color='teal'>Edit</Button>
                                    </div>
                                    </Container>
                                    
                                </div>

                            </Segment>

                        </Grid.Column>
                    </Grid>
        )
    }
}
