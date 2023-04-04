import { Router } from 'express';
import {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUserFunc, updateUserFunc,
} from '../middlewares/users';

const router = Router();

// 1)create user
router.post('/', createUser);

// 2. get all users
router.get('/', getAllUsersFunc);

// 3. get one user
router.get('/:id', getOneUserFunc);

// 4. delete user
router.delete('/:id', deleteUserFunc);

// 5. update user
router.patch('/:id', updateUserFunc);

export const studentRoute: Router = router;