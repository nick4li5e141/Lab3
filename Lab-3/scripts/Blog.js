
// Name:Nikoula Sabeh
//Date: 22/03/2024
//prog name: Blog.js
//Discription: this file or program is designed to fetch and display blog posts(20) on a webpage, it fetches images by using API key from Pixabay

document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('blog-posts');
    // API key and URLs 
    const pixabayAPIKey = '43022652-fbfd1787d6c4dc3351f03eb59';
    const pixabayURL = `https://pixabay.com/api/?key=${pixabayAPIKey}&q=blog&image_type=photo&per_page=20`;

    // images fetching 
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => response.json())
        .then(posts => {
            fetch(pixabayURL)
                .then(response => response.json())
                .then(images => {

                    posts.forEach((post, index) => {
                        //fetching the 20 posts in a spesfic order
                        const postImage = images.hits[index % images.hits.length].webformatURL; 
                        // the spesfic structure the 20 posts will get displayed in will look like
                        const postElementCell = `
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="card mb-4">
                                    <img src="${postImage}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${post.title}</h5>
                                        <p class="card-text">${post.body}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        postsContainer.innerHTML += postElementCell;
                    });
                });
        })
        //catch if there's an error fetching images
        .catch(error => console.error('Error fetching posts or images:', error));
});
