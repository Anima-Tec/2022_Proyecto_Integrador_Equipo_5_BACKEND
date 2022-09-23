import { Request, Response } from 'express';
import { getJobOfferService } from '../../../services/company/JobOffer/GetJobOffer.service';

export default async function GetJobOfferController(req: Request, res: Response) {
    try {
        const joboffers = await getJobOfferService(Number(req.params.id));
        res.status(200).json(joboffers);
    } catch (error) {
        res.status(500).json(error);
    }
}

/*  let decoded = jwt_decode(token!);
 const { user } = (decoded as JwtPayload & IUserToken);
  */