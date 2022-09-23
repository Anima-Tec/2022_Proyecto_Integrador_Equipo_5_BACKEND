import { Request, Response } from 'express';
import { getJobOffersService } from '../../../services/company/JobOffer/GetJobOffers.service';

export default async function GetJobOffersController(req: Request, res: Response) {
    try {
        const joboffers = await getJobOffersService();
        res.status(200).json(joboffers);
    } catch (error) {
        res.status(500).json(error);
    }
}

/*  let decoded = jwt_decode(token!);
 const { user } = (decoded as JwtPayload & IUserToken);
  */