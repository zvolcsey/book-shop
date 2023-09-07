import { NextFunction, Request, Response } from "express";

export function setHeader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'http://localhost:5173',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PATCH, DELETE',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  )
  next()
}