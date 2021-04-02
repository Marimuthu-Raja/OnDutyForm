import React, { Component } from 'react'
import { Grid,Form, Segment, Header,Button } from 'semantic-ui-react'
import {teacherForms,teachers,storage} from '../FireBase/Firbase'
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
        this.setState({[e.target.name]:e.target.value},()=>{
            if(this.state.from_date !== '' && this.state.to_date !== ''){
                const req_days=this.getDifferenceInDays(this.state.from_date,this.state.to_date);
                this.setState({req_days});
                console.log(req_days);
                }
        })
       
        console.log(e)
    }

    onChangeImage = e =>{
        if(e.target.files[0] !== null){
            this.setState({[e.target.name]:e.target.files[0]})
        }
    }

    getDifferenceInDays=(from_date,to_date)=> {
        const fromDate=new Date(from_date)
        const toDate=new Date(to_date)
        const diffInMs = fromDate - toDate
        const output=Math.abs(diffInMs/(1000 * 60 * 60 * 24));
        console.log(output)
        return output;
      }

    Submit = () =>{
        const {name,designation,from_date,to_date,natureofonduty,purpose,odavailed,affected_date,venue,teacherData,req_days,attendance,certificate} = this.state
        const data = {name,designation,from_date,to_date,natureofonduty,purpose,odavailed,affected_date,venue,req_days,
                    accepted:false,
                    rejected:false,
                    pending:true,
                    Email:teacherData.Email
                }

        teacherForms.add(data)
        
        storage.ref(`/Certificates/${attendance.name}`).put(attendance)
        storage.ref(`/Certificates/${certificate.name}`).put(certificate)

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
                                        <Form.Input type="date" label='To' name='to_date' value={to_date} required onChange={this.onChange}/>
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
                                    
                                    <Form.Field className='form-control' type='text'>
                                    <h6>Remaining OnDuty Available : {odavailed} </h6>
                                    </Form.Field>

                                    <Form.Field className='form-control' type='text'>
                                    <h6>Required Days : {this.state.req_days} </h6>
                                    </Form.Field>
                                    
                                    <Form.Group widths={2}>
                                        <Form.Input type="file" placeholder="" label='Attendance Certificate' name='attendance' required onChange={this.onChangeImage}/>
                                        <Form.Input type="file" placeholder="" label='Certificate Document' name='certificate' required onChange={this.onChangeImage}/>
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
