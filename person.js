let person = {
    name: 'Tumelo', 
    age: 24, 
    gender: 'male',
    interests: ['books', 'coding', 'movies'],
    hello : function(){
        return 'Hello, my name is ' + person.name + ', my gender is ' + person.gender + ' and I am ' + person.age + ' years old.' + 'My interests are ' + person.interests[0] + ', ' + person.interests[1] + ', and ' + person.interests[2] + '.';
    }
};
console.log(person.hello());