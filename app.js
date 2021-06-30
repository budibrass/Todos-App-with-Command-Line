const command = process.argv[2];
const params = process.argv.slice(3);
const Controller = require("./controllers/controller")

if (command === "help")
{
    Controller.help()
}
else if (command === "list")
{
    Controller.list()
}
else if (command === "add")
{
    Controller.add(params[0])
}
else if (command === `findById`)
{
    Controller.findById(params[0])
}
else if (command === `delete`)
{
    Controller.deleteData(params[0])
}
else if (command === `complete`)
{
    Controller.complete(params[0])
}
else if (command === `uncomplete`)
{
    Controller.uncomplete(params[0])
}