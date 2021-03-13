import React, { Component } from 'react'
import { Container,Segment,Header,Card,Image,Button } from 'semantic-ui-react'
export default class Teacherforms extends Component {
    render() {
        return (
            <>
                <Container>
                    <Segment style={{marginTop:'20px'}}>
                        <Header as='h2' color='teal' textAlign='center'>Requested OD Forms - Teachers</Header>
                    </Segment>
                    <Segment>
                    <Container text style={{marginTop:'20px'}}>
                    <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>Teacher Name</Card.Header>
                                            <Card.Meta>OD Form Request</Card.Meta>
                                                <Card.Description>
                                                    Teacher wants On Duty for this Reason
                                                </Card.Description>
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button inverted fluid color='violet' onClick>
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>Teacher Name</Card.Header>
                                            <Card.Meta>OD Form Request</Card.Meta>
                                                <Card.Description>
                                                    Teacher wants On Duty for this Reason
                                                </Card.Description>
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button inverted fluid color='violet'>
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>Teacher Name</Card.Header>
                                            <Card.Meta>OD Form Request</Card.Meta>
                                                <Card.Description>
                                                    Teacher wants On Duty for this Reason
                                                </Card.Description>
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button inverted fluid color='violet'>
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                                        />
                                        <Card.Header>Teacher Name</Card.Header>
                                            <Card.Meta>OD Form Request</Card.Meta>
                                                <Card.Description>
                                                    Teacher wants On Duty for this Reason
                                                </Card.Description>
                                    </Card.Content>

                                    <Card.Content extra>
                                        <Button inverted fluid color='violet'>
                                            View Form
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                            </Container>
                            </Segment>
                </Container>
            </>
        )
    }
}
