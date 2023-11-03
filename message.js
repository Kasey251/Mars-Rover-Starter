class Message {
   constructor(name, value) {
      this.name = name;
      if (!name) {
        throw Error("Name required.");
      }
      this.value = value;
    }
}

module.exports = Message;