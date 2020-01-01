import { Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
class TraineeController {
  public static getInstance(instance: TraineeController) {
    if (!instance) {
      instance = new TraineeController();
    }
    return instance;
  }

  public get(req: Request, res: Response) {
    console.log('Inside get method');
    const data = [
      {
        name: 'trainee1',
      },
      {
        name: 'trainee2',
      },
    ];
    res.status(200);

    res.send(successHandler('Ok', 'Successfully Fetch Trainee', data));
  }

  public create(req: Request, res: Response) {
    console.log('Inside create method');
    const { name, id } = req.body;
    if (!name) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'name is not present' });
    }
    if (!id) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'ID is not present' });
    } else {
      res.status(200).send({
        data: { name, id },
        message: 'Successfully Created',
        status: 'ok',
      });
    }
  }

  public put(req: Request, res: Response) {
    console.log('Inside put method');
    const { name, id } = req.body;
    if (!id) {
      res
        .status(400)
        .send({ status: 'Bad request', message: 'ID is not present' });
    } else {
      res.status(200).send({
        data: { name, id },
        message: 'Successfully Updated',
        status: 'ok',
      });
    }
  }
  public delete(req: Request, res: Response) {
    console.log('Inside delete method');
    const id = req.params.id;
    res.status(200).send({
      data: 'null',
      message: `Successfully deleted Id - ${id}`,
      status: 'ok',
    });
  }
}

export default TraineeController.getInstance(new TraineeController());
