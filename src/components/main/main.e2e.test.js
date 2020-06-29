import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


const movies = [
  {
    id: 5520,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Kids & Family`,
    year: `2018`,
    starring: [`Johnny Depp`, `Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    director: `David Yates`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: [`The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`],
    rating: `6,6`,
    votes: 500
  },
  {
    id: 1236,
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    year: `2018`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    director: `Bryan Singer`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/bohemian-rhapsody.jpg`,
    description: [`The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`],
    rating: `8,0`,
    votes: 800
  },
  {
    id: 1587,
    title: `Aviator`,
    genre: `Drama`,
    year: `2004`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    director: `Martin Scorsese`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/aviator.jpg`,
    description: [`A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`],
    rating: `7,5`,
    votes: 1650
  },
  {
    id: 6652,
    title: `Shutter Island`,
    genre: `Thriller`,
    year: `2010`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    director: `Martin Scorsese`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/shutter-island.jpg`,
    description: [`In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`],
    rating: `8,1`,
    votes: 900
  },
  {
    id: 1999,
    title: `Pulp Fiction`,
    genre: `Crime`,
    year: `1994`,
    starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`, `Bruce Willis`],
    director: `Quentin Tarantino`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/pulp-fiction.jpg`,
    description: [`The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`],
    rating: `8,9`,
    votes: 2500
  },
  {
    id: 3675,
    title: `No Country for Old Men`,
    genre: `Thriller`,
    year: `2007`,
    starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
    director: `Ethan Coen, Joel Coen`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/no-country-for-old-men.jpg`,
    description: [`Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`],
    rating: `8,1`,
    votes: 870
  },
  {
    id: 4455,
    title: `Snatch`,
    genre: `Crime`,
    year: `2000`,
    starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    director: `Guy Ritchie`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/snatch.jpg`,
    description: [`Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`],
    rating: `8,3`,
    votes: 1500
  },
  {
    id: 9987,
    title: `Johnny English`,
    genre: `Comedy`,
    year: `2003`,
    starring: [`Rowan Atkinson`, `Ben Miller`, `Olga Kurylenko`],
    director: `David Kerr`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/johnny-english.jpg`,
    description: [`After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`],
    rating: `6,2`,
    votes: 300
  }];

const movieCard = {
  id: 1111,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  background: `img/the-grand-budapest-hotel-background.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  preview: `http://placehold.it/382x177`,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  rating: `8,9`,
  votes: 240,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e test`, () => {
  it(`Should title link be clicked`, () => {
    const titleLinkHandler = jest.fn();

    const mainComponent = mount(
        <Main
          movies={movies}
          movieCard={movieCard}
          onTitleLinkClick={titleLinkHandler} />
    );

    const mainComponentLinks = mainComponent.find(`.small-movie-card__link`);

    mainComponentLinks.forEach((link) => link.simulate(`click`));

    expect(titleLinkHandler.mock.calls.length).toBe(movies.length);
  });
});
