function goToNextQuestion() {
    const genre = document.querySelector('input[name="genre"]:checked');
    if (!genre) {
        alert('Please select a genre.');
        return;
    }

    localStorage.setItem('selectedGenre', genre.value);
    window.location.href = 'question2.html';
}

function submitForm() {
    const tone = document.querySelector('input[name="tone"]:checked');
    if (!tone) {
        alert('Please select a tone.');
        return;
    }

    localStorage.setItem('selectedTone', tone.value);
    window.location.href = 'result.html';
}

document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('result.html')) {
        const genre = localStorage.getItem('selectedGenre');
        const tone = localStorage.getItem('selectedTone');

        let bookRecommendation = '';
        let bookDescription = '';
        let bookImage = '';

        if (genre === 'Romance' && tone === 'fun') {
            bookRecommendation = "Funny Story by Emily Henry";
            bookDescription = "You would like this book!!";
            bookImage = "https://m.media-amazon.com/images/I/71PSVpqu3vL._AC_UF1000,1000_QL80_.jpg"; 
        } else if (genre === 'Romance' && tone === 'serious') {
            bookRecommendation = "Binding 13 by Chloe Walsh";
            bookDescription = "This is a serious romance novel!";
            bookImage = "https://m.media-amazon.com/images/I/81qgQ2eFh3L._AC_UF1000,1000_QL80_.jpg";
        } else if (genre === 'Sci-fi' && tone === 'fun') {
            bookRecommendation = "Red Rising by Pierce Brown";
            bookDescription = "A thrilling and fun Sci-fi adventure!";
            bookImage = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461354651l/15839976.jpg"; 
        } else if (genre === 'Sci-fi' && tone === 'serious') {
            bookRecommendation = "Scythe by Neal Shusterman";
            bookDescription = "A serious and thought-provoking Sci-fi novel!";
            bookImage = "https://m.media-amazon.com/images/I/61Wldxk1YAL._AC_UF894,1000_QL80_.jpg"; 
        } else if (genre === 'Fantasy' && tone === 'fun') {
            bookRecommendation = "The Young Elites by Marie Lu";
            bookDescription = "A fun and exciting fantasy story!";
            bookImage = "https://m.media-amazon.com/images/I/61gZG9RWlPL._AC_UF1000,1000_QL80_.jpg"; 
        } else if (genre === 'Fantasy' && tone === 'serious') {
            bookRecommendation = "Jade City by Fonda Lee";
            bookDescription = "A serious and epic fantasy tale!";
            bookImage = "https://www.fondalee.com/wp-content/uploads/2017/05/Jade-City-Web-Resolution.jpg"; 
        }

        document.getElementById('bookRecommendation').innerText = bookRecommendation;
        document.getElementById('bookDescription').innerText = bookDescription;
        document.getElementById('bookImage').src = bookImage;
    }
});

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    alert("Thank you for your feedback: " + feedback);
}