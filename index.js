class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    if (typeof created === 'undefined' || isNaN(created)) {
      throw new Error('Invalid created');
    }
    if (Message.prototype.hasOwnProperty.call(this, '_created')) {
      throw new Error('Created already defined');
    }
    this._created = created;
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }

  static newEmptyMessage() {
    return new Message();
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(),
    url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo${super.toString()}` +
      `- Url: ${this.url}` +
      `- Thumbnail: ${this.thumbnail}`;
  }
}

const text = 'Some text';
const created = Date.now();

const duckTypeMessage = {
  text,
  created,
};

console.log(duckTypeMessage);

const emptyMessage = new Message();
const textMessage = new Message('Yesterday message', Date.now() - 86400);
const photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(String(emptyMessage instanceof Message));
console.log(String(textMessage instanceof Message));
console.log(String(photoMessage instanceof Message));
console.log(String(photoMessage instanceof ImageMessage));

console.log(String(textMessage instanceof ImageMessage));
console.log(String(duckTypeMessage instanceof ImageMessage));
