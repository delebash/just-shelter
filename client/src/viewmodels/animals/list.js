let data = [
  {
    id: 1,
    location: '123 lst',
    transfer: 'spca huoston'
  },
  {
    id: 2,
    location: '178 North st',
    transfer: 'spca titusville'
  },
  {
    id: 3,
    location: '123 rescue lane',
    transfer: 'hsus brevard'
  },
  {
    id: 4,
    locationFound: '456 Love drive',
    locationTransfered: 'spca titusville'
  }
]

export class List {

  attached() {
    $('#Grid').ejGrid({
      dataSource: data
    });
  }
}
