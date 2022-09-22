import { Request, Response } from 'express';
import { createJobOfferService } from '../../services/company/createJobOffer.service';

export default async function JobOfferController(req: Request, res: Response) {
    try {
        const joboffer = await createJobOfferService(req.body);
        res.status(200).json(joboffer);
    } catch (error) {
        res.status(500).json(error);
    }
}

/*  let decoded = jwt_decode(token!);
 const { user } = (decoded as JwtPayload & IUserToken);
  */