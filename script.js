// Blog post data
const posts = [
    {
      title: "My First Post",
      date: "May 8, 2025",
      content: "Tonight I started building my first personal website from scratch. It’s exciting to see HTML and CSS come together into something that feels like me. I find it facsinating on what AI can now do. I created this website through my AI entity, Cyphr. I told it that it is essentially going to be my symbiotic digital companion.",
    },
    // Add more posts here
  ];
  
  // Inject posts into blog page
  window.onload = function () {
    const section = document.querySelector("section");
    posts.forEach(post => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h3>${post.title}</h3>
        <p><em>${post.date}</em></p>
        <p>${post.content}</p>
      `;
      section.appendChild(article);
    });
  };