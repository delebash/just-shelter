import 'bootstrap'

export class App {
  constructor() {

  }

  attached() {
    // $("#button").ejButton({
    //   size: "normal",
    //   showRoundedCorner: true,
    //   create: this.onCreate()
    // });
    // dragObj = $("#button").data("ejDraggable");
  }

  openDialog() {

  }

  onCreate(args) {
    $('#button').ejDraggable({
      dragArea: "#desktop",
      dragStop: this.onClientDragStop,
      helper: function (event) {
        return $(event.element);
      }
    });
  }

  slideMenuClick(e) {
    alert('test')
  }

  onClientDragStop(e) {
    console.log(e)
  }
}

