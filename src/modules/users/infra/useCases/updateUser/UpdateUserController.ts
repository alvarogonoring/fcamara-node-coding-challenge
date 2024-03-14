import {Request, Response} from "express";
import {container} from "@/shared/container";
import {UpdateUserUseCase} from "@/modules/users/infra/useCases/updateUser/UpdateUserUseCase";

export class UpdateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const { name,
                email,
                address,
                adjunct,
                cpf,
                address_number,
                birth_date,
                district,
                zip_code } = req.body;

        const usersRepository = container.resolve('usersRepository');

        const updateUserUseCase = new UpdateUserUseCase(usersRepository);

        await updateUserUseCase.execute(id, {
            name,
            email,
            address,
            adjunct,
            cpf,
            address_number,
            birth_date,
            district,
            zip_code
        })

        return res.status(201).send();
    }
}