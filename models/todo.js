const fs = require("fs")

class Todo
{
    constructor(id, task, status)
    {
        this.id = id;
        this.task = task;
        this.status = status || "uncomplete";
    }

    static list()
    {
        let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
        let todo = []

        for (let i = 0; i < data.length; i++)
        {
            todo.push(new Todo(data[i].id, data[i].task, data[i].status))
        }

        return todo;
    }

    static add(task)
    {
        let data = Todo.list()
        let newId = data[data.length - 1].id + 1;

        data.push(new Todo(newId, task))

        Todo.save(data)
    }

    static findById(id)
    {
        let data = Todo.list()

        for (let i = 0; i < data.length; i++)
        {
            if (Number(id) === data[i].id)
            {
                return (data[i]);
            }
        }
        return `data not found`
    }

    static deleteData(id)
    {
        let data = Todo.list()
        
        for (let i = 0; i < data.length; i++)
        {
            if(Number(id) === data[i].id)
            {
                data.splice(i, 1)
            }
        }

        Todo.save(data)
    }

    static complete(id)
    {
        let data = Todo.list()

        for (let i = 0; i < data.length; i++)
        {
            if (Number(id) === data[i].id)
            {
                if (data[i].status === "uncomplete")
                {
                    data[i].status = "complete"
                    Todo.save(data)
                    return `CONGRATS, data telah diubah menjadi COMPLETE`
                }
            }
        }
        return `!!! TASK ANDA TIDAK DAPAT DIUBAH KARENA KARENA SUDAH COMPLETE`
    }

    static uncomplete(id)
    {
        let data = Todo.list()

        for (let i = 0; i < data.length; i++)
        {
            if (Number(id) === data[i].id)
            {
                if (data[i].status === "complete")
                {
                    data[i].status = "uncomplete"
                    Todo.save(data)
                    return `CONGRATS, data telah diubah menjadi UNCOMPLETE`
                }
            }
        }
        return `!!! TASK ANDA TIDAK DAPAT DIUBAH KARENA KARENA MASIH UNCOMPLETE`
    }

    static save(data)
    {
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 4))
        return `success`
    }
}

module.exports = Todo;