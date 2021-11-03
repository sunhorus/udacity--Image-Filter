import { Router, Request, Response } from 'express';
import { filteredimageRouter } from './filteredimage/routes/filteredimage.router';

const router: Router = Router();

router.use('/filteredimage', filteredimageRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`/api/V1`);
});

export const IndexRouter: Router = router;