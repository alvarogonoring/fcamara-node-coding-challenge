import {IUsersRepository} from "@/interfaces/IUsersRepository";

export class DeleteUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {
    }
    async execute(id: string): Promise<void> {
        const user = await this.usersRepository.findBy(id, 'id');

        if (!user) {
            throw new Error('User not found!');
        }

        return await this.usersRepository.delete(id);
    }
}