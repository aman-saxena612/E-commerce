import express from "express";
import path from "path";
require('dotenv').config();
import { AppDataSource } from "./config/db";
import productRoutes from "./routes/productRoutes";
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', productRoutes);

app.get("/", (req, res) => {
    res.send("Hello from server");
});

AppDataSource.initialize()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`DB Connected!`)
    })
})
.catch((error) => {
    console.log("DB connection error", error);
})