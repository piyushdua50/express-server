import * as bcrypt from 'bcrypt';
import UserRepository from '.././repositories/user/UserRepository';
export default function seedData() {
  console.log('Inside Seed Function');
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const pass = bcrypt.hashSync(process.env.Password, salt);
  const repository = new UserRepository();

  repository.count().then((count) => {
    if (count === 0) {
      repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        password: pass,
        role: 'head-trainer',
      });
      repository.create({
        email: 'trainer@successive.tech',
        name: 'Trainer',
        password: pass,
        role: 'trainer',
      });
    }
  });
}
