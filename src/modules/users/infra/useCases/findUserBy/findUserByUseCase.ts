import {User} from "@/modules/users/infra/typeorm/entities/User";
import {IUsersRepository} from "@/interfaces/IUsersRepository";

export class FindUserByUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {
    }
    async execute(value: string, target: 'id' | 'name' | 'cpf' | 'email'): Promise<User> {
        return await this.usersRepository.findBy(value, target);
    }
}