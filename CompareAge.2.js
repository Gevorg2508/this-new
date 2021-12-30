function Person(name, age){
this.name = name;
this.age = age;
// }

Person.prototype.compareAge = function(person){
    console.log('person', person);
    console.log('this', this);

    if(person.age < this.age){
        return `${person.name} is younger than me`;
    }else if(person.age === this.age){
        return `${this.name} is the same age as me}`;
    }else if(person.age > this.age){
        return `${person.name} is older than me`;
    }
}

let p1 = new Person("Samvel",24);
let p2 = new Person("Joel",36);
let p3 = new Person("Lily",24);

console.log(p1.compareAge(p2));

