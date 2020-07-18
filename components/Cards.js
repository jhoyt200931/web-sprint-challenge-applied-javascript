// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((successResponse) => {
        console.log(successResponse);
        return successResponse;
    })
    .catch((errorResponse) => {
        console.log(errorResponse);
    })
    .then((successResponse) => {
        const object = successResponse.data.articles;
        cardMaker(object);
    });
    
    const cardMaker = (obj) => {
        const parent = document.querySelector(".cards-container");
        const newArr = new Array(obj.bootstrap, obj.javascript, obj.jquery, obj.node, obj.technology);
        // console.log(newArr);
        newArr.forEach(data => {
        const cardDiv = document.createElement("div");
        const headline = document.createElement("div");
        const author = document.createElement("div");
        const imgDiv = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("span");

        //add classes
        cardDiv.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgDiv.classList.add("img-container");

        //HTML structure
        parent.appendChild(cardDiv);
        cardDiv.appendChild(headline);
        cardDiv.appendChild(author);
        author.appendChild(imgDiv);
        author.appendChild(name);
        imgDiv.appendChild(img);

        //add event listener
        cardDiv.addEventListener("click", () => {
            console.log(headline);
        })
        
        //add content
            data.forEach(text => {
                headline.textContent = text.headline;
                img.src = text.authorPhoto;
                name.textContent = text.authorName;
            })
        })
      
    }