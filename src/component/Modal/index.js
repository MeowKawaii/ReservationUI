// import React,{Fragment} from 'react';
// import { makeStyles } from '@material-ui/styles';
// import { Typography } from '@material-ui/core';

// function getModalStyle() {
//     const top = 50;
//     const left = 50;
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }
  
//   const useStyles = makeStyles(theme => ({
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(4),
//       outline: 'none',
//     },
//   }));

// function Modal(){      
//         const [open, setOpen] = React.useState(false);
//         // getModalStyle is not a pure function, we roll the style only on the first render
//         const [modalStyle] = React.useState(getModalStyle);
      
//         const handleOpen = () => {
//           setOpen(true);
//         };
      
//         const handleClose = () => {
//           setOpen(false);
//         };
//         const classes = useStyles();
      
//         return (
//           <div>
//             <Button onClick={handleOpen}>Open Modal</Button>
//             <Modal
//               aria-labelledby="simple-modal-title"
//               aria-describedby="simple-modal-description"
//               open={open}
//               onClose={handleClose}
//             >
//               <div style={modalStyle} className={classes.paper}>
//                 <Typography variant="h6" id="modal-title">
//                   Text in a modal
//                 </Typography>
//                 <Typography variant="subtitle1" id="simple-modal-description">
//                   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                 </Typography>
//               </div>
//             </Modal>
//           </div>
//         );
// }

// export default Modal;