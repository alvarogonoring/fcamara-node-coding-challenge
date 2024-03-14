import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";

export class CreateUserUseCase {

    constructor(
       private usersRepository: IUsersRepository
    ) {}
    async execute(userData: CreateUserDto): Promise<void> {
        await this.usersRepository.create(userData)
    }
}