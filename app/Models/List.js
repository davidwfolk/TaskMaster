import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.tasks = data.tasks || []
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `
    <div class="col-3 m-auto border border-white bg-white shadow">
      <button type="button" class="close text-primary" onclick="app.listController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h1 class="text-primary">${this.title}</h1>
        <form onsubmit="app.listController.addTask(event, '${this.id}')">
          <div class="form-group">
            <label class="text-primary" for="taskName">Items:</label>  
            <input type="text" name="taskName" class="form-control text-primary" placeholder="Type an item here..." aria-describedby="helpId">
          </div>
        </form>
        <h5 class="text-primary">Tasks to be Done:</h5>
        <dl class='text-primary'>${this.Task}</dl>
        </div>
        
        `
  }

  get Task() {
    let template = ''
    this.tasks.forEach((task, index) => template += `<dd>
      <div>${task} ${index}</div>
      <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${task}')">
      <span>&times;</span>
      </button>
      </dd>`)
    
    return template
  }

  }