import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ToastProvider = () => (
  <ToastContainer
    position="bottom-left"
    autoClose={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="dark"
    transition={Bounce}
  />
);
