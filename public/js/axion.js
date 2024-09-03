const select = document.querySelector("#state");

select.addEventListener("change", function () {
    const selectedValue = this.value;

    // Send the selected value to the backend
    axios.post('/', { state: selectedValue })
        .then(response => {
            const heritageSites = response.data;
            const cardContainer = document.querySelector('.ca');
            cardContainer.innerHTML = ''; // Clear existing cards

            // Populate cards based on the fetched data
            heritageSites.forEach(site => {
                const card = `
                    <div class="card" style="width: 18rem;">
                <img src="${site.imageUrl[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${site.name} </h5>
                    <a href="/explore/site/${site._id}" class="btn btn-primary"> go to ${site.name} </a>
                </div>
            </div>
                `;
                cardContainer.innerHTML += card;
            });
        })
        .catch(error => {
            console.error('Error fetching heritage sites:', error);
        });
});
