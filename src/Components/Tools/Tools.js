import Swal from 'sweetalert2'


export const Alert = (icon,title,text) =>{
    Swal.fire({
        icon,
        title,
        text,
    })
}

export const teachersidebar = [
    {
        name:'Profile',
        icon:'user',
        to:'/teacherprofile'
    },
    {
        name:'Form',
        icon:'wpforms',
        to:'/od-form'
    },
    {
        name:'Records',
        icon:'unordered list',
        to:'/Records'
    },
    {
        name:'Log Out',
        icon:'log out',
        to:'/teacherlogout'
    }
]

export const studentsidebar = [
    {
        name:'Profile',
        icon:'user',
        to:'/studentprofile'
    },
    {
        name:'Form',
        icon:'wpforms',
        to:'/student-od-form'
    },
    {
        name:'Records',
        icon:'unordered list',
        to:'/studentRecords'
    },
    {
        name:'Log Out',
        icon:'log out',
        to:'/studentlogout'
    }
]

export const adminsidebar = [
    {
        name:'Dashboard',
        icon:'tv',
        to:'/dashboard'
    },
    {
        name:'Student Forms',
        icon:'student',
        to:'/student-forms'
    },
    {
        name:'Teacher Forms',
        icon:'user',
        to:'/teacher-forms'
    },
    {
        name:'Log Out',
        icon:'log out',
        to:'/studentlogout'
    }
]