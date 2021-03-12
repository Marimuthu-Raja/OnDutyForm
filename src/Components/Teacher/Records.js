import React from 'react'
import {Grid, Header, Segment,Container} from 'semantic-ui-react'
export default function Records (props) {
        return (
            <div>
                 <Container>
                        <Segment raised>
                            <Header as='h2' textAlign='center' color='teal'>
                               {props.SubmittedDate}
                            </Header>
                            <div style={{marginTop:'30px'}}>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Name 
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.Name}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Designation
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.Designation}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                From Date
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.from_date}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                To Date:
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.to_date}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Purpose Of On Duty
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.purpose}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Nature of On Duty
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.nature}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Venue
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.venue}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Work Affected Day
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.affected}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                </div>
                        </Segment>
                        </Container>
            </div>
        )
}
