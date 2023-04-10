import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import {
  create, getAllUsers, getOneUser, deleteUser, updateUser, addBookToUser, adduserRating, UpdteUserImg
} from '../controllers/users';
import { updateBookRating } from '../controllers/books';
import { cloudi } from './imagesUpload';
import { hashPassword } from './authuntication';

// data types
type UpdteUserData = {
  firstName?: String;
  lastName?: String;
  password?: String
  email?: String,
  userName?: String
  image?: String
};

dotenv.config();

const createUser = async (req: Request, res: Response) : Promise<Response> => {
  const {
    firstName, lastName, email, userName,
  } = req.body;
  let { password } = req.body;

  // password = bcrypt.hashSync(password, 10);
  password = hashPassword(password);

  // Avatar
  const image = 'https://res.cloudinary.com/drbxb4sn7/image/upload/v1681107813/p499wcwgyytpkhv5dsjx.png';
  const user = await create({
    firstName, lastName, email, password, userName, image
  });

  if (!user) throw new Error('Error: user is not created');

  return res.status(200).json(user);
};

const getAllUsersFunc = async (req: Request, res: Response): Promise<Response> => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

const getOneUserFunc = async (req: Request, res: Response): Promise<Response> => {
  // const { id } = req.params;

  const id = '642f615500d8ccde87da9688';

  const oneUser = await getOneUser(id);

  return res.status(200).json(oneUser);
};

const deleteUserFunc = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await deleteUser(id);

  return res.status(200).json({ 'User deleted': student });
};

const updateUserFunc = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error('Enter id to update');
  }
  const { id } = req.params;

  const {
    firstName, lastName, email, userName,
  } = req.body;

  let { password } = req.body;

  if (password) {
    password = hashPassword(password);
  }


  const updateObject: UpdteUserData = {
    firstName, lastName, password, email, userName,
  };

  if (Object.keys(updateObject).length === 0) {
    throw new Error('Please enter data to update!');
  }

  const student = await updateUser(id, updateObject);

  return res.status(200).json(student);
};

const addBookToUserFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { id } = req.body;
  const { bookId } = req.params;

  const book = await addBookToUser(id, bookId);

  return res.status(200).json(book);
};

const adduserRatingFunc = async (req: Request, res: Response) : Promise<Response> => {
  const { id, rating } = req.body;
  const { bookId } = req.params;

  // update the user rating for this book
  const oldUserRatingObject = await adduserRating(id, bookId, rating);

  const oldUserRating : any = oldUserRatingObject?.books[0].rating;
  const updatedBookId :any = oldUserRatingObject?.books[0].bookId;

  console.log(updatedBookId);

  // update the rating for the book
  const bookUpdated = await updateBookRating(updatedBookId, oldUserRating, rating);
  console.log(bookUpdated);

  return res.status(200).json(oldUserRating);
};


const changeImgFunc = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error('Enter id to update');
  }
  const { id } = req.params;
    //update image
    if (!req.file) throw new Error("No Image has uploaded") 
    
    const uploadedImg = req.file.path;
    const image = await cloudi.uploader.upload(uploadedImg, {
        public_id: `${id}_profile`,
        width: 500,
        height: 500,
        crop: 'fill'
    
      })

      await UpdteUserImg(id, image.url);
      return res.status(200).json('Image has been uploaded')
} 

export {
  createUser, getAllUsersFunc, getOneUserFunc, deleteUser, deleteUserFunc,
  updateUserFunc, addBookToUserFunc, adduserRatingFunc, changeImgFunc
};
