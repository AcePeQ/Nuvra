import { Flip, ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      pauseOnHover
      transition={Flip}
      theme="dark"
      className="toastify-container"
      toastClassName="toastify-toast-wrapper"
      progressClassName="toastify-progress-bar"
    />
  );
}
