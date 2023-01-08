/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): ReadonlyArray<Book> {
    const books: ReadonlyArray<Book> = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            category: Category.JavaScript,
            available: true
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            category: Category.CSS,
            available: true
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true
        }];
    return books;
}

export function logFirstAvailable(books: ReadonlyArray<Book> = getAllBooks()): void {
    console.log(`Number of books: ${ books.length }`);

    // const firstTitle = books.find(book => book.available === true).title;
    // const firstTitle = books.find(book => book.available).title;
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${ title }`);
}


export function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    // return books
    //     .filter( book => book.category === inputCategory )
    //     .map( book => book.title );
    return books
        .filter(({ category }) => category === inputCategory)
        .map(({ title }) => title);
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

export function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    let pagesCounter = data.reduce(
        (acc, { books, avgPagesPerBook }) => {
            return acc + BigInt(books) * BigInt(avgPagesPerBook);
        }, 0n);
    console.log(pagesCounter.toLocaleString());
    // const result = data.reduce((acc: bigint, obj) => {
    //     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    // }, 0n);
    // console.log(result);
}

export function createCustomerID(name: string, id: number): string {
    return `${ id }/${ name }`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(name);
    if(age) {
        console.log(age);
    }
    if(city) {
        console.log(city);
    }
}


export function getBookByID(id: Book['id']): BookOrUndefined {
    // Повертаємо Book | undefined оскільки метод find, якщо не знайде елемент, поверне undefined.
    return getAllBooks().find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: Array<number>): Array<string> {
    // console.log(customer);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function numIdenticalPairs(nums: number[]): number {
    let goodPairs = 0;
    let pairsMap = nums.reduce((map, num) => {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
        return map;
    }, new Map());
    pairsMap.forEach(val => {
        if(val > 1) {
            goodPairs += val;
        }
    });
    return goodPairs;
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: any[]): string[] {
// Або у ф-ції можна задати більш складний тип:
// [string | boolean] | [number, boolean]
// return [];
// }
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if(args.length === 1) {
        const [arg] = args;
        if(typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if(typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if(args.length === 2) {
        const [id, available] = args;
        if(typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);

        }
    }
}

export function assertStringValue(data: any): asserts data is string {
    if(typeof data !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if(!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${ book.title } by ${ book.author }`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    // export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {}
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(error) {
            callback(error, null);
        }
    }, 2000);
}


export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if(titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles.length);
    return Promise.resolve(titles);
}
