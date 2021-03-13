import React, { Component } from 'react'
import { Card , Container, Segment, Image, Button, Header } from 'semantic-ui-react'
export default class StudenForm extends Component {
    render() {
        return (
            <>
                <Container>
                    <Segment style={{marginTop:'20px'}}>
                        <Header as='h2' color='teal' textAlign='center'>Requested OD Forms - Students</Header>
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
                                        <Card.Header>Student Name</Card.Header>
                                            <Card.Meta>Request of OD</Card.Meta>
                                                <Card.Description>
                                                    Student wants On Duty for this Reason
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
                                        <Card.Header>Student Name</Card.Header>
                                            <Card.Meta>Request of OD</Card.Meta>
                                                <Card.Description>
                                                    Student wants On Duty for this Reason
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
                                         <Card.Header>Student Name</Card.Header>
                                            <Card.Meta>Request of OD</Card.Meta>
                                                <Card.Description>
                                                    Student wants On Duty for this Reason
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
