const books=[
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper", year:1960 },
    { title: "The Great Gatsby", author: "Fitzgerald", year: 1925 },
    { title: "Think", author: "Sanu", year: 2009 },
    { title: "Grow rich", author: "Don", year: 2010 },
    { title: "Science", author: "Hitesh", year: 2000 }];

    function logBookTitleInAlphabeticalOrder(books,logBookTitle){
        const bookTitle=books.map(books=>books.title);
        const sortedTitle=bookTitle.sort();
        logBookTitle(sortedTitle);
    };

    function logBookTitle(title){
        console.log("Book Title In Alphabetical Order:");
        title.forEach(title =>  console.log(title));
    };

logBookTitleInAlphabeticalOrder(books,logBookTitle);