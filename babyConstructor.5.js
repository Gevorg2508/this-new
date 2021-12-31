function Baby(name, age, favoriteToy){
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
    this.play = function(){
        return `playing with his favorite toy ${this.favoriteToy}`;
    }   
    this.kidBiography = function (){
        return `Baby ${this.name} has ${this.age} age and playing with ${this.favoriteToy} toy!`;
    }
}

let person = new Baby("Adam", 12, "constructor");
// console.log(person.age);
// console.log(person.name);
// console.log(person.play());
console.log(person.kidBiography());
