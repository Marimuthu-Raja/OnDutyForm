import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from '../Auth/Login'
import Odform from '../Form/Odform'
import TeacherProfile from '../Teacher/Profile'
import Records from '../Teacher/RecordList'
import TeacherLogout from '../Teacher/Logout'
import { teachersidebar,studentsidebar } from '../Tools/Tools'
import Sidebar from '../Sidebar/Sidebar'
import StudentProfile from '../Student/Profile'
import StudentRecords from '../Student/RecordList'
import Studentodform from '../Student/Form'
import StudentLogout from '../Student/Logout'
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
                <Route exact path='/studentlogout' component={StudentLogout}/>
            </div>
        )
    }
}
