// Antes de ECMAScript6
/*
function Account(name, document) {
  this.id;
  this.name = name;
  this.document = document;
  this.email;
  this.password;
}
*/

// Despues de ECMAScript6
class Account {
  constructor(name, document) {
    this.id;
    this.name = name;
    this.document = document;
    this.email;
    this.password;
  }
}