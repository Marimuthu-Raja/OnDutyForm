import React, { Component } from 'react'
import { Grid,Form, Segment, Header,Button } from 'semantic-ui-react'
import './Odform.css'

export default class Odform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             designation:'',
             from_date:'',
             to_date:'',
             natureofonduty:'',
             purpose:'',
             attendance:null,
             certificate:null,
             odavailed:'',
             affected_date:'',
             venue:'',
        }
    }
    
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e)
    }
    render() {
        const {name,designation,from_date,to_date,purpose,odavailed,affected_date,venue} = this.state
        return (
                    <Grid centered columns={2}>
                        <Grid.Column>
                           <Segment style={{marginTop:'20px'}} raised>
                               <Header as='h2'textAlign='center' color='teal'>
                                   On Duty Application
                               </Header>

                                <Form style={{padding:"20px"}}>
                                    <Form.Input type="text" placeholder="Name" value={name} label='Name' name='name' required onChange={this.onChange}/>

                                    <Form.Input type="text" placeholder="Designation" value={designation} label='Designation' name='designation' required onChange={this.onChange}/>

                                    <Form.Group widths={2}>
                                        <Form.Input type="date" label='From' name='from_date' value={from_date} required onChange={this.onChange}/>
                                        <Form.Input type="date" label='To' name='to_date'value={to_date} required onChange={this.onChange}/>
                                    </Form.Group>
                                    
                                    <Form.Input type="text" placeholder="Purpose" name='purpose' value={purpose} label='Purpose of On Duty' required onChange={this.onChange}/>

                                    <Form.Field required>
                                        <label>Nature of On Duty</label>
                                        <select name='nature' defaultValue='' onChange={this.onChange}>
                                            <option value='' disabled>Nature of OnDuty</option>
                                            <option value='Attending_orientation_programmes'>Attending Orientation Programmes</option>
                                            <option value='Refresher_Courses'>Refresher Courses</option>
                                            <option value='Research_Methodology_Workshop'>Research Methodology Workshop</option>
                                            <option value='Faculty_Induction_Programmes'>Faculty Induction Programmes</option>
                                            <option value='Conferences'>Conferences</option>
                                            <option value='Symposia'>Symposia</option>
                                            <option value='Seminars'>Seminars</option>
                                        </select>
                                    </Form.Field>

                                    <Form.Input type="text" placeholder="Venue" name='venue' value={venue} label='Venue' required onChange={this.onChange}/>

                                    <Form.Field>
                                        <label>No. of Onduty Availed So far</label>
                                        <Header as='h6'>{odavailed}</Header>
                                    </Form.Field>

                                    <Form.Group widths={2}>
                                        <Form.Input type="file" placeholder="" label='Attendance Certificate' required onChange={this.onChange}/>
                                        <Form.Input type="file" placeholder="" label='Certificate Document' required onChange={this.onChange}/>
                                    </Form.Group>

                                    <Form.Input type="date" label='Work Affected Days' value={affected_date} name='affected_date' required onChange={this.onChange}/>

                                    <div style={{textAlign:'center'}}>
                                        <Button color='teal'>Submit</Button>
                                    </div>

                                </Form>
                           </Segment>
                        </Grid.Column>
                    </Grid>
        )
    }
}
