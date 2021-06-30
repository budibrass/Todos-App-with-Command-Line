class View
{
    static help()
    {
        console.log(`node app.js help`);
        console.log(`node app.js list `);
        console.log(`node app.js add <add_task>`);
        console.log(`node app.js finfById <task_id>`);
        console.log(`node app.js delete <task_id>`);
        console.log(`node app.js complete <task_id>`);
        console.log(`node app.js uncomplete <task_id>`);
    }

    static list(data)
    {
        console.log(`===== LIST TODO =====`);
        for (let i = 0; i < data.length; i++)
        {
            console.log(`${data[i].id}. ${data[i].task}, status = ${data[i].status}`);
        }
        // console.table(data);
    }

    static add()
    {
        console.log(`task successfully added`);
    }

    static findById(data)
    {
        console.log(data);
    }

    static deleteData(id)
    {
        console.log(`data dengan id ${id} telah di hapus`);
    }

    static complete(data)
    {
        console.log(data);
    }

    static uncomplete(data)
    {
        console.log(data);
    }
}

module.exports = View