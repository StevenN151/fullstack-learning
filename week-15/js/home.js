fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);

    //figure out the kind of data we will use to render the list later
    //in this case it's result.data
    const data = result.data;

    let listView = document.querySelector('[data-component="list"]');

    let newContent = '';

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      console.log(`item at index ${i}`, item);
      newContent =
        newContent +
        `
        <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
          <a href="details.html?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
            <span class="position-absolute badge bg-danger top-0 end-0">
                <i class="bi bi-star-fill"></i>${item.score}
            </span>
            <span class="d-flex flex-column justify-content-center">
                <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
                <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
            </span>
          </a>
        </div>`;
    }
    listView.innerHTML = newContent;
  });
