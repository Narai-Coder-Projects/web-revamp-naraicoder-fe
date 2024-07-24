'use client'
import usePartner from "@/hooks/usePartner"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { ICDelete, ICEdit } from "../../../../public/icon"
import { Button, ModalDelete } from "@/components/Molecules"
import useTeam from "@/hooks/useTeam"

const page = () => {
    // const { datas, onDelete, getList, isRefresh, setIsRefresh, isModalOpen, selectedId, onCompirmModal, setIsModalOpen } = usePartner()
    const { datas, getList, isLoading, isRefresh, setIsRefresh } = useTeam()

    useEffect(() => {
        getList()
        setIsRefresh(false)
    }, [isRefresh])
    console.log('isLoading', isLoading)
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Link href={'/dashboard/team/create'}>
                <div className="w-[100px] mb-5">
                    <Button type="submit">Create Data</Button>
                </div>
            </Link>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
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
                                <tr key={key} className="bg-white border-b items-center justify-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {key = key + 1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data?.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Image src={data?.image} alt="" width={50} height={50} />
                                    </td>
                                    <td className="flex ">
                                        <Link href={{ pathname: `/dashboard/team/edit`, query: { 'id': data.id } }} className="hover:bg-slate-200 py-4 px-2  ">
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
            <div className="text-center flex justify-center w-full py-3">
                {
                    isLoading && (
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-secondary animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }
                {
                    datas?.length === 0 && (
                        <p >Data kosong</p>
                    )
                }
            </div>


            {/* {
                isModalOpen && (
                    <ModalDelete
                        handleCancel={() => setIsModalOpen(false)}
                        handleYes={() => onDelete(selectedId)}
                    />
                )
            } */}
        </div>

    )
}

export default page