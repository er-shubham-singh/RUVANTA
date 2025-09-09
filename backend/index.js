import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

import contact from './src/routes/contact.routes.js'; // make sure this file exists & exports a router
app.use('/api', contact);

export default app