'use client'
import FormInput from "@/app/components/Atoms/Form/FormInput";
import { Button } from "@/app/components/Molecules";
import usePartner from "@/app/hooks/usePartner";
import { Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from 'yup';

const ImageUploadForm = () => {
    const [preview, setPreview] = useState(null);
    const {onAdd} = usePartner()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        website: Yup.string().url('Invalid URL').required('Website is required'),
        image: Yup.mixed().required('Image is required').test(
            "fileFormat",
            "Unsupported Format",
            value => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type)
        )
    });

    const initValues = { name: '', website: '', image: null };

    const handleSubmit = (values, actions) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('website', values.website);
        formData.append('image', values.image);

        // You can handle form data submission here
        console.log('Form Data:', values);
        onAdd(values)
    };

    return (
        // <div className="flex  items-center">
            <section className="">
                <h1 className="text-2xl mb-5 font-semibold">Add Partner</h1>
                <Formik
                    initialValues={initValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className=" w-full flex flex-col md:justify-between md:flex-row">
                                <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
                                    <FormInput
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.name}
                                        name="name"
                                        label="Name"
                                        placeholder="Name"
                                        error={props.errors.name}
                                    />
                                    <FormInput
                                        type="url"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.website}
                                        name="website"
                                        label="Website"
                                        placeholder="Website"
                                        error={props.errors.website}
                                    />
                                </div>
                                <div className="space-y-3  mb-3 md:w-1/2 md:ml-3">
                                    <input
                                        type="file"
                                        onChange={(event) => {
                                            console.log('event', event.target.files)
                                            const file = event?.currentTarget?.files[0];
                                            console.log('file', file)
                                            props.setFieldValue("image", file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setPreview(reader?.result);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                setPreview(null);
                                            }
                                        }}
                                        onBlur={props.handleBlur}
                                        name="image"
                                        accept="image/*"
                                        className="form-input"
                                    />
                                    {preview ? (
                                        <div className="mt-4">
                                            <Image width={100} height={100} src={preview} alt="Preview" className="w-full h-auto" />
                                        </div>
                                    ) : (
                                        <div className="h-[200px] w-full border border-double rounded-md flex justify-center items-center">
                                            <p className="text-slate-300 text-xl">Not found image</p>
                                        </div>

                                    )}
                                    {props.errors.image && props.touched.image && (
                                        <div className="text-red-500 text-sm">{props.errors.image}</div>
                                    )}
                                </div>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    )}
                </Formik>
            </section>
        // </div>
    );
};

export default ImageUploadForm;
