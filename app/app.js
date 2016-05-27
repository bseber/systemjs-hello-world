

export function run () {

    const h = document.createElement ('h1');
          h.innerHTML = 'Hello World';

    document.body.removeChild (document.getElementById ('loading'));
    document.body.appendChild (h);
}
