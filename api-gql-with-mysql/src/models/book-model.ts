import { Category } from './category-model';
import { Author } from './author-model';

export interface Book {
    id_book: number;
    asin: number;
    name: string;  
    editorial: string;  
    lang: string;
    cover: string;   
    isbn: string;  
    author: Author;
    category:  Category;
}