const news = [
  {
    title: "World leaders meet for global summit",
    image: "https://via.placeholder.com/400x200",
    description: "Important discussions are taking place.",
    category: "World"
  },
  {
    title: "Championship final ends in surprise",
    image: "https://via.placeholder.com/400x200",
    description: "A thrilling sports finale.",
    category: "Sports"
  },
  {
    title: "New AI technology released",
    image: "https://via.placeholder.com/400x200",
    description: "Tech industry sees big change.",
    category: "Technology"
  },
  {
    title: "Movie breaks box office records",
    image: "https://via.placeholder.com/400x200",
    description: "Entertainment world shocked.",
    category: "Entertainment"
  },
  {
    title: "International tensions increase",
    image: "https://via.placeholder.com/400x200",
    description: "Global situation being monitored.",
    category: "World"
  }
];

const newsGrid = document.getElementById("newsGrid");

function displayNews(items) {
  newsGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <small><b>${item.category}</b></small>
    `;

    newsGrid.appendChild(card);
  });
}

function filterNews(category) {
  if (category === "All") {
    displayNews(news);
  } else {
    const filtered = news.filter(item => item.category === category);
    displayNews(filtered);
  }
}

/* Load all news on page load */
displayNews(news);
