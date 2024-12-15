import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.json('Bienvenido !');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}...`));
