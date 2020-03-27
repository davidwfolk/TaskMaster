import ListService from "../Services/ListService.js";
import _store from "../store.js"
import List from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  let lists = _store.State.lists

  lists.forEach(list => (template += list.Template));
  document.getElementById("lists").innerHTML = template
}


//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    event.preventDefault()
    let formData = event.target
    let newList = {
      title: formData.listName.value
    }

    ListService.create(newList)
    formData.reset()
    _drawLists()
  }
  delete(listId) {
    console.log(listId)
    ListService.delete(listId)
    _drawLists()
  }

  addTask (event, listId) {
    event.preventDefault()
    let formData = event.target
    // let newTask = {
    //   task: formData.taskName.value
    // }
    let newTask = formData.taskName.value

  ListService.addTask(newTask, listId)
  formData.reset()
  _drawLists()
  }

  deleteTask (taskId) {
    

    _drawLists()
  }
}
