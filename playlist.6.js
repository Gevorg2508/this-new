function Song(title, artist){
this.title = title;
this.artist = artist;
}
let jaded = new Song("Jaded", "Aerosmith");
let heyJude = new Song("Hey Jude", "The Beatles");
let freedom = new Song("Freedom", "Pharell Williams");

function Playlist(){
this.index = 0;
this.arr = [];
this.add = function(obj){
    this.arr.push(obj.title, obj.artist);
}
this.play = function(){
    console.log(`${this.arr[this.index]} started to play`);
    return this.index;
}
this.next = function(){
if(this.arr[this.index +2] === undefined){
    console.log(`${this.arr[this.index]} stopped, ${this.arr[0]} started to play`);
    this.index = 0;
    return this.index;
}
 console.log(`${this.arr[this.index]} stopped, ${this.arr[this.index + 2]} started to play`);
 this.index += 2;
 return this.index;
}

this.stop = function(){
    console.log(`${this.arr[this.index]} stopped`);
    return this.index;
}

}
let playlist = new Playlist();
playlist.add(jaded);
playlist.add(heyJude);
playlist.add(freedom);

console.log(playlist.arr);
playlist.play();
playlist.next();
playlist.next();
playlist.next();
playlist.stop();
playlist.play();