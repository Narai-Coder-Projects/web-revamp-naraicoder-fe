'use client'
import FormInput from "@/app/components/Atoms/Form/FormInput"
import { Button } from "@/app/components/Molecules"
import useAuth from "@/app/hooks/useAuth"
import { Formik } from "formik"
import React, { useState } from "react"
import * as Yup from 'yup';


const FormPendaftaran = () => {
    const [tab, setTab] = useState<number>(1)
    const tabName = [
        {
            id: 1,
            name: 'Anggota'
        }, {
            id: 2,
            name: 'Pendaftaran non Anggota'
        }
    ]

    const validationSchema = Yup.object().shape({
        nama: Yup.string().required('Nama wajib diisi'),
        email: Yup.string().email('Alamat email tidak valid').required('Email wajib diisi'),
        number: Yup.number().min(10, 'Nomer tidak valid').required('Nomor wajib diisi'),
    });
    const { onLogin, isLoading, setIsLoading } = useAuth()
    const initValues = { email: '', nama: '', number: '' }
    return (
        <div className="md:w-[500px]">
            <h1 className="font-bold text-[30px] text-center text-secondary">Pendaftaran Peserta</h1>
            <div className="w-full flex justify-around space-x-2 mt-4">
                {
                    tabName.map((data, key) => (
                        <button onClick={() => setTab(data.id)} key={key}
                            className={`flex flex-col items-center ${data.id === tab ? 'text-secondary font-bold' : 'text-[#AAAAAA]'}`}>
                            {data.name}
                            {data.id === tab && (<div className="h-[1px] mt-1 w-[20%] bg-secondary " />)}
                        </button>
                    ))
                }
            </div>
            {
                tab === 1 && (
                    <div className="flex flex-col h-[30%] justify-end ">
                        <div className="w-[150px] px-2 flex ">
                            <Button className="" backgroundColor="bg-secondary">Masuk Akun</Button>
                        </div>
                    </div>

                )
            }
            {
                tab === 2 && (
                    <>
                        <section >
                            <Formik
                                initialValues={initValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, actions) => {
                                    // const payload = {
                                    //     email: values.email,
                                    //     password: values.password
                                    // }
                                    // onLogin(payload)
                                    console.log('payload', values)
                                }}
                            >
                                {props => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="space-y-7">
                                            <FormInput
                                                label="Nama"
                                                type="nama"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.nama}
                                                name="nama"
                                                placeholder="nama"
                                                error={props.errors.nama}
                                            />
                                            <FormInput
                                                label="Email"
                                                type="email"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.email}
                                                name="email"
                                                placeholder="Email address"
                                                error={props.errors.email}
                                            />
                                            <FormInput
                                                label="No Telephone / Whatshapp"
                                                type="number"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.number}
                                                name="number"
                                                placeholder="0812345678"
                                                error={props.errors.number}
                                            />
                                            <Button backgroundColor="bg-secondary" disabled={isLoading} type="submit">Daftar</Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </section>
                    </>
                )
            }

        </div>
    )
}

export default FormPendaftaran