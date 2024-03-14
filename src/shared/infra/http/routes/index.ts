import {Router} from "express";
import {usersRoutes} from "@/shared/infra/http/routes/users.routes";

export const router = Router();

router.use('/users', usersRoutes);