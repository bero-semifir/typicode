import { User } from './User';
export interface Article {
    userId: number,
    id: number,
    title: string,
    body: string,
    author?: User
}
