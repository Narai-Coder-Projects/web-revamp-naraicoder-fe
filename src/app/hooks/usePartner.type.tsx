export interface IPartnerData {
    id: number,
    name:string,
    image: string,
    website: string
}
export interface IPartnerList {
    code: number,
    message: string
    data: IPartnerData[],
}