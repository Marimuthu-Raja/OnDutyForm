import React, { Component } from 'react'
import { Container, Segment, Tab, Header, Form, Button, Table, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import {departments,teachers} from '../FireBase/Firbase'
import { firebaseLooper } from '../FireBase/FirebaseLooper'
import { Alert } from '../Tools/Tools'
import EditTeacher from './EditTeacher'
export default class Manage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dept:'',
             degree:'',
             teacherData:[],
             Teacherid:'',
             renderProfile:false
        }
    }

    componentDidMount(){
            teachers.get().then((res)=>{
                const  teacherData = firebaseLooper(res)
                this.setState({teacherData})
            })
    }
    
    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {dept,degree} = this.state
        departments.add({Dept:dept,degree}).then(()=>{
        Alert('success','Success!','Department Added Successfully')
        this.setState({dept:'',degree:''})
    })  
    }

    renderEdit = (id) =>{
        this.setState({renderProfile:!this.state.renderProfile,Teacherid:id})    
    }

    renderTab = () =>{
        this.setState({renderProfile:!this.state.renderProfile})
    }

    DeleteProfile = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Record file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willdelete)=>{
            if(willdelete){
                teachers.doc(id).delete().then(()=>{
                    Alert('success','Success!','TeacherProfile Deleted')
                    this.componentDidMount()
                })
            }
            else{
                Alert('success','TeacherProfile Safe')
            }
        })
        teachers.doc(id).delete()
    }
    teacherList = (teacher) =>{
            return(<Table.Row>
                <Table.Cell>{teacher.Name}</Table.Cell>
                <Table.Cell><Icon name='edit' style={{cursor:'pointer'}} onClick={()=>this.renderEdit(teacher.id)}/></Table.Cell>
                <Table.Cell><Icon name='user delete' style={{color:'red',cursor:'pointer'}} onClick={()=>this.DeleteProfile(teacher.id)}/></Table.Cell>
            </Table.Row>)
    }

    panes = [
        {
            menuItem: { key: 'users', icon: 'student', content: 'Add Department' },
            render: () => 
                <Tab.Pane>
                    <Header as='h2'textAlign='center' color='teal'>
                        Add Department
                    </Header>

                    <Container>
                        <Form onSubmit={this.submit}>
                            <Form.Input type="text" placeholder="Degree" value={this.state.degree} label='Degree' name='degree' required onChange={this.onChange}/>
                            <Form.Input type="text" placeholder="Department" value={this.state.dept} label='Department' name='dept' required onChange={this.onChange}/>
                            <div style={{textAlign:'center',marginTop:"45px"}}>
                                <Button color='teal' size='large'>Submit</Button>
                            </div>
                        </Form>
                    </Container>
                </Tab.Pane>,
        },
        {
            menuItem: { key: 'users', icon: 'users', content: 'Manage Teachers' },
            render: () => 
            <Tab.Pane>
               <Header as='h2'textAlign='center' color='teal'>
                    Manage Staff
                </Header>

                <Table selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.teacherData.map(teacher=>this.teacherList(teacher))}
                    </Table.Body>
                </Table>
            </Tab.Pane>,
        }

    ]
    render() {
        return (
            <div>
                {this.state.renderProfile?<EditTeacher id={this.state.Teacherid} renderTab={this.renderTab}/>:
                <Container style={{marginTop:'40px'}}>
                    <Segment raised>
                        <Tab panes={this.panes}/>
                    </Segment>
                </Container>}
            </div>
        )
    }
}
