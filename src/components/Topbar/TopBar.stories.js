import React from 'react'
 
import {TopBar} from './TopBar';
import Cart from '../../assets/cart'
import Help from '../../assets/help'
import Signin from '../../assets/signin'
export default {
    component: TopBar,
    title: 'TopBar',
  };
  
//👇 We create a “template” of how args map to rendering
const Template = (args) => <TopBar>
  {args}
    </TopBar>

//👇 Each story then reuses that template
export const One = Template.bind({});
One.args = <div className="flex justify-between  font-medium">
  <div className="flex mx-8 justify-between">
    <Help/>
    <h1>help</h1>
  </div>

  <div className="flex mx-8">
    <Signin/>
    <h1>Sign IN</h1>
  </div>
  <div className="flex mx-8">
    <Cart/>
    <h1>Cart</h1>
  </div>
   </div>
    
  