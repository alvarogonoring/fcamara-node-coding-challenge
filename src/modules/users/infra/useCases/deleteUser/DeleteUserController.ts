import {Request, Response} from "express";
import {container} from "@/shared/container";
import {DeleteUserUseCase} from "@/modules/users/infra/useCases/deleteUser/DeleteUserUseCase";

export class DeleteUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;

        const usersRepository = container.resolve('usersRepository');

        const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

        await deleteUserUseCase.execute(id);

        return res.status(200).send();
    }
}