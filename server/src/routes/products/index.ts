import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { INTERNAL_SERVER_ERROR, OK, NOT_FOUND } from '../../constants/statusCodes';
import { UNKNOWN_ERROR, NOT_FOUND_ERROR } from '../../constants/globals';

const router = Router();
const prisma = new PrismaClient();

router.get('/all', async (_, res) => {
	try {
		const products = await prisma.product.findMany();
		res.status(OK).json(products);
	}
	catch (error) {
		res.status(INTERNAL_SERVER_ERROR).json({ error: UNKNOWN_ERROR });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const product = await prisma.product.findUnique({
			where: { id: Number(id) },
			include: { images: true }
		});
		res.status(OK).json(product);
	}
	catch (error) {
		res.status(NOT_FOUND).json({ error: `${ NOT_FOUND_ERROR }: ${ id }` });
	}
});



export default router;
