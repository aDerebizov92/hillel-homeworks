let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 }
    ],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};


function sumSalaries(department) {
  let sum = 0;

  for (let key in department) {
    let value = department[key];

    if (Array.isArray(value)) {
      value.forEach(function (person) {
        sum = sum + person.salary;
      });
    } else {
      sum = sum + sumSalaries(value);
    }
  }

  return sum;
}

console.log(sumSalaries(company));