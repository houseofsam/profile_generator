// readline node module w/ stdin

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

  rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
    rl.question('What\'s an activity you like to do? ', (activity) => {
      rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ?', (favMeal) => {
          rl.question('What\'s your favourite thing to eat for that meal ?', (favFood) => {
            rl.question('Which sport is your absolute favourite? ', (sport) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
                console.log(`Hi, I'm ${name}. For fun I like to ${activity} and listen to ${music}. My favourite meal of the day is ${favMeal} where I like to eat ${favFood}! My absolute fav sport is ${sport} and my superpower is ${superpower}!`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
