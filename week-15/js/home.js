let previousPage = document.querySelector(
  '[data-component = "pagination:previous"]'
);
let selectPage = document.querySelector('[data-component="pagination:select"]');
let nextPage = document.querySelector('[ data-component="pagination:next"]');

let buildPagination = function (pagination) {
  let newContent = '';
  for (let i = 1; i <= pagination.items.count; i++) {
    newContent = newContent + `<option value = "${i}">${i}</option>`;
  }
  selectPage.innerHTML = newContent;
};
let renderList = function (data) {
  let newContent = '';

  let listView = document.querySelector('[data-component="list"]');
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let newItemContent = `
    <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
      <a href="details.html?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
        <span class="position-absolute badge bg-danger top-0 end-0">
            <i class="bi bi-star-fill"></i> ${item.score}
        </span>
        <span class="d-flex flex-column justify-content-center">
            <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
            <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
        </span>
      </a>
    </div>`;
    newContent = newContent + newItemContent;
  }

  listView.innerHTML = newContent;
};

fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    let data = result.data;

    let pagination = result.pagination;

    buildPagination(pagination);
    renderList(data);
  });

let loadListWithPageNumber = function (pageNumber) {
  fetch(`https://api.jikan.moe/v4/top/anime?page=${pageNumber}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      let data = result.data;

      renderList(data);
    });
};

//function 'change' khi thay doi page no se load lai page
selectPage.addEventListener('change', function () {
  let paginationSelect = selectPage.value;
  loadListWithPageNumber(paginationSelect);
});

//function click cua next page
nextPage.addEventListener('click', function () {
  let currentPageValue = selectPage.value;
  currentPageValue = Number(currentPageValue);
  let newPageValue = currentPageValue + 1;

  // lay cai option cuoi cung trong pagination
  let allOptions = selectPage.querySelectorAll('option');
  let lastOption = allOptions[allOptions.length - 1];
  let lastOptionValue = lastOption.value;
  // chuyen doi qua thanh so
  lastOptionValue = Number(lastOptionValue);

  if (newPageValue <= lastOptionValue) {
    selectPage.value = newPageValue;
    loadListWithPageNumber(newPageValue);
  }
});

//function click cua prev page
previousPage.addEventListener('click', function () {
  let currentPageValue = selectPage.value;
  currentPageValue = Number(currentPageValue);
  let newPageValue = currentPageValue - 1;

  //page co gia tri thap nhat la 1
  if (newPageValue >= 1) {
    selectPage.value = newPageValue;
    loadListWithPageNumber(newPageValue);
  }
});

let loader = document.querySelector('[data-component="loader"]');

let loadList = function () {
  let page = paginationSelect.value;

  loader.classList.remove('d-none');

  fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      renderList(result);
      loader.classList.add('d-none');
    });
};
