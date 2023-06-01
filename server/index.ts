import express from 'express';
import { PORT } from './constants';

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
	console.log('Hello World');

	res.status(200).json({ greet: 'Hello'});
});

app.listen(PORT, () => {
	console.log(`🚀️ Server stared successfully at: http://localhost:${PORT} 🚀️`);
});

