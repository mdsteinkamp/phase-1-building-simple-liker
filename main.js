// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.querySelectorAll('.like-glyph');

for (const glyph of allHearts) {
  glyph.addEventListener('click', likeCallback)
}

function likeCallback(event) {
  const heart = event.target;
  if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
    return
  }
  mimicServerCall()
  .then(function() {
    console.log(heart)
    heart.textContent = FULL_HEART; 
    heart.classList.add('activated-heart')
  })
  .catch(function(error) {
    alert(error)
    const modal = document.querySelector('#modal')
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('hidden'), 3000);
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
