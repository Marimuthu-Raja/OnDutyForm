import React from 'react'
import {useHistory} from 'react-router-dom'
export default function Logout() {
    const history = useHistory()
    localStorage.removeItem('isPrincipal')
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
