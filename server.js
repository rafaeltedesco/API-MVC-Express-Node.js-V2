const app = require('./index')
const chalk = require('chalk')

app.listen(5000, ()=> {
  console.log(chalk.green.inverse.bold('Up and running'))
})