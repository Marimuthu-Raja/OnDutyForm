import React, { Component } from 'react'
import { Container, Form, Header, Segment,Button, Grid ,Divider} from 'semantic-ui-react'
import {students} from '../FireBase/Firbase'
import {Alert} from '../Tools/Tools'
import XLSX from 'xlsx'
import {ExcelDateToJSDate} from '../Tools/ExceltoJSON'
import Swal from 'sweetalert2'

export default class AddStudents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'',
             RegNo:'',
             Email:'',
             Dept:'',
             address:'',
             DOB:'',
             JSON_data:'',
             availed:0,
             
        }
    }
    
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit = () =>{
        const {Name,RegNo,Email,Dept,address,DOB,odavailed} = this.state
        students.doc(localStorage.getItem('studentid')).add({Name,RegNo,Email,Dept,address,DOB,odavailed}).then(()=>Alert("success","Success!","Student Added"))
    }

    fileSelect = (e)=>{
        console.log(e.target.files[0])
        const excel_file=e.target.files[0]
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(excel_file)
        fileReader.onload = (event)=>{
            let data = event.target.result
            let workbook = XLSX.read(data,{type:'binary',})
            console.log(workbook, 'workbook')
            workbook.SheetNames.forEach((sheet)=>{
                let object = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
                console.log(object, 'object')
                this.setState({ JSON_data : object })
            })          
        }

    }

    uploadsheet = () =>{
        const { JSON_data,odavailed} = this.state
        if( JSON_data !== ''){
            JSON_data.map(student=>{
                const student_object ={...student,odavailed}
                student_object['DOB']= ExcelDateToJSDate(student_object.DOB)
                console.log(student_object)
                students.add(student_object,odavailed)       //upload
            })
                Swal.fire({
                icon:"success",
                text:"Student Data Added Successfully"
                })
            
        }    
    }

    render() {
        const {Name,RegNo,Email,address,DOB}=this.state
        return (
            <div>
                <Container style={{marginTop:'40px'}}>
                        <Header as='h2'textAlign='center' color='teal'>
                           Add Student
                        </Header>
                    <Segment placeholder raised>

                            <Grid columns={2} relaxed='very' stackable>
                                <Grid.Column>
                            <Form style={{padding:"20px",marginTop:"20px"}} onSubmit={this.submit}>

                            <Form.Input type="text" placeholder="Name" value={Name} label='Name' name='Name' required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="Register Number" value={RegNo} label='Register Number' required name='RegNo' onChange={this.onChange}/>


                            <Form.Field required>
                                <label >Select Department</label>
                                <select name='Dept' className='form-control' required onChange={this.onChange}>
                                    <option value=''disabled selected>Select Department</option>
                                    <option value='cs'>CS</option>
                                    <option value='commerce'>Commerce</option>
                                </select>
                            </Form.Field>
                            
                            <Form.Input type="email" placeholder="Email" value={Email} label='Email' name='Email' required onChange={this.onChange}/>

                            <Form.Input type="text" placeholder="01/01/2000" value={DOB} label='Date of Birth' name='DOB' required onChange={this.onChange}/>
                            
                            <Form.Input type="text" placeholder="Address" value={address} label='Address' name='address' required onChange={this.onChange}/>
                            
                            <div style={{textAlign:'center',marginTop:"45px"}}>
                                       <Button color='teal' size='large'>Add Student</Button>
                                    </div>
                            
                            </Form>
                            </Grid.Column>
                                <Grid.Column verticalAlign='middle'>
                                    
                                    <Header as='h3' textAlign='center'>Upload XL Sheet</Header>
                                    <Form.Input type="file" placeholder="Upload" label='Upload Xl sheet' name='sheet' required onChange={this.fileSelect}/>
                                    <Button  color="teal" className="active" id="button" type='reset' onClick={this.uploadsheet} style={{marginTop:"30px"}} > Upload </Button>
                                </Grid.Column>
                            </Grid>
                            <Divider vertical>Or</Divider>
                    </Segment>
                </Container>
            </div>
        )
    }
}
