const button = document.querySelector('button#first');

button.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './lazy')
    .then(module => {
      console.log('count', module.increment());
     });
};

console.log('Main chunk');
