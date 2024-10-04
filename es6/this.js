class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping now ${this.name}`);
    }
    activity() {
        this.sleep();
    }
}

const p1 = new Person('Mahfuz Hasan', 18);
console.log(p1);
p1.sleep();

// const lazy = p1.sleep;
// lazy(); // error