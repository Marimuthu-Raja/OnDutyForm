import React, { Component } from 'react'
import { Segment,Header,Container,Grid, Form} from 'semantic-ui-react'
import {teacherForms,teachers,studentForms,students} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'
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
    }


    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        const {from_date,to_date,category,teacherData,studentData} = this.state
        return (
            <>
                <Container>
                    <Segment style={{marginTop:'20px'}}>
                        <Header as='h2' color='teal' textAlign='center'>Admin DashBoard</Header>
                    </Segment>
                </Container>

                <Grid columns={2} style={{marginTop:'20px'}}>
                    <Grid.Column>
                        <Container>
                            <Segment>
                                <Form>
                                   <Form.Field>
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
                                    </Form.Field>:''}

                                   <Form.Group widths={2}>
                                        <Form.Input type="date" label='From' name='from_date' value={from_date} required onChange={this.onChange}/>
                                        <Form.Input type="date" label='To' name='to_date'value={to_date} required onChange={this.onChange}/>
                                    </Form.Group>
                                </Form>
                            </Segment>
                        </Container>
                    </Grid.Column>

                    <Grid.Column>
                        <Container>
                            <Segment>
                                
                            </Segment>
                        </Container>
                    </Grid.Column>
                </Grid>

                
            </>
        )
    }
}
