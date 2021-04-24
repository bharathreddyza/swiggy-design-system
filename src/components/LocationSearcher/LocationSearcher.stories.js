import React from 'react'
import '../../index.css'

import {LocationSearcher} from './LocationSearcher';


export default {
    component: LocationSearcher,
    title: 'LocationSearcher',
  };
  
//👇 We create a “template” of how args map to rendering
const Template = (args) => <LocationSearcher {...args} />;

//👇 Each story then reuses that template
export const One = Template.bind({});
One.args = {  label: 'order' };

 