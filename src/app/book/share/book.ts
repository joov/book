import { Publisher } from './publisher';

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  numPages?: number;
  author: string;
  abstract: string;
  publisher: Publisher;
}
