import { Response } from "express"

export function getApi(res: Response) {
  res.json({
    message: "Welcome to the API",
  })
}
