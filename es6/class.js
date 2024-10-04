
class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const hp = new Product('hp');
console.log(hp);
hp.speak('Hi, hello, bye');