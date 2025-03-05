import { z } from 'zod'
import data from './data.json'

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
})

type Data = z.infer<typeof dataSchema>

function output(data: Data) {
  console.log(data)
}

const parsedData = dataSchema.parse(data)

output(parsedData)

export {}
