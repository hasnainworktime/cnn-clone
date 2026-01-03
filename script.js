const news = [
  {
    title: "World leaders meet for global summit",
    image: "https://via.placeholder.com/400x200",
    description: "Important discussions are taking place."
  },
  {
    title: "Tech company launches new product",
    image: "https://via.placeholder.com/400x200",
    description: "The latest innovation hits the market."
  },
  {
    title: "Sports team wins championship",
    image: "https://via.placeholder.com/400x200",
    description: "Fans celebrate historic victory."
  },
  {
    title: "New movie breaks box office records",
    image: "https://via.placeholder.com/400x200",
    description: "Entertainment industry surprised."
  }
];

const newsGrid = document.getElementById("newsGrid");

news.forEach(item => {
  const card = document.createElement("div");
  card.className = "news-card";

  card.innerHTML = `
    <img src="${item.image}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  newsGrid.appendChild(card);
});
