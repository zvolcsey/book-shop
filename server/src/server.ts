import app from "./app"

app.listen(process.env.API_PORT, () => {
  console.log(`Api running on port ${process.env.API_PORT}`)
})
