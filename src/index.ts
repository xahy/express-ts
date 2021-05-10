import express from 'express';
const PORT = 4001;
(async (): Promise<void> => {
    const app = express()

    app.get('/', (_req, res) => res.send('Express + TypeScript Server'));

    app.listen({ port: PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT}`)
    })
})()
