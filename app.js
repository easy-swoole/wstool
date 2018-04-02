const Koa      = require('koa')
const colors   = require('colors/safe')
const instance = new Koa()

const options = {
    PORT: 4000,
    staticPath: __dirname,
    staticCache: 3600
}

instance.use(async (context, next) => {
    console.warn(colors.blue('[ WST ] ' + context.method + ' ' + colors.green(context.path)))
    await next();
});

instance.use(require('koa-static')(__dirname, { maxage: options.staticCache }))

instance.listen(options.PORT, function () {
    console.warn(colors.blue('  WebSocket Dev Tools'))
    console.warn(colors.red('  author  : ' + colors.yellow('eValor')))
    console.warn(colors.red('  version : ' + colors.yellow('1.0.0')))
    console.warn(colors.red('  website : ' + colors.reset('http://easyswoole.com\n')))
    console.warn(colors.blue('[ WST ] LISTEN IN ' + colors.green('0.0.0.0:' + options.PORT)))
    console.warn('--------------------------------------------------------')
})