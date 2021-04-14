# This is a basic Javascript Tutorial.

## What is Javascript ?
## JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:

### ECMAScript that provides the core functionality.
### The Document Object Model (DOM), which provides interfaces for interacting with elements on web pages
### The Browser Object Model (BOM), which provides API for interacting with web browsers.

JavaScript allows you to add interactivity to a web page. It is often used with HTML and CSS to enhance the functionality of a web page such as validating forms, creating interactive maps, and displaying animated charts.

When a web page is loaded i.e. after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code. The JavaScript code then modifies the HTML and CSS to dynamically update the user interface.

The JavaScript engine is a program that executes JavaScript code. In the beginning, JavaScript engines were implemented as interpreters. However, modern JavaScript engines are typically implemented as just-in-time compilers that compile JavaScript code to bytecode for improved performance.

# Client-side vs. Server-side JavaScript.

### When JavaScript is used on a web page, it is executed in the web browsers of user’s computers. In this case, JavaScript works as a client-side language.

### JavaScript can run on both web browsers and servers. A popular server-side environment for JavaScript is Node.js. Unlike the client-side JavaScript, the server-side JavaScript executes on the server that allows you to access databases, file systems, etc.

## Embed JavaScript code in an HTML page.

### Embed JavaScript code directly into the HTML page.
### Reference an external JavaScript code file.

## JavaScript Syntax.
#### Summary: in this tutorial, you will learn about JavaScript syntax including case-sensitivity, identifiers, comments, statements, and expressions.

### JavaScript is case-sensitive.
Everything in JavaScript including variables, function names, class names, and operators are case-sensitive. It means that counter and Counter variables are different.

Likewise, you cannot use  instanceof as the name of a function because it is a keyword. However, instanceOf is a valid function name.

### Identifiers.
An identifier is the name of a variable, function, parameter, or class. An identifier consists of one or more characters in the following format:
##### The first character must be a letter (a-z, or A-Z), an underscore(_), or a dollar sign ($).
##### The other characters can be letters (a-z, A-Z), numbers (0-9), underscores (_), and dollar signs ($).

Note that the letter in this context is not limited to the ASCII character but may include extended ASCII or Unicode though it is not recommended.

It is a good practice to use camel case for the identifiers, meaning that the first letter is lowercase, and each additional word starts with a capital letter.
For example, the following names are identifiers:
###### counter
###### inArray

### Comments
JavaScript supports both single-line and block comments.

###### A single-line comment starts with two forward-slash characters (//), for example:
// this is a single-line comment

###### A block comment starts with a forward slash and asterisk (/*) and ends with the opposite (*/) as follows:
/*
* This is a block comment that can
* span multiple lines
*/

It is a good practice to use an asterisk to begin the comment line for readability purposes.

### Statements
Although JavaScript does not require to end a statement with a semicolon (;), it is recommended to always use the semicolon to end a statement.

The reason is that the semicolon will make your code more readable and helps you avoid many issues that you may encounter.

In addition, you may need to combine and compress the JavaScript code before deploying it to the production environment to remove extra white space to save the bandwidth; without the semicolons, you will have the syntax errors.

You can use a code block that begins with a left curly brace ({) and ends with the right curly brace (}) to combine multiple statements

### Expressions.
An expression is a piece of code that evaluates to a value. For example:
2 + 1
The above expression returns 3 so it is a valid expression.
