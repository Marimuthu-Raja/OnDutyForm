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
                                                Department
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.Department}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Register Number
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.reg_no}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Date of Od Requested
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.req_date}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>

                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                Date of Sanction
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.sanc_date}
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
                                               Purpose of OD
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
                                                No of ODs Availed So Far
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.availed}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                   <Grid columns={2}>
                                        <Grid.Column>
                                            <Header as='h5' textAlign='center'>
                                                No of Days Required
                                            </Header>    
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header as='h5'>
                                                {props.required}
                                            </Header>
                                        </Grid.Column>
                                   </Grid>
                                </div>
                        </Segment>
                        </Container>
            </div>
        )
}
