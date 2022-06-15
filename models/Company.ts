import { User, Pipe, People, Organization, Customfield, Lostreason } from '.'

export interface Company{
    id: number
    name: string
    smtp_host: string
    smtp_port: string
    status: string
    users: User[]
    pipes: Pipe[]
    peoples: People[]
    organizations: Organization[]
    customfields: Customfield[]
    lostreasons: Lostreason[]
    temporary_token: string
    domain: string
    created_at: string
    updated_at: string
}