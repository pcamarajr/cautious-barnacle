import { Bounce, ToastContainer as ToastifyContainer } from "react-toastify";

export const ToastContainer = () => (
  <ToastifyContainer
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
