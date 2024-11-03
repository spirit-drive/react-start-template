export class Category {
  id: string;
  name: string;
  photo?: string;
  commandId?: string;

  constructor(id: string, name: string, photo?: string, commandId?: string) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.commandId = commandId;
  }
}
