import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title - data.title
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `
    <div class="col-4 border border-warning rounded shadow">
      <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h1>${this.title}</h1>
        <form onsubmit="app.listController.addList(event, '${this.id}')">
          <div class="form-group">
            <label for="toppingName">Topping Name:</label>
            <input type="text" name="lists" class="form-control" placeholder="Type a topping in here..." aria-describedby="helpId">
          </div>
        </form>
        <h5>To-Dos:</h5>
        <dl>
          ${this.Toppings}
        </dl>
      </div>
    
    `
  }
}
