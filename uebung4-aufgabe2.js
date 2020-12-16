const MAX_ELEMS = 30;

function *lecture_solution() {
  for (let n = 0; n < MAX_ELEMS * 15; n++) {
    yield 4*(2*n+1);
    yield 8*(2*n+1);
  }
}
function *my_solution() {
  for (let n = 0; n < MAX_ELEMS * 15; n++) {
    if (n % 4 != 0) {
      yield 4*n;
    }
  }
}
function format(iterable) {
  let arr = [...iterable].slice(0); // shallow copy
  arr.sort((a, b) => a - b);
  return JSON.stringify(arr.slice(0, MAX_ELEMS));
}

const str = "lecture solution:" + format(lecture_solution()) + "\nmy solution:     " + format(my_solution());

// in browser: document.innerHTML.body += "<code><pre>" + str + "</pre></code>";
console.log(str);