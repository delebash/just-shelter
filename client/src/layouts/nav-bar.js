import {WindowManager} from '../services/window-manager'
import {inject} from 'aurelia-framework'
import topMenuItems from '../services/topMenuItems'

@inject(WindowManager)
export class NavBar {

  constructor(windowmanager) {
    this.windowmanager = windowmanager
  }

  attached() {

    $("#topMenu").ejMenu({
      click: this.windowmanager.openWindow,
      fields: {
        dataSource: topMenuItems, id: "id", parentId: "parentId", text: "text",
        spriteCssClass: "sprite"
      }
    });
  }

}

