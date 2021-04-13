import React from 'react'
import {useHistory} from 'react-router-dom'
export default function Logout() {
    const history = useHistory()
    localStorage.removeItem('teacherid')
    localStorage.removeItem('isTeacher')
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
