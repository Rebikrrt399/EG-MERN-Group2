import express from "express"
import "dotenv/config";
import cors from "cors";

const app = express()
app.use(cors())

app.get('/', (req, res) => res.send("Server is working"))

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))