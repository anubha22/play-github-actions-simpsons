const core = require("@actions/core")
const github = require("@actions/github")


try {

  const name = core.getInput("who-to-greet")
  const sayThis = core.getInput("what-to-say")
  console.log(`Hello ${name}`)
  console.log(`${sayThis}`)
  
  const time = new Date()
  core.setOutput("time", time.toTimeString())
  
  console.log(JSON.stringify(github, null, "\t"))

} catch(error) {
  core.setFailed(error.message)
}

 