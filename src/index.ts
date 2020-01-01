import configuration from './config/configuration';
import Server from './Server';
console.log('Inside config');
const server = new Server(configuration);
server.bootstrap().run();
