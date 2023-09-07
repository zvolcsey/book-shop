import { AxiosResponse } from "axios"
import instance from "../../app/axios"
import type { IBooksList } from "@shared/books.types"

export async function initBooks(): Promise<IBooksList> {
  const { data }: AxiosResponse<IBooksList> = await instance.get("/api/books", {
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
  })
  return data
}
