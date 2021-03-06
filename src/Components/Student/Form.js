import React, { Component } from 'react'
import { Container,Segment,Header,Form,Grid,Input, Checkbox, Button } from 'semantic-ui-react'
import {students,studentForms} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'

export default class StudentOdForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'',
             Dept:'',
             RegNo:'',
             req_date:'',
             sanc_date:'',
             purpose:'',
             availed:0,
             req_days:'',
             checked:false,
             studentdata:[],
             studentid:localStorage.getItem('studentid')
        }
    }

    componentDidMount(){

        students.doc(`${this.state.studentid}`).get().then(response=>{
            const studentdata = response.data()
            this.setState({studentdata})
            console.log(studentdata)
            if(studentdata !== undefined){
                this.setState({
                    Name:studentdata.Name,
                    Dept:studentdata.Dept,
                    RegNo:studentdata.RegNo,
                    availed:studentdata.availed})
            }
        })

    }
    
    HandleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    HandleCheckbox = (e) =>{
        this.setState({checked:!this.state.checked})
    }

    submit = () =>{
        const {checked,req_date,req_days,availed,purpose,sanc_date,Name,Dept,RegNo} = this.state
        const data = {Name,Dept,RegNo,req_date,req_days,purpose,accepted:false,rejected:false,sanc_date,availed}

        if(checked){
            studentForms.add(data)
            Alert("success","Success!","Form Request Sent")
            
        }
        else{
            Alert("error","Oops!","Please check the checkbox")
        }
    }

    render() {
        const {req_date,sanc_date,purpose,availed,req_days,checked,Name,Dept,RegNo} = this.state
        return (
            <Container>
                    <Segment style={{marginTop:'20px'}} raised>
                        <Header as='h2'textAlign='center' color='teal'>
                            On Duty Application Form
                        </Header>

                        <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field>
                                           <label>Name</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                        <Form.Field>
                                            <Header as='h3'>{Name}</Header>
                                        </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field>
                                           <label>Registor Number</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field>
                                        <Header as='h3'>{RegNo}</Header>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field>
                                           <label>Department</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field>
                                        <Header as='h3'>{Dept}</Header>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field required>
                                           <label>Date of OD Requested</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field>
                                        <Input type='date' name='req_date' value={req_date} onChange={this.HandleInput} required/>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field required>
                                           <label>Date of OD Sanctioned</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field>
                                        <Input type='date' name='sanc_date' value={sanc_date} onChange={this.HandleInput} required/>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field required>
                                           <label>Purpose of OD</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field >
                                        <Input type='text' name='purpose' value={purpose} placeholder='Purpose of OD' onChange={this.HandleInput} required/>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field required>
                                           <label>Number of OD Availed So far</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>
                                        <Header as='h4'>{availed}</Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={2}>
                                <Grid.Column>
                                    <Header as='h4' textAlign='center'>
                                       <Form.Field required>
                                           <label>Number of Days Required</label>
                                       </Form.Field>
                                    </Header>    
                                </Grid.Column>

                                <Grid.Column>
                                    <Form.Field >
                                        <Input type='text' name='req_days' value={req_days} placeholder='No of Days Required' onChange={this.HandleInput} required/>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Segment style={{marginTop:"30px"}}>
                                <Header as='h1'>
                                <Checkbox 
                                    label="I hereby agree that the On Duty availed will be considered only if the overall attendance % falls less than 75% , But above 65%" 
                                    onChange={this.HandleCheckbox} checked={checked} required/>

                                </Header>
                            </Segment>

                            <div style={{textAlign:'center',marginTop:"20px"}}>
                                        <Button color='teal' size="large">Submit</Button>
                                    </div>

                        </Form>
                    </Segment>
            </Container>
        )
    }
}
