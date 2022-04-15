import express from 'express'
import * as diaryServices from '../services/diary.services'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntiresWithoutSensetiveInfo())
})

router.post('/', (_req, res) => {
  res.json({})
})

export default router
