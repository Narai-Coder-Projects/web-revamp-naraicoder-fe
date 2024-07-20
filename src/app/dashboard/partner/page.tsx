'use client'
import usePartner from "@/hooks/usePartner"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { ICDelete, ICEdit } from "../../../../public/icon"
import { Button, ModalDelete } from "@/components/Molecules"

const page = () => {
    const { datas, onDelete, getList, isRefresh, setIsRefresh, isModalOpen, selectedId, onCompirmModal, setIsModalOpen } = usePartner()
    useEffect(() => {
        getList()
        setIsRefresh(false)
    }, [isRefresh])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Link href={'/dashboard/partner/create'}>
                <div className="w-[100px] mb-5">
                    <Button type="submit">Create Data</Button>
                </div>
            </Link>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Website
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas?.map((data, key) => {
                            return (
                                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data?.website}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Image src={data?.image} alt="" width={50} height={50} />
                                    </td>
                                    <td className="flex ">
                                        <Link href={{ pathname: `/dashboard/partner/edit`, query: { 'id': data.id } }} className="hover:bg-slate-200 py-4 px-2  ">
                                            <Image alt="#" className="bg-orange" src={ICEdit} width={24} height={24} />
                                        </Link>
                                        <div onClick={() => onCompirmModal(data.id)} className="hover:bg-slate-200 py-4 px-2">
                                            <Image alt="#" src={ICDelete} width={24} height={24} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                isModalOpen && (
                    <ModalDelete
                        handleCancel={() => setIsModalOpen(false)}
                        handleYes={() => onDelete(selectedId)}
                    />
                )
            }
        </div>

    )
}

export default page