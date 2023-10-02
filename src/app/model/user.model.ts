export class User {
    idCustomer: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    birthDate: string | undefined;
    email: string | undefined;
    password: string | undefined;
    profession: string = ''; // Initialize with a default value
    accountCategory: string | undefined;
    picture: string | undefined;
  
    constructor(data?: Partial<User>) {
      Object.assign(this, data);
    }
  }
  