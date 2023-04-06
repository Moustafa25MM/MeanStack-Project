import { Book } from '../models';

type NewBook = {
  title:string,
  description:string
};

// 1.createBook
const create = (data:NewBook) => Book.create(data);
// 2.get All books
const getAll = async (limit:any, page:any) => {
  const books = await Book.paginate({}, {
    limit: limit > 0 && limit < 10 ? limit : 5,
    page: page || 1,
  });
  return books;
};
// 3.getOneBook
const getOne = async (data:string) => {
  const book = await Book.findById({ _id: data });
  return book;
};
// 4.updateBook
const update = async (id:string, data:NewBook) => {
  const book = await Book.findByIdAndUpdate({ _id: id }, data, { new: true });
  return book;
};
export {
  create, getAll, getOne, update,
};
