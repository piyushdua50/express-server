import * as mongoose from 'mongoose';
import seedData from '../seedData';
class Database {
  public static open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        mongoURL,
        { useNewUrlParser: true },
        (err) => {
          if (err) {
            reject('Error occurred in connecting to the Database');
          } else {
            console.log(
              'Successfully connected to the Database ...................',
            );
            resolve({ data: 'Hello Users' });
          }
          seedData();
        },
      );
    });
  }

  public static disconnect() {
    if (mongoose.disconnect()) {
      console.log('Successfully disconnected...........................');
    } else {
      console.log('Error in disconnecting');
    }
  }
}

export default Database;
