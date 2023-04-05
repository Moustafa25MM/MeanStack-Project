import { Request, Response } from 'express';

import * as dotenve from 'dotenv';
import {
  create, getAll, getOne,
} from '../controllers/cataegories';

dotenve.config();
// 1.createCategory
const createCategory = async (req:Request, res:Response) => {
  const {
    name,
  } = req.body;
  const category = await create({
    name,
  });
  if (!category) throw new Error('Error: Category not created');

  return res.status(200).json(category);
};
// 2.getAllCategories
const getAllCategories = async (req:Request, res:Response) => {
  const { limit } = req.query;
  const { page } = req.query;
  const category = await getAll(limit, page);
  return res.status(200).json(category);
};
// 3.get One Category
const getOneCategory = async (req:Request, res:Response) => {
  const { id } = req.params;
  const category = await getOne(id);
  if (!category) throw new Error('Error: Category not found');
  res.status(200).json(category);
};

export {
  createCategory, getAllCategories, getOneCategory,
};
