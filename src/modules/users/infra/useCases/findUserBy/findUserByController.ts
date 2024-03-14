import {container} from "@/shared/container";
import {Request, Response} from "express";
import {FindUserByUseCase} from "@/modules/users/infra/useCases/findUserBy/findUserByUseCase";

export class FindUserByController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {value} = req.params;
        const {target} = req.body;

        console.log(value, target)

        const usersRepository = container.resolve('usersRepository');

        const findUserByUseCase = new FindUserByUseCase(usersRepository);

        const user = await findUserByUseCase.execute(value, target);

        if (!user) {
            throw new Error('User not found!')
        }

        return res.status(200).json(user);
    }
}