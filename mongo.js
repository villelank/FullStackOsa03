const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const personName = process.argv[3]
const personNumber = process.argv[4]

const url =
  `mongodb+srv://ville:${password}@fullstack-y3kc4.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if( process.argv[2] && process.argv.length<4) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name + " " + person.number)
    })
    mongoose.connection.close()
  })
} else {
  const testPerson = new Person({
    name: personName,
    number: personNumber
  })
  
  testPerson.save().then(response => {
    console.log(`added ${personName} number ${personNumber} to phonebook`);
    mongoose.connection.close();
  })
}
