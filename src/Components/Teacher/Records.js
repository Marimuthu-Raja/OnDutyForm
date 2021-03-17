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
                                                {props.form.name}
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
                                                {props.form.designation}
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
                                                {props.form.from_date}
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
                                                {props.form.to_date}
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
                                                {props.form.purpose}
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
                                                {props.form.natureofonduty}
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
                                                {props.form.venue}
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
                                                {props.form.affected_date}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                               OD Availed so far
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.availed}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                </div>
                        </Segment>
                        </Container>
            </div>
        )
}
