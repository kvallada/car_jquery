$(document).ready(function() {
    // Book database
    const books = {
        fiction: [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
            { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
            { title: "1984", author: "George Orwell", year: 1949 }
        ],
        mystery: [
            { title: "The Silent Patient", author: "Alex Michaelides", year: 2019 },
            { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
            { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 }
        ],
        scifi: [
            { title: "Dune", author: "Frank Herbert", year: 1965 },
            { title: "Foundation", author: "Isaac Asimov", year: 1951 },
            { title: "Ender's Game", author: "Orson Scott Card", year: 1985 }
        ]
    };

    // Event handler for genre buttons
    $('.genre-btn').on('click', function() {
        const genre = $(this).data('genre');
        displayBooks(genre);
    });

    // Function to display books
    function displayBooks(genre) {
        // Clear previous books
        $('#bookList').empty();
        
        // Create and append new book cards
        books[genre].forEach(book => {
            const bookCard = $('<div>')
                .addClass('book-card')
                .html(`
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Year: ${book.year}</p>
                    <button class="heart-btn">❤ Add to List</button>
                `);
            
            $('#bookList').append(bookCard);
            bookCard.fadeIn(500);
        });
    }

    // Event delegation for heart buttons
    $('#bookList').on('click', '.heart-btn', function() {
        const bookCard = $(this).parent();
        const bookTitle = bookCard.find('h3').text();
        
        // Add to reading list
        const listItem = $('<li>').text(bookTitle);
        $('#savedBooks').append(listItem);
        
        // Animate the card
        bookCard.addClass('favorite');
        bookCard.fadeOut(300).fadeIn(300);
        
        // Disable the button
        $(this).prop('disabled', true).text('Added ✓');
    });

    // Hover effects for buttons
    $('.genre-btn').hover(
        function() {
            $(this).css('background-color', '#45a049');
        },
        function() {
            $(this).css('background-color', '#4CAF50');
        }
    );
});