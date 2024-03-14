import {Router} from "express";
import {CreateUserController} from "@/modules/users/infra/useCases/createUser/CreateUserController";
import {ListUsersController} from "@/modules/users/infra/useCases/listUsers/listUsersController";
import {FindUserByController} from "@/modules/users/infra/useCases/findUserBy/findUserByController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const findUserByController = new FindUserByController()

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUsersController.handle);

usersRoutes.get('/:value', findUserByController.handle);