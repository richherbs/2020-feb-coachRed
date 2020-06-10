import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/registerCoach'
import loginCoach from './controllers/loginCoach'
const app = express();

const routes = (app : express.Application) :void => {
    app.get('/', (req,res)=>{res.sendFile('index.html',{root: "./"})})
    app.get('/dist/styles/styles.css', (req,res)=>{res.sendFile('dist/styles/styles.css',{root: "./"})})
    app.get('/sport', getAllSports)
    app.post('/coach', sendFormInfo)
    app.post('/loginCoach', loginCoach)
}

export default routes