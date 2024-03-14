import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {
    }
    async execute(id: string, userData: CreateUserDto) {
        const user = await this.usersRepository.findBy(id, 'id');

        if (!user) {
            throw new Error('User not found!');
        }

        return await this.usersRepository.update(id, userData);
    }
}