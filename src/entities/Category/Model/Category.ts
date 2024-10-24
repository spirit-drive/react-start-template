export class Category {
  id: string;
  name: string;
  photo?: string;

  constructor(id: string, name: string, photo?: string) {
    this.id = id;
    this.name = name;
    this.photo = photo;
  }
}
