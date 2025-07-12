import toast from 'react-hot-toast'

interface IToast {
	message: string
	type: IType
}

type IType = 'error' | 'success'

const MyToast = ({ type, message }: IToast) => {
	if (type === 'success')
		return toast.success(message, { duration: 2000, position: 'top-left' });
	else 
		return toast.error(message, {duration: 2000, position: 'top-left'})
}

export default MyToast
