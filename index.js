// lets make new instance of Promise class according to scheme below

fetch("https://jsonplaceholder.typicode.com/todos/55")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error.message));

//so now let us optimise promise parsing , by just one '.then' method calling to reduce double Promise

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );
// so now we have wraped fetch method into our custom function and now we can call ony once method then to parse Promise
// so lets call our custom function
getData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
// at above "data" parameter is equal to resolve(json) return and "error" parameter equal to reject(error) return

// and now let us turn into module our custom functio === method

export default getData;
