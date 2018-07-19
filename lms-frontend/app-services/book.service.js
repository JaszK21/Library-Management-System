﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('BookService', BookService);

    BookService.$inject = ['$http'];
    function BookService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetByBookname = GetByBookname;
        service.GetBookByAuthorname = GetBookByAuthorname;
        service.GetBookByLanguage = GetBookByLanguage;
        service.GetBookByGenre = GetBookByGenre;
        service.GetAllGenres = GetAllGenres;
        service.GetAllAuthors = GetAllAuthors;
        service.GetTotalBooks = GetTotalBooks;
        service.GetUniqueBooks = GetUniqueBooks;
        service.GetIssuedBooks = GetIssuedBooks;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(callback) {
            (function() {$http.get('http://localhost:8080/admin/books')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetByBookname(name, callback) {
            (function() {$http.get('http://localhost:8080/book/name' ,{params: {name: name}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetBookByAuthorname(name, callback) {
            (function() {$http.get('http://localhost:8080/book/author' ,{params: {name: name}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetBookByLanguage(lang, callback) {
            (function() {$http.get('http://localhost:8080/book/lang' ,{params: {lang: lang}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetBookByGenre(genre, callback) {
            (function() {$http.get('http://localhost:8080/book/genre' ,{params: {genre: genre}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetAllGenres(callback) {
            (function() {$http.get('http://localhost:8080/books/genres')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetAllAuthors(callback) {
            (function() {$http.get('http://localhost:8080/books/authors')
                        .then(function(response) {        
                            callback(response);
                        });                     
                    })();
        }
        function GetTotalBooks(callback) {
            (function() {$http.get('http://localhost:8080/admin/books/total')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetUniqueBooks(callback) {
            (function() {$http.get('http://localhost:8080/admin/books/total/unique')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetIssuedBooks(callback) {
            (function() {$http.get('http://localhost:8080/admin/books/total/issued')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }   
        function AllIssuedBooksByAuthor(name, callback) {
            (function() {$http.get('http://localhost:8080/admin/books/total/issued/author' ,{params: {name: name}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }   
        function AllIssuedBooksByBookName(name, callback) {
            (function() {$http.get('http://localhost:8080/admin/books/total/issued/book' ,{params: {name: name}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Create(book, authorId, callback) {
            (function() {$http.post('http://localhost:8080/admin/addbook' , {params: {book:book, authorId:authorId}})
                        .then(function(response) {
                            console.log(response);
                            callback(response);
                        });                     
                    })();
        }
        function Update(book, callback) {
            (function() {$http.put('http://localhost:8080/admin/updatebook' , {book:book})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Delete(id, callback) {
            (function() {$http.delete('http://localhost:8080/admin/deletebook', {params: {id: id}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
    }
})();