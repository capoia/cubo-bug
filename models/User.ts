import { Company, Filter } from '.'

export interface User{
    id: number
    name: string
    password?: string
    phone?: string
    timezone?: string
    date_format?: string
    language?: string
    currency?: string
    email: string
    status: 'active' | 'deactivated'
    type?: 'owner' | 'user' | 'administrator' | 'guest'
    picture?: string
    created_at?: string
    updated_at?: string
    company?: Company
    token?: string
    api_key?: string
    filters?: Filter[]
    zoom?: number
    order_by?: 'TITLE' | 'RATING' | 'LOST_DATE' | 'WIN_DATE' | 'PRICE' | 'STATUS' | 'LAST_MOVE' | 'CREATED_AT'
    order_direction?: 'ASC' | 'DESC' 
}