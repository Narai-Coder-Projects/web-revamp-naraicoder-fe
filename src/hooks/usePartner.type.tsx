import { IMeta } from "@/service/api/api.type"

export interface IPartnerData {
    id: number,
    name: string,
    image: string,
    website: string
}
export interface IPartnerList extends IMeta {
    data: IPartnerData[],
}
export interface IPartner {
    name: string,
    image: string,
    website: string
}