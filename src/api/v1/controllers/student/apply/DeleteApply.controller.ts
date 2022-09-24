import { Request, Response } from 'express';
import { deleteApplyService } from '../../../services/student/apply/deleteApply.service';
import { getStudentService } from '../../../services/student/getStudent.service';

export default async function DeleteApplyController(req: Request, res: Response) {
    try {
        const student  = await getStudentService(req.body.user.id);
        if (student?.student) {
            const apply = await deleteApplyService(student.id_user,student.student.ci, Number(req.params.id));
            res.status(200).json(apply);
        } else {
            res.status(500).json({message: "You aren't a student"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
