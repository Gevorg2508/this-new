function Person(name, age){
    this.stomach = [];
    this.name = name; 
    this.age = age;
    this.eat = function(food){
        if(this.stomach.length === 10){
            console.log("no such size of stomach!");
        }else{
        return this.stomach.push(food);
    }
}
    this.poop = function(){
        this.stomach = [];
    }
    this.toString = function(){
        return `"${this.name}, ${this.age}"`;
    }
}
let person = new Person();
// person.eat("aaa");
// person.poop();

// console.log(person.stomach);
person = new Person("mary", 56);
console.log(person.toString());
