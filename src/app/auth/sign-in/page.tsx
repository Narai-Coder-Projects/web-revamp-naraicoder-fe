'use client'

import useAuth from "@/hooks/useAuth";
import { Formik } from "formik";
import Image from "next/image";
import * as Yup from 'yup';
import ImgSignIn from '../../../../public/images/sign-in-image.svg';
import FormInput from "@/components/Atoms/Form/FormInput";
import FormPassword from "@/components/Atoms/Form/FormPassword";
import { Button } from "@/components/Molecules";

const SignIn = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    });
    const { onLogin, isLoading, setIsLoading } = useAuth()
    const initValues = { email: '', password: '' }
    return (
        <div className="flex h-[100vh] justify-between gap-7 md:p-[5%] lg:px-[10%]">
            <div className="w-1/2">
                <Image src={ImgSignIn} alt="" width={500} height={500} />
            </div>
            <section className="w-1/2">
                <h1 className="text-2xl mb-5 font-semibold">Sign In</h1>
                <Formik
                    initialValues={initValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        const payload = {
                            email: values.email,
                            password: values.password
                        }
                        onLogin(payload)
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <FormInput
                                type="email"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                name="email"
                                placeholder="Email address"
                                error={props.errors.email}
                            />
                            <FormPassword
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                                placeholder="Password"
                                error={props.errors.password}
                            />
                            <p className="text-sm py-4">Forgot password?</p>

                            <Button disabled={isLoading} type="submit">Sign In </Button>
                        </form>
                    )}
                </Formik>
                <div className=" mt-2 flex justify-center">
                    <p className="text-sm">Don’t have an account? <span className="text-primary font-semibold">Sign Up</span></p>
                </div>
            </section>
        </div>
    )
}

export default SignIn