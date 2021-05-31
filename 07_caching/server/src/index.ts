#!/usr/bin/env node

import {from, zip} from 'rxjs'
import * as express from 'express'

const natural$ = from([1, 2, 3, 4, 5, 6]).pipe()
const integer$ = from([0, 1, -1, 2, -2, 3])

zip([natural$, integer$]).subscribe(console.log)

const app = express()
const PORT = parseInt(process.env.PORT || '8080')

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
