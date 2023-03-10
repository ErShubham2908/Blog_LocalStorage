const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const dateInput = document.querySelector('#date');
const contentInput = document.querySelector('#content');
const blogPostsDiv = document.querySelector('#blog-posts');
let id = 0;
let blogPosts = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  id = id + 1;
  const title = titleInput.value;
  const author = authorInput.value;
  const date = dateInput.value;
  const content = contentInput.value;

  const blogPost = { id, title, author, date, content};
  blogPosts.push(blogPost);

  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  renderBlogPosts();
  
  form.reset();
});

function renderBlogPosts() {
  blogPostsDiv.innerHTML = '';

  blogPosts.forEach((blogPost) => {
    const blogPostDiv = document.createElement('div');
    blogPostDiv.classList.add('blog-post');

    const idElement = document.createElement('h1');
    idElement.textContent = blogPost.id;

    const titleElement = document.createElement('h1');
    titleElement.textContent = blogPost.title;

    const authorElement = document.createElement('h3');
    authorElement.textContent = blogPost.author;

    const dateElement = document.createElement('h3');
    dateElement.textContent = blogPost.date;

    const contentElement = document.createElement('p');
    contentElement.textContent = blogPost.content;

    blogPostDiv.appendChild(idElement);
    blogPostDiv.appendChild(titleElement);
    blogPostDiv.appendChild(authorElement);
    blogPostDiv.appendChild(dateElement);
    blogPostDiv.appendChild(contentElement);

    blogPostsDiv.appendChild(blogPostDiv);
  });
}

const savedBlogPosts = localStorage.getItem('blogPosts');

if (savedBlogPosts) {
  blogPosts = JSON.parse(savedBlogPosts);
  renderBlogPosts();
}
