import {Component, OnInit} from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { Author } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit{
  skip = 0
  limit = 12

  books:Book | any;
  error  ="";
  doneReq = false
  currentPage = 1
  totalPages = 1
  categories:Category | any;
  authors:Author | any ;
  selectedValue:any;

  constructor(private _BooksService: BooksService,
    private _router:Router ,
    private _CategoriesService:CategoriesService,
    private _AuthorsService:AuthorsService){



    //assume that every page have only 10 books, th 1st page from 0 to 10
    this._BooksService.getBooks(this.skip, this.limit, {observe: 'response'}).subscribe((res)=>{


      if(res.status === 200){
        this.books = res.body.book.books
        console.log(this.books);

      }else{
        this.error = res
      }

    })
  }

  changeCategory(e:any){
    console.log(e.target.value);
    this.selectedValue = e.target.value;

  }
  ngOnInit(): void {
    this._CategoriesService.getCategories(0, 0, {observe: 'response'}).subscribe((data:any)=>{
      this.categories = data.body.category.categories;
      this.totalPages = data.body.category.totalPages;

    });

    this._AuthorsService.getAuthors(0, 0, {observe: 'response'}).subscribe((data:any)=>{
      console.log(data.body.authors);
      this.authors = data.body.authors;
      this.totalPages = data.body.totalPages;
    });


  }
getCurrentId(id:any){
 if(!id) return

 this._BooksService.id = id;
}


formData = new FormData();
file: File | undefined;


onFileChange(event: any) {
  this.file = event.target.files[0];
}

addNewBook(myForm: NgForm){

  const { title, description, category, author } = myForm.value;

  this.formData.append('title', title);
  this.formData.append('description', description);
  this.formData.append('category', category);
  this.formData.append('author', author);
  if(this.file) this.formData.append('image', this.file);
  console.log(myForm.value)
  this._BooksService.addBook(this.formData).subscribe(
    (response) => {
      this.doneReq =true
    },
    (error) => {
    }
  );
}
UpdateBook(myFormU:NgForm){
  const { title , description } = myFormU.value;

  this.formData.append('title',title);
  this.formData.append('description',description);
  if(this.file) this.formData.append('image',this.file);

  this._BooksService.updateBook(this.formData).subscribe((res)=>{
    console.log('Response',res);
    this.doneReq =true

  },
  (err)=>{

  })
}

deleteBook() {
  this._BooksService.deleteBook().subscribe(
    (response) => {
        this.doneReq =true
    },
    (error) => {
    }
  );
}
loadCategories() {
  this._CategoriesService.getCategories(this.currentPage, this.limit, {observe: 'response'}).subscribe((data:any)=>{
    this.categories = data.body.category.categories;
    this.totalPages = data.body.category.totalPages;
    console.log(this.categories);

  });
}


}










