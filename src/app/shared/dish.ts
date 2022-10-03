import { Comment } from './comment';

export interface Dish{//interface 
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comment: Comment[];
}