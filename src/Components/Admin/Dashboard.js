import React, { Component } from 'react'
import { Segment,Header,Grid, Container, Divider,Card,Image,Button} from 'semantic-ui-react'
export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Container>
                    <Segment style={{marginTop:'20px'}}>
                        <Header as='h2' color='teal' textAlign='center'>Admin DashBoard</Header>
                    </Segment>
                </Container>

                <Container fluid style={{marginTop:'20px'}}>

                <Grid centered columns={2}>
                    <Grid.Column only='large screen' mobile={16} computer={8} tablet={16}>
                        <Segment>
                            <Header as='h2' color='teal' textAlign='center'>Teacher Forms</Header>
                            <Divider fitted/>
                            <Container text style={{marginTop:'20px'}}>
                                
                                </Container>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column  mobile={16} computer={8} tablet={16}>
                        <Segment>
                            <Header as='h2' color='teal' textAlign='center'>Student Forms</Header>
                            <Divider fitted/>
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
                    </Grid.Column>

                </Grid>

                </Container>
                
            </>
        )
    }
}
