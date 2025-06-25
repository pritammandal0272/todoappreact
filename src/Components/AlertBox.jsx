import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import ContextAPI from '../Store/ContextAPI';
const AlertBox = () => {
    const {AlertBoxShow} = useContext(ContextAPI);
    return<>
    {
        
        AlertBoxShow?<Alert variant="filled" severity="error">Please Write your Todo or Date !!</Alert>:null
    }
        
    </>
}
export default AlertBox;