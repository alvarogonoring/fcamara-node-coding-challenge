import {asClass, createContainer} from "awilix";
import {UsersRepository} from "@/modules/users/infra/typeorm/repositories/UsersRepository";
import {ListUsersUseCase} from "@/modules/users/infra/useCases/listUsers/listUsersUseCase";

export const container = createContainer({
    strict: true
});

container.register({
    usersRepository: asClass(UsersRepository).singleton()
})