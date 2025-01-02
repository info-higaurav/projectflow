import {NextFunction, Request, Response, Router} from 'express'
import asyncWrapper from '../../../utils/AsyncWrapper';
import { handleSignUp } from '../../controllers/users';
import {handleError} from './handleError'
const userRoutes = Router();

userRoutes.route("/sign-up")
    .post(asyncWrapper(handleSignUp))

userRoutes.use(handleError)

export default userRoutes;