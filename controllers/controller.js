const Todo = require("../models/todo")
const View = require("../views/view")

class Controller
{
    static help()
    {
        View.help()
    }

    static list()
    {
        let data = Todo.list()
        View.list(data)
    }

    static add(task)
    {
        Todo.add(task)
        View.add()
    }

    static findById(id)
    {
        let byId = Todo.findById(id)
        View.findById(byId)
    }

    static deleteData(id)
    {
        Todo.deleteData(id)
        View.deleteData(id)
    }

    static complete(id)
    {
        let data = Todo.complete(id)
        View.complete(data)
    }

    static uncomplete(id)
    {
        let data = Todo.uncomplete(id)
        View.uncomplete(data)
    }
}

module.exports = Controller