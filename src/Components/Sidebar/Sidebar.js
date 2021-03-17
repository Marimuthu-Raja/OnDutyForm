import React,{useState} from 'react'
import {Icon,Menu,Sidebar,Image} from 'semantic-ui-react'
import Logo from '../short-logo.png'
import newlogo from '../logo.png'
import {Link} from 'react-router-dom'
import './topbar.css'


export default function VerticalSidebar(props){

  const [visible,setvisible] = useState(true)

  return(
  <>
  <Sidebar.Pushable as='Segment'>
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      icon='labeled'
      vertical
      visible={visible}
      inverted
      width='thin'
    >
      <Menu.Item header>
        <Image src={Logo} style={{width:"100px",height:"100px"}}/>
      </Menu.Item>

      {props.Menu.map((Item,i) =>
          <Link to={Item.to} className='item'>
            <Menu.Item key={i}>
              <Icon name={Item.icon} />
                {Item.name}
            </Menu.Item>
        </Link>
      )}
      
    </Sidebar>

    <Sidebar.Pusher>
      <div className="topBar" style={{display:"flex"}}>
          <Icon name='sidebar' inverted size='big' onClick={()=>setvisible(!visible)} style={{paddingTop:"15px",paddingLeft:"15px",cursor:'pointer'}}/>
          <Image src={newlogo} style={{marginLeft:"5%"}}/>
      </div>
      <div style={{backgroundColor:'#c3c3c3',height:'93vh',overflow:'auto'}}>
        {props.children}
      </div>
    </Sidebar.Pusher>
    </Sidebar.Pushable>
    </>
    )
}