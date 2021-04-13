import React from 'react'
import {useHistory} from 'react-router-dom'
export default function Logout() {
    const history = useHistory()
    localStorage.removeItem('studentid')
    localStorage.removeItem('isStudent')
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
