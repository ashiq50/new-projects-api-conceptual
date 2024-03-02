const loadCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
    // console.log(data.data.news_category)
    const categoryContainer = document.getElementById('category-bar-container');
    data.data.news_category.forEach((item) =>{
        const div = document.createElement('div');
        div.innerHTML = `<button onclick = "loadNews('${item.category_id}')">${item.category_name}</button>`
        categoryContainer.appendChild(div)
    })
}

const loadNews = async(catId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await response.json();
    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML = ''
    data.data.forEach((item) =>{
        console.log(item)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex flex-col-1 lg:flex-col justify-between items-center gap-4">
        <div>
        <img class="w-[200px]" src="${item.author.img}" alt="">
      </div>
      <div class="flex flex-col items-start">
        <h2 class="text-3xl">
        ${item.title}
        </h2>
        <p>
            ${item.details.slice(0,200)}
        </p>
        <div class="flex justify-between">
            <div class="flex justify-around items-center">
                <div class="flex justify-around items-center">
                    <img class="w-[50px]" src="./image/parallelogram.png" alt="">
                </div>
                <div class="">
                    <p>${item.author.name}</p>
                    <p>${item.author.published_date}</p>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <p>aa</p>
                <p>1.5M</p>
            </div>
            <div class="flex justify-center items-center">
                <button>Details</button>
            </div>
        </div>
      </div>
      </div>
        `;
        newsContainer.appendChild(div)
    })
    
}



const handleSearch = ()=>{
    const searchContainer = document.getElementById('search-box').value;
    if(searchContainer){
        loadNews(searchContainer)
    }
    else{
        alert("Please, enter a valid CatId")
    }
}

loadNews('01');

loadCategory()