import {Request, Response} from "express";
import {ListUsersUseCase} from "@/modules/users/infra/useCases/listUsers/listUsersUseCase";
import {UsersRepository} from "@/modules/users/infra/typeorm/repositories/UsersRepository";

export class ListUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsersUseCase = new ListUsersUseCase(new UsersRepository());

        const users = listUsersUseCase.execute();

        return res.status(200).json(users);
    }
}