import React from 'react';
import { ProgressSpinner } from '../../index';
import Backdrop from '@mui/material/Backdrop';

export default
{
    title: 'ProgressSpinner',
    component: ProgressSpinner,
    argTypes: {
        active: {control: 'boolean'},
    }
}

const TestSpinner = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };

    const handleToggle = () => {
      setOpen(!open);
      setTimeout(handleClose, 4000);
    };

    return(<>
        <button onClick={handleToggle}>click me</button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <ProgressSpinner/>
        </Backdrop>
    </>);
}




const Template = (args: any) => <TestSpinner/>

export const Primary = Template.bind({});
Primary.args = 
{
    // active: true
}