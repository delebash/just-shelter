var data = [
  {id: 1, text: "Group A", parentId: null},
  {id: 2, text: "Group B", parentId: null},
  {id: 3, text: "Group C", parentId: null},
  {id: 4, text: "Group D", parentId: null},
  {id: 5, text: "Group E", parentId: null},
  //first level child
  {id: 11, parentId: 1, text: "Algeria", sprite: "e-icon flag-dz"},
  {id: 12, parentId: 1, text: "Armenia", sprite: "flag-am"},
  {id: 13, parentId: 1, text: "Bangladesh", sprite: "flag-bangladesh"},
  {id: 14, parentId: 1, text: "Cuba", sprite: "flag-cu"},
  {id: 15, parentId: 2, text: "Denmark", sprite: "flag-denmark"},
  {id: 16, parentId: 2, text: "Egypt", sprite: "flag-eg"},
  {id: 17, parentId: 3, text: "Finland", sprite: "flag-fi"},
  {id: 18, parentId: 3, text: "India", sprite: "flag-in"},
  {id: 19, parentId: 3, text: "Malaysia", sprite: "flag-my"},
  {id: 20, parentId: 4, text: "New Zealand", sprite: "flag-new-zealand"},
  {id: 21, parentId: 4, text: "Norway", sprite: "flag-no"},
  {id: 22, parentId: 4, text: "Poland", sprite: "flag-pl"},
  {id: 23, parentId: 5, text: "Romania", sprite: "flag-ro"},
  {id: 24, parentId: 5, text: "Singapore", sprite: "flag-singapore"},
  {id: 25, parentId: 5, text: "Thailand", sprite: "flag-th"},
  {id: 26, parentId: 5, text: "Ukraine", sprite: "flag-ukraine"},
];
export class NavBar {

  constructor(){

  }
  attached() {
    $("#topMenu").ejMenu({
   
      fields: {
        dataSource: data, id: "id", parentId: "parentId", text: "text",
        spriteCssClass: "sprite"
      }
    });
  }
}
