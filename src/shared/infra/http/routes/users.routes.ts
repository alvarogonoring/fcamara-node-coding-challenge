import {Router} from "express";
import {CreateUserController} from "@/modules/users/infra/useCases/createUser/CreateUserController";
import {ListUsersController} from "@/modules/users/infra/useCases/listUsers/listUsersController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUsersController.handle);