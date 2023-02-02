# WELCOME TO MY NODE JS LESSON

## What is NodeJS
    Node.js is an open source server environment, It allows you to run Javascript on servers. NodeJS can run on various platform and Operating system like (Window, Linux, MacOS, Unix, etc).

## Why Node JS
    Node.js uses asynchronous programming
    The common task for the web server can be to open a file on a server and return the content to the client this process also have to do with HTTP meaning [Hyper Text Transfer Protocol].

### Here is How PHP or ASP Handles File Resquest

    [x] Send the resquest to the computer file system.

    [x] It waits while the file system open and read the file because PHP is multi-treaded;

    [x] Returns the content to the client.

    [x] Ready to handle the next request.


### Here is How NodeJS Handles File Resquest

    [x] Send the resquest to the computer file system.

    [x] Ready to handle the next request.

    [x] When the file system has opened and read the file, the server returns the content to the client

NodeJS eliminate the waiting, and simply continues the next request, Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient not like PHP which is Multi-threaded, blocking, and synchronous pragromming.

## What can NodeJS do;
    Node.js can generate dynamic page content

    Node.js can create, open, read, write, delete, and close files on the server

    Node.js can collect form data

    Node.js can add, delete, modify data in your database

