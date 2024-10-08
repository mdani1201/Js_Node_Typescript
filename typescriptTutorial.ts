// the T is a generic that is a placeholder so you can define any type when you create an object from this class
class StorageContainer <T> {
  private contents : T[]

  constructor() {
    this.contents = [];
  }
  addItem(item: T):void {

  }

  getItem(i: number):T | undefined {
    return this.contents[i];
  }
}

const usernames = new StorageContainer<string>();
usernames.addItem("danitec");
usernames.addItem("sesotec");

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(323);
friendsCount.addItem(4532);