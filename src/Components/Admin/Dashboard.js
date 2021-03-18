import React, { Component } from 'react'
import { Segment,Header,Container,Grid, Form, Button,Card,Image, Divider} from 'semantic-ui-react'
import {teacherForms,teachers,studentForms,students} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'
import {Bar, Doughnut, Pie} from 'react-chartjs-2'
import {CalculateReport} from '../Tools/Tools'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             from_date:'',
             to_date:'',
             category:'',
             student:'',
             teacher:'',
             studentData:[],
             teacherData:[],
             studentForm:[],
             teacherForm:[],
             TotalTeacherForms:null,
             totalStudentForms:null,
             ReportData:{},
             StudentReportData:{},
        }
    }
    
    componentDidMount(){
        students.get().then(res=>{
            const studentData = firebaseLooper(res)
            this.setState({studentData})
        })

        teachers.get().then(res=>{
            const teacherData = firebaseLooper(res)
            this.setState({teacherData})
        })

        studentForms.get().then(res=>{
            const studentForm = firebaseLooper(res)
            const totalStudentForms = studentForm.length
            this.setState({studentForm,totalStudentForms})
        })

        teacherForms.get().then(res=>{
            const teacherForm = firebaseLooper(res)
            const TotalTeacherForms = teacherForm.length
            this.setState({teacherForm,TotalTeacherForms})
        })

        teacherForms.where('accepted','==',true).get().then(res=>{
            const acceptedTeacherFormsCount = firebaseLooper(res).length
            
            teacherForms.where('pending','==',true).get().then(res=>{
                const pendingTeacherFormsCount = firebaseLooper(res).length
        
            teacherForms.where('rejected','==',true).get().then(res=>{
                const rejectedTeacherFormsCount = firebaseLooper(res).length
                const ReportData = CalculateReport(this.state.TotalTeacherForms,acceptedTeacherFormsCount,rejectedTeacherFormsCount,pendingTeacherFormsCount)
                console.log(ReportData)
                this.setState({ReportData})
                
            })
    
        })

    })
    studentForms.where('accepted','==',true).get().then(res=>{
        const acceptedStudentFormsCount = firebaseLooper(res).length
        
        studentForms.where('pending','==',true).get().then(res=>{
            const pendingStudentFormsCount = firebaseLooper(res).length
    
            studentForms.where('rejected','==',true).get().then(res=>{
            const rejectedStudentFormsCount = firebaseLooper(res).length
            const StudentReportData = CalculateReport(this.state.totalStudentForms,acceptedStudentFormsCount,rejectedStudentFormsCount,pendingStudentFormsCount)
            console.log(StudentReportData)
            this.setState({StudentReportData})
            
        })

    })

})

        
    }


    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    ViewReport = () => {

    }



    render() {
        const {from_date,to_date,category,ReportData,studentData,teacherData,StudentReportData} = this.state
        return (
            <>
                
                    <Segment style={{height:'93vh'}}>
                        <Header as='h2' color='teal' textAlign='center'>Admin DashBoard</Header>
                    <Grid columns={4} style={{padding:"30px"}}>
                    <Grid.Column>
                                    
                                    <Card>
                                    <Card.Content>
                                        <Card.Header>No of OD Forms Requested</Card.Header>
                                            <Card.Meta>Teachers</Card.Meta>
                                                <Card.Description>
                                                     <h3>10</h3>
                                                </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                    
                                    <Card>
                                    <Card.Content>
                                        <Card.Header>No of OD Forms Requested</Card.Header>
                                            <Card.Meta>Students</Card.Meta>
                                                <Card.Description>
                                                     <h3>10</h3>
                                                </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                    
                                    <Card>
                                    <Card.Content>
                                        <Card.Header>No of OD Forms Accepted</Card.Header>
                                            <Card.Meta>Teachers</Card.Meta>
                                                <Card.Description>
                                                     <h3>10</h3>
                                                </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                    
                                    <Card>
                                    <Card.Content>
                                    
                                        <Card.Header>No of OD Forms Accepted</Card.Header>
                                            <Card.Meta>Students</Card.Meta>
                                                <Card.Description>
                                                     <h3>10</h3>
                                                </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                    </Grid>
                    <Divider/>

                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment raised>
                            <Form>
                                   {/* <Form.Field>
                                       <label>Select Category</label>
                                       <select className='form-control' name='category' onChange={this.onChange}>
                                           <option disabled selected>Category</option>
                                           <option value='student'>Student</option>
                                           <option value='teacher'>Teacher</option>
                                       </select>
                                   </Form.Field>
                                   {category === 'student'?
                                    <Form.Field>
                                        <label>Select Student</label>
                                        <select className='form-control' name='student' onChange={this.onChange}>
                                            <option disabled selected>Select Student</option>
                                            {studentData.map(student=> <option value={student.availed}>{student.Name}</option>)}
                                        </select>
                                    </Form.Field>
                                    :category === 'teacher'?
                                    <Form.Field>
                                        <label>Select Teacher</label>
                                        <select className='form-control' name='teacher' onChange={this.onChange}>
                                            <option disabled selected>Select Teacher</option>
                                            {teacherData.map(teacher=> <option value={teacher.odavailed}>{teacher.Name}</option>)}
                                        </select>
                                    </Form.Field>:''} */}
                                   <Form.Group widths={2}>
                                        <Form.Input type="date" label='From' name='from_date' value={from_date} required onChange={this.onChange}/>
                                        <Form.Input type="date" label='To' name='to_date'value={to_date} required onChange={this.onChange}/>
                                    </Form.Group>

                                    <div style={{textAlign:'center',marginTop:"20px"}}>
                                        <Button color='teal' size="large" onClick={this.ViewReport}>View Report</Button>
                                    </div>
                                </Form>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment raised>
                            <Header as='h2' color='teal' textAlign='center'>Teacher Forms</Header>
                                <Doughnut data={ReportData.data} options={ReportData.options}/>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment raised>
                            <Header as='h2' color='teal' textAlign='center'>Student Forms</Header>
                                <Pie data={StudentReportData.data} options={StudentReportData.options}/>
                            </Segment>
                        </Grid.Column>

                    </Grid>
                    </Segment>

            </>
        )
    }
}
