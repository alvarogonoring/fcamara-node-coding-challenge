import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {User} from "@/modules/users/infra/typeorm/entities/User";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";

export class UsersRepository implements IUsersRepository {
    users: User[] = [];

    async list(): Promise<User[]> {
        return this.users
    }

    async findBy(value: string, target: 'id' | 'name' | 'cpf' | 'email'): Promise<User> {
        return this.users.find(user => user[target] === value)
    }

    async create(userData: CreateUserDto): Promise<void> {
        const user = new User();

        Object.assign(user, userData);

        this.users.push(user);
    }

    async update(id: string, userData: CreateUserDto): Promise<void> {
        const user = this.users.findIndex(user => user.id === id);

        if (user === -1) {
            throw new Error('User not found');
        }

        this.users[user] = { ...this.users[user], ...userData };
    }

    async delete(id: string): Promise<void> {
        const user = this.users.findIndex(user => user.id === id);

        if (user === -1) {
            throw new Error('User not found');
        }

        this.users.splice(user, 1)
    }
}