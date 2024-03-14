import {IUsersRepository} from "@/interfaces/IUsersRepository";

export class DeleteUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {
    }
    async execute(id: string): Promise<void> {
        return await this.usersRepository.delete(id);
    }
}