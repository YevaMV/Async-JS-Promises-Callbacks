const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
    navigator.geolocation.getCurrentPosition(posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
     
    }, error => {
      console.log(error)
    }
  );
  console.log('getting position...')
};

button.addEventListener('click', trackUserHandler);