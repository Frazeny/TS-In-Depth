import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { purge, printRefBook, calcTotalPages, getAllBooks, getBookAuthorByIndex, getBookTitlesByCategory, logBookTitles, logFirstAvailable, setDefaultConfig, getObjectProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Book, Librarian, Logger, TOptions, Magazine } from './interfaces';
import { Library } from './classes/library';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${ name }`;
}


// =============================================================
// Task 02.01 Basic Types
// =============================================================
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();


// =============================================================
// Task 03.01. Function Type
// =============================================================
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${ id }/${ name }`;
// Також можна задати функціональний тип використовуючи вже існуючу ф-цію
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${ id }/${ name }`;
// idGenerator = createCustomerID;
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID)
// console.log(idGenerator('Boris', 20));


// =============================================================
// Task 03.02. Optional, Default and Rest Parameters
// =============================================================
// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// createCustomer('Vitalii');
// createCustomer('Vitalii', 22);
// createCustomer('Vitalii', 22, 'Lviv');
// getBookTitlesByCategory();
// getAllBooks();


// =============================================================
// Task 03.03. Function Overloading
// =============================================================
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));
// let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);


// =============================================================
// Task 03.04. Assertion Function
// =============================================================
// bookTitleTransform(123);
// bookTitleTransform('Learn TypeScript');


// =============================================================
// Task 04.01. Defining an Interface
// =============================================================
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${ reason }`),
//     markDamaged(reason) {
//         console.log(`Damaged: ${ reason }`);
//     },
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');


// =============================================================
// Task 04.02. Defining an Interface for Function Types
// =============================================================
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${ reason }`);
// logDamage('missing back cover');


// =============================================================
// Task 04.03. Extending Interface
// =============================================================
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 2
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// };


// =============================================================
// Task 04.04. Optional Chaining
// =============================================================
// const offer: any = {
//     book: {
//         title: 'Essential Typescript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// =============================================================
// Task 04.05. Keyof Operator
// =============================================================
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));


// =============================================================
// Task 05.01. Creating and Using Classes
// =============================================================
// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());


// =============================================================
// Task 05.02. Extending Classes + Task 05.03. Creating Abstract Classes
// =============================================================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();


// =============================================================
// Task 05.04. Interfaces for Class Types
// =============================================================
// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;


// =============================================================
// Task 05.05. Intersection and Union Types
// =============================================================
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@ecample.com',
//     id: 1,
//     title: 'Unknown'
// };


// =============================================================
// Task 06.03. Default Export, Task 06.04. Re-Export
// =============================================================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);


// =============================================================
// Task 06.05. Dynamic Import Expression
// =============================================================
// const flag = true;

// if(flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if(flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }


// =============================================================
// Task 06.06. Type-Only Imports and Exports
// =============================================================
// let library: Library = {
//     id: 1,
//     address: ' ',
//     name: 'Anna'
// };


// =============================================================
// Task 07.01. Generic Functions
// =============================================================
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3]);
// console.log(result2);


// =============================================================
// Task 07.02. Generic Interfaces and Classes, // Task 07.03. Generic Constraints
// =============================================================
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[0], 'title'));


// =============================================================
// Task 07.04. Utility Types
// =============================================================
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300
// };

// let params: Parameters<СreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// =============================================================
// Task 08.01. Class Decorators (sealed), Task 08.02. Class Decorators that replace constructor functions (logger)
// =============================================================
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 2;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();


// =============================================================
// Task 08.03. Method Decorator (writable)
// =============================================================
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;


// =============================================================
// Task 08.04. Method Decorator (timeout)
// =============================================================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();


// =============================================================
// Task 08.05. Parameter Decorator (logParameter)
// =============================================================
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');


// =============================================================
// Task 08.06. Property Decorator
// =============================================================
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(favoriteLibrarian);


// =============================================================
// Task 08.07. Accessor Decorator
// =============================================================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);


// =============================================================
// Task 09.01. Callback Functions
// =============================================================
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');


// =============================================================
// Task 09.02. Promises
// =============================================================
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');


// =============================================================
// Task 09.03. Async Functions
// =============================================================
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');
