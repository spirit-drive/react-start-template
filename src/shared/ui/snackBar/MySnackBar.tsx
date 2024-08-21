import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { setSnackBar } from 'src/slices/snackBarSlice';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from 'src/store/store';
import { AlertColor } from '@mui/material/Alert';
import { SnackbarCloseReason } from '@mui/material/Snackbar';

const MySnackBar = () => {

    const snackBar = useSelector((state: IRootState) => state.snackBar.snackBar)
    const dispatch = useDispatch();

    //const [open, setOpen] = useState(true);
    
      const handleClose = (event: React.SyntheticEvent, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        dispatch(setSnackBar({
            open: false,
            text: '',
            severity: 'info'
        }));
      };

    return (
        <Snackbar open={snackBar.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                severity={snackBar.severity}
                variant="filled"
                sx={{ width: '100%' }} 
            >
                {snackBar.text}
            </Alert>
        </Snackbar>
    );
};

export default MySnackBar;
