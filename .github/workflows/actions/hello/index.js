const core = require("@actions/core")
const github = require("@actions/github")


try {

  const name = core.getInput("who-to-greet")
  const sayThis = core.getInput("what-to-say")
  console.log(`Hello ${name}`)
  console.log(`${sayThis}`)
  
  const time = new Date()
  core.setOutput("time", time.toTimeString())

  const town = "Springfield, USA"
  core.setOutput("town", town)
  
  console.log("Let's have a look at what's in the github object")
  console.log(JSON.stringify(github, null, "\t"))

} catch(error) {
  core.setFailed(error.message)
}

 