import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {
    }
    async execute(id: string, userData: CreateUserDto) {
        return await this.usersRepository.update(id, userData);
    }
}