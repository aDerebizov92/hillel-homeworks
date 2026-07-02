let user = {
  firstName: "Олександр",
  lastName: "Деребізов",
  age: 34,
  city: "Одеса",
  showInfo: function() {
    console.log(`Ім'я: ${this.firstName + " " + this.lastName}, вік: ${this.age}, місто: ${this.city}`);
  }
};

user.showInfo();