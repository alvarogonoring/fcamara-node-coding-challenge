import {v4} from "uuid";

export class User {
    id: string;

    name: string;

    email: string;

    cpf: string;

    admin = false;

    birth_date: Date;

    address: string;

    address_number: number;

    zip_code: string;

    district: string;

    adjunct?: string;

    created_at: Date;

    updated_at: Date;

    constructor() {
        if (!this.id) this.id = v4();

        this.created_at = new Date();

        this.updated_at = new Date();
    }
}