import { toast } from 'react-toastify'

export const success = (title) => {
  return toast.success(title, {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  })
}
export const error = (title) => {
  return toast.error(title, {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  })
}