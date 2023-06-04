import express from 'express';
import swaggerUI from 'swagger-ui-express';
import productsRoutes from './routes/products';
import authRoute from './routes/user/auth';
import { authenticateUser  } from './middlewares/auth';
import { PORT } from './constants/globals';
import { docs } from './swagger/docs';

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/product', authenticateUser, productsRoutes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
	console.log(`🚀️ Server stared successfully at: http://localhost:${ PORT } 🚀️`);
});

