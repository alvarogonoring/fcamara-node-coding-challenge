export interface CreateUserDto {
    name: string;
    email: string;
    cpf: string;
    birth_date: Date;
    address: string;
    address_number: number;
    zip_code: string;
    district: string;
    adjunct?: string;
}