import {Request, Response} from "express";
import {ListUsersUseCase} from "@/modules/users/infra/useCases/listUsers/listUsersUseCase";
import {UsersRepository} from "@/modules/users/infra/typeorm/repositories/UsersRepository";
import {container} from "@/shared/container";

export class ListUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const usersRepository = container.resolve('usersRepository');

        const listUsersUseCase = new ListUsersUseCase(usersRepository);

        const users = await listUsersUseCase.execute();

        return res.status(200).json(users);
    }
}