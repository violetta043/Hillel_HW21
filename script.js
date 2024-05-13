function Boo() {
	console.log('start')
  let count = 0;
  const values = [1, 2, 3];

  return {
    next() {
      if (count < values.length) {
        return { value: values[count++], done: false };
      } else {
        console.log('finish');
        return { done: true };
      }
    }
  };
}

const iterator = Boo();
console.log(iterator.next().value); 
console.log(iterator.next().done); 

