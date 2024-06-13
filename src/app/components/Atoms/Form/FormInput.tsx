import { IFormInputProps } from './FormInput.type';

const FormInput = (props: IFormInputProps) => {
    const { label, name, onChange, value, onBlur, placeholder, error } = props
    return (
        <div className='h-[60px]'>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}
            />
            <div>
                <p className='text-xs text-red-700 font-medium'>{error}</p>
            </div>
        </div>
    )
}

export default FormInput