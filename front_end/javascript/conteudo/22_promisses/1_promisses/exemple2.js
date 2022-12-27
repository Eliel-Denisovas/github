let stocks = {
  fruits: ["strawberry", "grapes", "banana", "aple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticky"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

  .then(()=>{
    return order(0000, ()=>console.log('Product has started'))
  })

  .then(()=>{
    return order(2000, ()=>console.log('The fruit was chopped'))
  })

  .then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
  })

  .then(()=>{
    return order(1000, ()=>console.log(`Start the machine`))
  })

  .then(()=>{
    return order(2000, ()=>console.log(`Ice cream placed on ${stocks.holder[0]}`))
  })

  .then(()=>{
    return order(2000, ()=>console.log(`${stocks.toppings[0]} was selected`))
  })

  .then(()=>{
    return order(2000, ()=>console.log(`Ice cream was selected`))
  })

  .catch(()=>{
    console.log('Customer left')
  })

  .finally(()=>{
    console.log('Day ended, shop is closed')
  })
