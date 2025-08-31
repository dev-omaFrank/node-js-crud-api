import  express  from "express";
import usersRoute from './routes/users.js';

const app = express();
const port = 5000;

app.use(express.json());
app.get('/', (req, res) => {
    console.log('This is the get route');
    res.send('Hello World');
})
app.use('/users', usersRoute);
app.listen(port, () => console.log(`Server running on port: ${port}`));