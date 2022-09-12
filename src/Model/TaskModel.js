class TaskModel{
    constructor(id,title,context,completed){
      this.id= id;
      this.title= title;
      this.context= context;
      this.completed = completed;
    }
}

module.exports.TaskModel = TaskModel;