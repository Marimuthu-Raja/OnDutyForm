import React, { Component } from 'react'
import { Grid,Form, Segment, Header,Button } from 'semantic-ui-react'
import {teacherForms,teachers} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'
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
             odavailed:null,
             req_days:'',
             affected_date:'',
             venue:'',
             teacherData:'',
        }
    }
    componentDidMount(){
        teachers.doc(localStorage.getItem('teacherid')).get().then(res=>{
            const teacherData = res.data()
            this.setState({teacherData,odavailed:teacherData.odavailed})
        })
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e)
    }

    Submit = () =>{
        const {name,designation,from_date,to_date,natureofonduty,purpose,odavailed,affected_date,venue,teacherData,req_days} = this.state
        const data = {name,designation,from_date,to_date,natureofonduty,purpose,odavailed,affected_date,venue,req_days,
                    accepted:false,
                    rejected:false,
                    pending:true,
                    Email:teacherData.Email
                }

        teacherForms.add(data)
        Alert('success','Success!','Form Request Sent')
    }
    render() {
        const {name,designation,from_date,to_date,purpose,odavailed,affected_date,venue,req_days} = this.state
        return (
                    <Grid centered columns={2}>
                        <Grid.Column>
                           <Segment style={{marginTop:'20px'}} raised>
                               <Header as='h2'textAlign='center' color='teal'>
                                   On Duty Application
                               </Header>

                                <Form style={{padding:"20px"}} onSubmit={this.Submit}>
                                    <Form.Input type="text" placeholder="Name" value={name} label='Name' name='name' required onChange={this.onChange}/>

                                    <Form.Input type="text" placeholder="Designation" value={designation} label='Designation' name='designation' required onChange={this.onChange}/>

                                    <Form.Group widths={2}>
                                        <Form.Input type="date" label='From' name='from_date' value={from_date} required onChange={this.onChange}/>
                                        <Form.Input type="date" label='To' name='to_date'value={to_date} required onChange={this.onChange}/>
                                    </Form.Group>
                                    
                                    <Form.Input type="text" placeholder="Purpose" name='purpose' value={purpose} label='Purpose of On Duty' required onChange={this.onChange}/>

                                    <Form.Field required>
                                        <label>Nature of On Duty</label>
                                        <select className='form-control' name='natureofonduty' defaultValue='' onChange={this.onChange}>
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

                                    <Form.Input type="text" placeholder="Required Days" name='req_days' value={req_days} label='Require Days' required onChange={this.onChange}/>

                                    <Form.Group widths={2}>
                                        <Form.Input type="file" placeholder="" label='Attendance Certificate' required onChange={this.onChange}/>
                                        <Form.Input type="file" placeholder="" label='Certificate Document' required onChange={this.onChange}/>
                                    </Form.Group>

                                    <Form.Input type="date" label='Work Affected Days' value={affected_date} name='affected_date' required onChange={this.onChange}/>

                                    <div style={{textAlign:'center'}}>
                                        <Button color='teal' size='large'>Submit</Button>
                                    </div>

                                </Form>
                           </Segment>
                        </Grid.Column>
                    </Grid>
        )
    }
}
