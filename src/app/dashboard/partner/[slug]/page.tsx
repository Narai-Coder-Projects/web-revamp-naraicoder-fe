'use client'
import FormInput from "@/app/components/Atoms/Form/FormInput";
import { Button } from "@/app/components/Molecules";
import usePartner from "@/app/hooks/usePartner";
import { Formik } from "formik";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
    const [preview, setPreview] = useState(null);
    const { getDetailList, onUpdate, onAdd, data, validationSchema, initValues, setInitValues, isLoading } = usePartner();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const handleSubmit = (values, actions) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('website', values.website);

        if (typeof values.image !== 'string') {
            formData.append('image', values.image);
        }
        if (id) {
            // Create a copy of values excluding the image if it's a string
            const updatedValues = { ...values };
            if (typeof values.image === 'string') {
                delete updatedValues.image;
            }
            onUpdate(id, updatedValues);
        } else {
            // Only include image in values if it's a file
            const addedValues = { ...values };
            if (typeof values.image === 'string') {
                delete addedValues.image;
            } else {
                formData.append('image', values.image);
            }
            onAdd(addedValues);
        }
    };

    const fetchDetailList = useCallback(() => {
        if (id) {
            getDetailList(id);
        }
    }, [id]);

    useEffect(() => {
        fetchDetailList();
    }, [fetchDetailList]);

    useEffect(() => {
        if (data) {
            setInitValues({
                name: data.name || '',
                website: data.website || '',
                image: data.image || ''
            });
        }
    }, [data]);

    return (
        <section className="">
            <h1 className="text-2xl mb-5 font-semibold capitalize">{params.slug} Partner</h1>

            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="w-full flex flex-col md:justify-between md:flex-row">
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
                            <div className="space-y-3 mb-3 md:w-1/2 md:ml-3">
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        props.setFieldValue("image", file);
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setPreview(reader.result);
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
                                {preview || props.values.image ? (
                                    <div className="mt-4">
                                        <Image width={100} height={100} src={preview || props.values.image} alt="Preview" className="w-full h-auto" />
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
                        <Button type="submit" disabled={isLoading}>Submit</Button>
                    </form>
                )}
            </Formik>
        </section>
    );
}
