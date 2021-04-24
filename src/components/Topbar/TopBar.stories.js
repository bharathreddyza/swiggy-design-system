import React from 'react'
 
import {TopBar} from './TopBar';


export default {
    component: TopBar,
    title: 'TopBar',
  };
  
//👇 We create a “template” of how args map to rendering
const Template = (args) => <TopBar>
 <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    <h1>Search</h1>
    </TopBar>

//👇 Each story then reuses that template
export const One = Template.bind({});
One.args = <div>hello</div>
One.children =<div>
   
</div>
 