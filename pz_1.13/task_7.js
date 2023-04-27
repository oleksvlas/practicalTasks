// for..in для обходу властивостей об'єкта. Якщо об'єкт буде не визначеним, буде повернено 0, а для масивів буде використана властивість length
function count(obj) {
    if (typeof obj === 'undefined') return 0;
    if (Array.isArray(obj)) return obj.length;
    let count = 0;
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) count++;
    }
    return count;
  }
  let a = { a: 1, b: 2 };
  console.log(count(a)); // 2
  
  let b = function () {};
  console.log(count(b)); // 0
  
  let c = [1, 2, 3];
  console.log(count(c)); // 3
  
  let d = [];
  d[100] = 1;
  console.log(count(d)); // 1