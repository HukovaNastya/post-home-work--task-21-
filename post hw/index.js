const newForm = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const website = document.querySelector('#website');
const submit = document.querySelector('button');
const container = document.querySelector('.container-user-info');

function createPost(body,cb){
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://jsonplaceholder.typicode.com/users");
    xhr.addEventListener('load',() => {
       const response = JSON.parse(xhr.responseText);
        cb(response);
    
    });
    xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
    xhr.addEventListener('error', () =>{
        console.log('error');
    
    });
    xhr.send(JSON.stringify(body));
}
function cardTemplate(post){
    const card = document.createElement('div');
          card.classList.add('card');
          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = post.title;
          const article = document.createElement('p');
          article.classList.add('card-text');
          article.textContent = post.body;
          cardBody.appendChild(title);
          cardBody.appendChild(article);
          card.appendChild(cardBody);
          return card;

};
function renderPost (response){
    const fragment = document.createDocumentFragment();
         response.forEach(post => {
          const card = cardTemplate(post);
          fragment.appendChild(card);

      });
      container.appendChild(fragment);

}
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    const newPost = {
        title: '',
    body: {},
    userId: 1,
    };
    newPost.title = username.value;
    newPost.body.email = email.value;
    newPost.body.phone = email.value;
    newPost.website = website.value;
    createPost(newPost, response =>{
     
        const card = cardTemplate(response);
        container.insertAdjacentElement('afterbegin',card);
    });

});

