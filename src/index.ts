import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json())

const PORT = 9090

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send(`someone pinged here go!! ${new Date().toLocaleDateString()}`)
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
