import express from 'express';
import router from './src/routes/routes';
import errorHandler from './src/middlewares/errorHandler';
import { AppDataSource } from './src/data-source';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/', router);

app.use(errorHandler);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });