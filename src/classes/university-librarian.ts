import * as Interfaces from './../interfaces';
import { format, logger, logMethod, logParameter, sealed, writable } from './decorators';

// interface A {
//     a: number;
// }

// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
    // a: number = 2;

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${ this.name } is assisting ${ custName } with book ${ bookTitle }`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
