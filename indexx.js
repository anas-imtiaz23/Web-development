const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/harrykart');
  console.log("you are connected bros and sis");
}
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = 
    'My name is ' + this.name

  console.log(greeting);
}
const Kitten = mongoose.model('harrykitty', kittySchema);
const harrykitty = new Kitten({ name: 'harrykitty' });
// const harrykitty2 = new Kitten({ name: 'harrykitty2' });
harrykitty.save();
harrykitty.speak();
const harrykitty2 = new Kitten({ name: 'harrykitty2' });
harrykitty2.save();
harrykitty2.speak();
console.log(harrykitty2.name);
const kittens =  Kitten.find({name:harrykitty});
console.log(kittens);
