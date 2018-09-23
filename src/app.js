import pe from 'pretty-error';
pe.start();

import server from './server';

server.listen();

export default server;
