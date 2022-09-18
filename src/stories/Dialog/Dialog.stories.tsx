// import { Button } from '@mui/material';
import React from 'react';
import { Button, Dialog} from '../../index';

export default
{
    title: 'Dialog',
    component: Dialog,
}

const emails = ['username@gmail.com', 'user02@gmail.com'];
const SimpleDialogDemo = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value: string) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div>
          Selected: {selectedValue}
        <br />
        <Button 
            onClick={handleClickOpen} 
            text="click me"
        />

        <Dialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    );
}

const Template = (args: any) => <SimpleDialogDemo {...args} />;
export const Primary = Template.bind({});
Primary.args = 
{

}