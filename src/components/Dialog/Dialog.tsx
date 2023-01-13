// import * as React from 'react';
// import PropTypes from 'prop-types';
// import DialogTitle from '@mui/material/DialogTitle';
// import {default as MuiDialog } from '@mui/material/Dialog'

// const emails = ['username@gmail.com', 'user02@gmail.com'];
// export interface SimpleDialogProps {
//   open: boolean;
//   selectedValue: string;
//   onClose: (value: string) => void;
//   child: any
// }

// export const Dialog = (props: SimpleDialogProps) => {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value: string) => {
//     onClose(value);
//   };

//   return (
//     <MuiDialog onClose={handleClose} open={open}>
//         <DialogTitle>Set backup account</DialogTitle>
//         {props.child}
//     </MuiDialog>
//   );
// }

// Dialog.defaultProps =
// {
//     // child: 
// }

// Dialog.propTypes = 
// {
//     child: PropTypes.element,
// }
