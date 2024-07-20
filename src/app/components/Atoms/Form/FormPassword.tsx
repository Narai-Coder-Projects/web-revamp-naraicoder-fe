'use client'
import Image from 'next/image';
import { IFormInputProps } from './FormInput.type';
import { ICEye, ICEyeHalf } from '../../../../../public/icon';
import { useState } from 'react';

const FormPassword = (props: IFormInputProps) => {
    const { label, name, onChange, value, onBlur, placeholder, error, type } = props
    const [isPassword, setIsPassword] = useState<boolean>(false)
    
    return (
        <div className='h-[60px]'>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                type={type === "password" && isPassword ? "password" : "text"}
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={placeholder}
            />
            <div className='relative bg-black'>
                <button onClick={() => setIsPassword(!isPassword)} className='absolute bottom-1 right-2'>
                    {
                        isPassword ? (
                            <Image src={ICEyeHalf} alt='#' width={32} height={32} />
                        ) :
                            (
                                <Image src={ICEye} alt='#' width={32} height={32} />
                            )
                    }
                </button>
            </div>
            <div>
                <p className='text-xs text-red-700 font-medium'>{error}</p>
            </div>
        </div>
    )
}

export default FormPassword