import {IUsersRepository} from "@/interfaces/IUsersRepository";
import {CreateUserDto} from "@/interfaces/dtos/CreateUser.dto";

export class CreateUserUseCase {

    constructor(
       private usersRepository: IUsersRepository
    ) {}
    async execute(userData: CreateUserDto): Promise<void> {
        const userName = await this.usersRepository.findBy(userData.name, 'name');

        if (userName) {
            throw new Error('User already exists!')
        }

        const userCpf = await this.usersRepository.findBy(userData.cpf, 'cpf');

        if (userCpf) {
            throw new Error('User already exists!')
        }

        const userEmail = await this.usersRepository.findBy(userData.email, 'email');

        if (userEmail) {
            throw new Error('User already exists!')
        }

        await this.usersRepository.create(userData)
    }
}