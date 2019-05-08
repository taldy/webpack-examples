const button = document.querySelector('button');

button.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './lazy')
    .then(module => {
      console.log('count', module.increment());
     });
};

console.log('Main chunk');
