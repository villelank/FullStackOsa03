const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())

app.use(morgan('tiny'))

morgan.token('type', function (req, res) { return JSON.stringify(req.body)})

app.use(morgan(':method :url :response-time :type'))

app.use(cors())

let persons = [
  { name: 'Arto Hellas', 
    number: '040-123456',
    id: 1
  },
  { name: 'Ada Lovelace', 
    number: '39-44-5323523',
    id: 2
  },
  { name: 'Dan Abramov', 
    number: '12-43-234345',
    id: 3 
  },
  { name: 'Mary Poppendieck', 
    number: '39-23-6423122',
    id: 4
  }
]

const dateNow = Date()

let info = `<p>Phonebook has info for ${persons.length} people</p><p>${dateNow}</p>`

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(info)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const createNewId = () => {
  return newId = Math.floor(Math.random() * Math.floor(1000000))
}

app.post('/api/persons', (req, res) => {
  
  const body = req.body
  
  if( !body.name ) {
    console.log('name is missing')
    return res.status(400).json({
      error: 'name is missing'
    })
  }

  if( !body.number ) {
    console.log('number is missing')
    return res.status(400).json({
      error: 'number is missing'
    })
  }

  const samePerson = persons.find(person => person.name === body.name)
  if(samePerson) {
    console.log('name is missing')
    return res.status(400).json({
      error: 'name is missing'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: createNewId()
  }

  persons = persons.concat(person)

  res.json(person)
})

/*
app.post('/api/persons/:id', (req, res) => {
  const body = req.body
  const id = Number(req.params.id)
  
  if( !body.name ) {
    console.log('name is missing')
    return res.status(400).json({
      error: 'name is missing'
    })
  }

  if( !body.number ) {
    console.log('number is missing')
    return res.status(400).json({
      error: 'number is missing'
    })
  }
  const updatedPerson = {
    name: body.name,
    number: body.number,
    id: id
  }
  const updatedPersons = [];
   // loop through list to find and replace one item
   persons.forEach(person => {
      if (person.id === id) {
         updatedPersons.push(updatedPerson);
      } else {
         updatedPersons.push(person);
      }
   });
  
  res.json(updatedPersons)

})
*/

const PORT = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})