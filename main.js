const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here

const template = `
  <article>
    <h2>${blogPost.title}</h2>
    <div class="meta">
      <span class="date">Written on ${blogPost.meta.date}</span>
    </div>
    <div class="post">
      <img src="${blogPost.post.image}">
      ${blogPost.post.content}
    </div>
    <div class="site">
      Part of this content was pulled from <a href="${blogPost.site.name}">${blogPost.site.url}</a>
    </div>
  </article>
`;

// Insert the template onto our page
document.querySelector('.container').innerHTML = template


