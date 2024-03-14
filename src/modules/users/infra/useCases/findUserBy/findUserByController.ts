import {container} from "@/shared/container";
import {Request, Response} from "express";
import {FindUserByUseCase} from "@/modules/users/infra/useCases/findUserBy/findUserByUseCase";

export class FindUserByController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {value} = req.params;
        const {target} = req.body;

        const usersRepository = container.resolve('usersRepository');

        const findUserByUseCase = new FindUserByUseCase(usersRepository);

        const user = await findUserByUseCase.execute(value, target);

        if (!user) {
            return res.status(400).send({message: 'User not found!'})
        }

        return res.status(200).json(user);
    }
}