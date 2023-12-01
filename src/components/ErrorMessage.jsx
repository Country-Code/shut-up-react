import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type) => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
    });
};

const ErrorMessage = {
    success: (message) => showToast(message, 'success'),
    error: (message) => showToast(message, 'error'),
    info: (message) => showToast(message, 'info'),
    warning: (message) => showToast(message, 'warning'),
};

export default ErrorMessage;