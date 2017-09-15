import {customElement, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

let data = []

@customElement('nav-bar')
export class NavBar {
  @bindable router;

  configureRouter(config, router) {
    this.router = router;
  }

  constructor() {
  }

  attached() {
    $("#navigationDrawer").ejNavigationDrawer({ targetId: "target", type: "overlay", direction: "left", enableListView: true, listViewSettings: { width: 200, selectedItemIndex: 0, mouseUp: "slideMenuClick", persistSelection: false }, position: "normal" });
    $("#topMenu").ejMenu({ width: 860, height: 34 });
  }
  slideMenuClick(e) {
    alert('test')
  }
}

function slideMenuClick(e) {
  alert('test')
  // $("#navigationDrawer").ejNavigationDrawer("close");
}
