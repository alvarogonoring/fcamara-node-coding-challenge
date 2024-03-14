import {Request, Response} from "express";
import {CreateUserUseCase} from "@/modules/users/infra/useCases/createUser/CreateUserUseCase";
import {UsersRepository} from "@/modules/users/infra/typeorm/repositories/UsersRepository";
import {container} from "@/shared/container";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
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

        const createUserUseCase = new CreateUserUseCase(usersRepository);

        await createUserUseCase.execute({
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