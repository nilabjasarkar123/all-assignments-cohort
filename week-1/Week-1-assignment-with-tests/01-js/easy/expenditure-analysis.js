/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimate  = {};

  for(var i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let price = transactions[i].price
    if(spendEstimate[category]) {
      spendEstimate[category] = spendEstimate[category] + price;
      
    }
    else {
      spendEstimate[category] = price;
    }
  }
  //console.log("category",category, price);
  var keys = Object.keys(spendEstimate);
  let ans = [];
  for(var j = 0; j < keys.length; j++) {
    var obj = {
      category: keys[j],
      totalSpent: spendEstimate[keys[j]]
    }
    ans.push(obj);
  }
  //console.log("ans", ans)
  return ans;

}

module.exports = calculateTotalSpentByCategory;

// let spend = {};
// for(let proparty in transactions) {
//   if(spend[proparty.category]) {
//     spend[proparty.category] = spend[proparty.category] + proparty.price;
//   }
//   else {
//     spend[proparty.category] = proparty.price;
//   }
// }
// console.log(spend);
// var keys = Object.keys(spend);
//  console.log("ans is",ans);
// var ans = [];
// for(var i in keys) {
//   var category = i;
//   var obj = {
//     category: category,
//     totalSpent: spend[category]
//   }
//   ans.push(obj);
// }
// return ans;