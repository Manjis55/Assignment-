const apiKey = 'zArA9OVqG7Lx2giwdbtFqPjNI44SQMJS'; // Your Giphy API Key

function searchGiphy() {
    const searchTerm = document.getElementById('search-term').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifContainer = document.getElementById('gif-container');
            gifContainer.innerHTML = ''; // Clear previous results

            data.data.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                gifContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
