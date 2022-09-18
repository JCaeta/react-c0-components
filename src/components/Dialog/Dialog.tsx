import * as React from 'react';
import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import {default as MuiDialog } from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';


const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  child: any
}

export const Dialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <MuiDialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        {props.child}
    </MuiDialog>
  );
}

Dialog.defaultProps =
{
    // child: 
}

Dialog.propTypes = 
{
    child: PropTypes.element,
}





// return (
//     <MuiDialog onClose={handleClose} open={open}>
//       <DialogTitle>Set backup account</DialogTitle>
//       <List sx={{ pt: 0 }}>
//         {emails.map((email) => (
//           <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//             <ListItemAvatar>
//               <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                 {/* <PersonIcon /> */}
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={email} />
//           </ListItem>
//         ))}
//         <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//           <ListItemAvatar>
//             <Avatar>
//               {/* <AddIcon /> */}
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Add account" />
//         </ListItem>
//       </List>
//     </MuiDialog>
//   );