import * as Router from 'koa-router';

const routes = new Router();

routes.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = {
    msg: `server is alive! :)`,
  };
});

export default routes;
