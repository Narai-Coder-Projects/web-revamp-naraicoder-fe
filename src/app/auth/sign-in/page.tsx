'use client'
import Image from "next/image"
import ImgSignIn from '../../../../public/images/sign-in-image.svg'
import FormInput from "@/app/components/Atoms/Form/FormInput";
import { Formik } from "formik";
import * as Yup from 'yup';
import { BasicButton } from "@/app/components/Molecules";
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    });

    return (
        <div className="flex h-[100vh] justify-between gap-7 md:p-[5%] lg:px-[10%]">
            <div className="w-1/2">
                <Image src={ImgSignIn} alt="" width={500} height={500} />
            </div>
            <section className="w-1/2">
                <h1 className="text-2xl mb-5 font-semibold">Sign In</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(JSON.stringify(values, null, 2))
                        router.push('/dashboard')
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
                            <FormInput
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                                placeholder="Password"
                                error={props.errors.password}
                            />
                            <p className="text-sm py-4">Forgot password?</p>

                            <BasicButton type="submit">Sign In </BasicButton>
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

export default SignUp