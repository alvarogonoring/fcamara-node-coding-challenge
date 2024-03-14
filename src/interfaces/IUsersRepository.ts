import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";
import {User} from "@/modules/users/infra/typeorm/entities/User";

export interface IUsersRepository {
    create: (userData: CreateUserDto) => Promise<void>;
    list: () => Promise<User[]>;
    findBy: (value: string, target: 'id' | 'name' | 'cpf' | 'email') => Promise<User>;
    update: (id: string, userData: CreateUserDto) => Promise<void>;
    delete: (id: string) => Promise<void>;
}