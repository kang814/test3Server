import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";

const app = new Koa();
const router = new Router();

router.get("/", async(ctx, next) => {
    ctx.status = 200;
    ctx.body = {msg: "Server is Up And Running"};
    await next(); //what does this do???
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params; // 라우트 경로에서 :파라미터명 으로 정의된 값이 ctx.params 안에 설정됩니다.
    ctx.body = name + '의 소개';
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query; // 주소 뒤에 ?id=10 이런식으로 작성된 쿼리는 ctx.request.query 에 파싱됩니다.
    if(id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});

//Middlewares
app.use(json());
app.use(logger());

//Routes
app.use(router.routes()).use(router.allowedMethods);


app.listen(80,() => {
    console.log("Server Started");
});