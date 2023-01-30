let person = {
    name: prompt('What is your name?'),
    bestFriend: prompt('What is the name of your best friend?'),
    school: prompt('Which school did you attend?'),
    game: prompt('What game do you like?'),
    age: prompt('How old are you?')
}

let heading = document.querySelector('h1');
let paragraph = document.querySelector('p');
heading.textContent = `Hello ${person.name}`;
paragraph.textContent = `Hi, my name is ${person.name} , and my closest friend is ${person.bestFriend} . We both
attended ${person.school} and we are both born in the year ${new Date().getFullYear()- person.age}  . We love
to place ${person.game} whenever we go out together.`

paragraph.style.color = 'white';
paragraph.style.backgroundColor = '#ff6347';

