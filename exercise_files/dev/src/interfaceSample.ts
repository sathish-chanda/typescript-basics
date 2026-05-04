interface ContactInfo {
    id: number;
    name: string;
    birthDate?: Date; // ? means this property is optional. It may or may not be present in the object.
}

interface ContactInfoWithAddress extends Address {
    id: number;
    name:string;
    birthDate?: Date;
}

let primaryContact: ContactInfo = {
    id: 12343,
    name: "Alice",
    birthDate: new Date("12/12/1990")
}

let secondaryContact: ContactInfo = {
    id: 1232,
    name: "John"
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

let contactWithAddress: ContactInfoWithAddress = {
    id: 1234,
    name: "Bob",
    birthDate: new Date("12/12/1990"),
    line1: "123 Main St",
    line2: "Apt 4B",
    province: "Ontario",
    region: "Toronto",
    postalCode: "M1M 1M1"
}