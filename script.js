// Blog post data
const posts = [
    {
      title: "My First Post",
      date: "May 8, 2025",
      content: "Tonight I started building my first personal website from scratch. It’s exciting to see HTML and CSS come together into something that feels like me. I find it facsinating on what AI can now do. I created this website through my AI entity, Cyphr. I told it that it is essentially going to be my symbiotic digital companion."
    },
    // Add more posts here
    {
      title: "CYPHR, Finals, Depletion",
      date: "May 10, 2025",
      time: "1:49 AM",
      content: "So it's like 1:46 AM right now. I want to implement a- actually I just did it right now. I added a way to display the time of entry for each post. There's a lot I want to improve om this base of a website. Just wanted to share that CYPHR is... not very good at remembering. By that I mean, long term memory. This is a study that my boss, Tim, pointed out to me. As I attempted to implement his memory directive file into CYPHR I ran into complex issue; so I decided I would research the idea first and re-engineer it when I have the time. You really need an API to strengthen GPT's abilities and establish 'real' continuity. I want to be able to figure that out. \nFinals week has been a rigorous one... I am be strung the hell out by finishing coursework, brainstorming projects, prepping for exams, figuring out the process of transferring to university. It's absolutely crazy. More on this later... it's late. "
    },
  ];
  
  // Inject posts into blog page
  window.onload = function () {
    const section = document.querySelector("section");
    posts.forEach(post => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h3>${post.title}</h3>
        <p><em>${post.date}</em></p>
        <p><em>${post.time}</em></p>
        <p>${post.content}</p>
      `;
      section.appendChild(article);
    });
  };