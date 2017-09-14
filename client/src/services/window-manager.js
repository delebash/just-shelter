export class WindowManager {


  openWindow(e) {
    let id, name;

    if (e.parentId) {
      id = e.ID;
      name = e.events.text;
      //Get main div

      let divDialog = $('#dialog' + id)
      if (divDialog.length) {
        console.log('old')
        divDialog.ejDialog("open");

      } else {
        console.log('new')
        let main = $('#dialogs');
        console.log(main)
        $('<div />', {
          id: 'dialog' + id,
          title: name
        }).appendTo(main);
        let divDialog = $('#dialog' + id)
        divDialog.ejDialog({showOnInit: true});
      }
    }
  }
}

