
function main() {

  const btn = document.getElementById('btn');
  const test = document.getElementById('test');
  const img = document.getElementById('img');
  btn.addEventListener('click', () => {
    console.log('click');

    const query = window.location.search;
    console.log('location', location);
    const list = query.split('=');
    console.log(list[1]);
  })
}


main();