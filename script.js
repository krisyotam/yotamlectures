document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.post'); // Select all elements with class 'post'
    const loadMoreButton = document.getElementById('load-more');

    // Number of blog posts initially loaded
    let currentPostCount = 3; // Start from 3 as they are already visible
    const postsPerPage = 3; // Number of posts to load each time

    // Function to show more blog posts
    function loadMorePosts() {
        const postsArray = Array.from(blogPosts); // Convert NodeList to Array
        const totalPosts = postsArray.length;
        
        if (currentPostCount >= totalPosts) {
            loadMoreButton.style.display = 'none'; // Hide button if no more posts
            return;
        }

        // Display posts starting from the current post count
        for (let i = currentPostCount; i < Math.min(currentPostCount + postsPerPage, totalPosts); i++) {
            postsArray[i].style.display = 'block';
        }
        
        currentPostCount += postsPerPage;
    }

    loadMoreButton.addEventListener('click', loadMorePosts);

});

