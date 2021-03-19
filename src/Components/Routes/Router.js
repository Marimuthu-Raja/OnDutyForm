import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Auth/Login'
import Odform from '../Form/Odform'
import TeacherProfile from '../Teacher/Profile'
import TeacherEditProfile from '../Teacher/EditProfile'
import Records from '../Teacher/RecordList'
import TeacherLogout from '../Teacher/Logout'
import { teachersidebar,studentsidebar,adminsidebar,principalsidebar } from '../Tools/Tools'
import Sidebar from '../Sidebar/Sidebar'
import StudentProfile from '../Student/Profile'
import StudentEditProfile from '../Student/EditProfile'
import StudentRecords from '../Student/RecordList'
import Studentodform from '../Student/Form'
import StudentLogout from '../Student/Logout'
import Dashboard from '../Principal/Dashboard'
import TeacherForms from '../Principal/Teacherforms'
import StudentForms from '../Principal/StudenForm'
import AddStudents from '../Admin/AddStudents'
import AddTeachers from '../Admin/AddTeacher'
export default class Router extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/od-form'>
                    <Sidebar Menu={teachersidebar}>
                        <Odform/>
                    </Sidebar>
                </Route>
                <Route exact path='/teacherprofile'>
                    <Sidebar Menu={teachersidebar}>
                        <TeacherProfile/>
                    </Sidebar>
                </Route>
                <Route exact path='/Records'>
                    <Sidebar Menu={teachersidebar}>
                        <Records/>
                    </Sidebar>
                </Route>
                <Route exact path='/teacher-edit-profile'>
                    <Sidebar Menu={teachersidebar}>
                        <TeacherEditProfile/>
                    </Sidebar>
                </Route>
                <Route exact path='/teacherlogout' component={TeacherLogout}/>


                <Route exact path='/student-od-form'>
                    <Sidebar Menu={studentsidebar}>
                        <Studentodform/>
                    </Sidebar>
                </Route>
                <Route exact path='/studentprofile'>
                    <Sidebar Menu={studentsidebar}>
                        <StudentProfile/>
                    </Sidebar>
                </Route>
                <Route exact path='/studentRecords'>
                    <Sidebar Menu={studentsidebar}>
                        <StudentRecords/>
                    </Sidebar>
                </Route>
                <Route exact path='/student-edit-profile'>
                    <Sidebar Menu={studentsidebar}>
                        <StudentEditProfile/>
                    </Sidebar>
                </Route>
                <Route exact path='/studentlogout' component={StudentLogout}/>


                <Route exact path='/dashboard'>
                    <Sidebar Menu={principalsidebar}>
                        <Dashboard/>
                    </Sidebar>
                </Route>
                <Route exact path='/teacher-forms'>
                    <Sidebar Menu={principalsidebar}>
                        <TeacherForms/>
                    </Sidebar>
                </Route>
                <Route exact path='/student-forms'>
                    <Sidebar Menu={principalsidebar}>
                        <StudentForms/>
                    </Sidebar>
                </Route>

                <Route exact path='/add-students'>
                    <Sidebar Menu={adminsidebar}>
                        <AddStudents/>
                    </Sidebar>
                </Route>
                <Route exact path='/add-teachers'>
                    <Sidebar Menu={adminsidebar}>
                        <AddTeachers/>
                    </Sidebar>
                </Route>
                <Route exact path='/add-dept'>
                    <Sidebar Menu={adminsidebar}>
                        
                    </Sidebar>
                </Route>
            </div>
        )
    }
}
