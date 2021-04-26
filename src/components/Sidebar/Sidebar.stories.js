import React,{useState} from 'react'
import '../../index.css'
import {Button} from '../Button/Button'
import Sidebar from './Sidebar';


export default {
    component: Sidebar,
    title: 'Sidebar ',
  };
  
//👇 We create a “template” of how args map to rendering
const Template = (args) => <div>
  <Sidebar   {...args} >
    {/* console.log(props)
  <button onClick={ args.slider=false}>evrbrbrb</button> */}

  </Sidebar>


</div>

 
  function sidebar(args) {
  const [open,setOpen] = useState(true)
  return (
    <>
    <Sidebar open ={open}  setOpen= {setOpen} /> 
    <Button label1="LOGIN" size="text-sm" type="primary"  onClick={()=>setOpen(!open)}/>
    </>

    
  )
}

//👇 Each story then reuses that template
export const One = sidebar.bind({});
One.args = {  slider: false };




