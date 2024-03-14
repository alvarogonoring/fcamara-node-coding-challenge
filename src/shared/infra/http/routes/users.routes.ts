import {Router} from "express";
import {CreateUserController} from "@/modules/users/infra/useCases/createUser/CreateUserController";
import {ListUsersController} from "@/modules/users/infra/useCases/listUsers/listUsersController";
import {FindUserByController} from "@/modules/users/infra/useCases/findUserBy/findUserByController";
import {UpdateUserController} from "@/modules/users/infra/useCases/updateUser/UpdateUserController";
import {DeleteUserController} from "@/modules/users/infra/useCases/deleteUser/DeleteUserController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const findUserByController = new FindUserByController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUsersController.handle);

usersRoutes.get('/:value', findUserByController.handle);

usersRoutes.put('/:id', updateUserController.handle);

usersRoutes.delete('/:id', deleteUserController.handle);