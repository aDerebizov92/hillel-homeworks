let contactBook = {
  contacts: [
    { name: "Максим", phone:"+380637776655", email:"maksim@gmail.com" },
    { name: "Олена", phone:"+380635554433", email:"olena@gmail.com" },
    { name: "Марія", phone:"+380633332211", email:"maria@gmail.com" }
  ],
  addContact: function(name, phone, email) {
    this.contacts.push({ name: name, phone: phone, email: email });
  },
  findContact: function(name) {
    let found = this.contacts.filter(function(contact) {
        return contact.name === name;
    });
    console.log(found);
  }
};
contactBook.findContact("Олена");
contactBook.addContact("Петро", "+380631112233", "petro@gmail.com");
contactBook.findContact("Петро");