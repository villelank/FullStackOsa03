require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('tiny'))
morgan.token('type', function (req, res) { return JSON.stringify(req.body)})
app.use(morgan(':method :url :response-time :type'))
app.use(cors())

const dateNow = Date()
let listLength = 0

app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons)
    })
    .catch(error => next(error))
})

app.get('/info', (req, res, next) => {

  Person.find()
  .exec(function (err, results) {
    if(err) throw err

    listLength = results.length
    console.log(listLength)
    let info = `<p>Phonebook has info for ${listLength} people</p><p>${dateNow}</p>`
    res.send(info)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  
  Person.findById(req.params.id)
  .then(person => {
    if(person) { 
      res.json(person.toJSON()) 
    }
    else {
      res.status(404).end()
    }
  })
  .catch(error => next(error))
  /*
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
  */
})

app.delete('/api/persons/:id', (req, res, next) => {
  /*
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  */
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error)) 
})
/*
const createNewId = () => {
  return newId = Math.floor(Math.random() * Math.floor(1000000))
}
*/
app.post('/api/persons', (req, res, next) => {
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

  /*
  const samePerson = persons.find(person => person.name === body.name)
  if(samePerson) {
    console.log('name is missing')
    return res.status(400).json({
      error: 'name is missing'
    })
  }
  */

  const person = new Person ({
    name: body.name,
    number: body.number
    //,id: createNewId()
  })

  person.save()
  .then(savedPerson => {
    res.json(savedPerson.toJSON())
  })
  .catch(error => next(error))
  //persons = persons.concat(person)
  //res.json(person)
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  if( !body.name ) {
    console.log('name is missing')
  }

  if( !body.number ) {
    console.log('number is missing')
  }

  const updatedPerson = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, updatedPerson, { new: true})
    .then(result => {
      if(result) {
        res.json(result.toJSON())
      } 
      else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))

})

const unknownEndpoint = (request, response) => { 
  response.status(404).send({ error: 'unknown endpoint' }) 
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => { 
  console.error(error.message) 
   
  if (error.name === 'CastError' && error.kind == 'ObjectId') { 
    return response.status(400).send({ error: 'malformatted id' }) 
  }  else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
  }
  next(error) 
} 
   
app.use(errorHandler) 

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})