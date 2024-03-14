import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";
import {User} from "@/modules/users/infra/typeorm/entities/User";

export class ListUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}
    async execute(): Promise<User[]> {
        return await this.usersRepository.list();
    }
}