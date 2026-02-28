import { Flip, ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      newestOnTop
      autoClose={3500}
      limit={1}
      pauseOnHover
      transition={Flip}
      theme="light"
      className="toastify-container"
      toastClassName="toastify-toast-wrapper"
      progressClassName="toastify-progress-bar"
    />
  );
}
