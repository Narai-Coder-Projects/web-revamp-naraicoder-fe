import { IMeta } from "@/service/api/api.type"

export type TTeam = {
    name: string,
    email: string,
    role: string,
    image: string
}

export interface ITeamsList extends IMeta {
    data: TTeam[]
}