import React, { Component } from 'react';
import Movie from '../components/Movie';




export default class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Black Panther: Wakanda Forever",
        genre: "Adventure",
        year: 2022,
        image: "https://rb.gy/4236",
        synopsis:
          "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
      },
      {
        id: 2,
        title: "Infinite",
        genre: "Action",
        year: 2021,
        image: "https://rb.gy/p0pk",
        synopsis:
          "Haunted by memories of places he's never visited, a man joins forces with a group of reborn warriors to stop a madman from destroying the endless cycle of life and reincarnation.",
      },
      {
        id: 3,
        title: "Black Adam",
        genre: "Fantasy",
        year: 2022,
        image: "https://rb.gy/arev",
        synopsis:
          "After being granted with the divine power of the Egyptian Gods and spending almost 5000 years in a guardhouse, Black Adam is freed and he decides to unloose his own style of justice to the world.",
      },
      {
        id: 4,
        title: "The Batman",
        genre: "Action",
        year: 2022,
        image: "https://rb.gy/xss8",
        synopsis:
          "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.",
      },
      {
        id: 5,
        title: "Luther: The Fallen Sun",
        genre: "Thriller",
        year: 2023,
        image: "https://rb.gy/wf95",
        synopsis:
          "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
      },
      {
        id: 6,
        title: "Smile",
        genre: "Horror",
        year: 2022,
        image: "https://rb.gy/lyw3",
        synopsis:
          "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      },
      {
        id: 7,
        title: "Mindcage",
        genre: "Drama",
        year: 2022,
        image: "https://rb.gy/1kt1",
        synopsis:
          "When a copycat murderer strikes, Detectives Jake Doyle and Mary Kelly seek help from an incarcerated serial killer called the Artist. As Mary delves deep into the Artist's brilliant but twisted psyche, she and Jake get lured into a diabolical game of cat and mouse, racing against time to stay one step ahead of both criminals.",
      },
      {
        id: 6,
        title: "Operation Fortune",
        genre: "Action",
        year: 2023,
        image: "https://rb.gy/czyv",
        synopsis:
          "Elite spy Orson Fortune must track down and stop the sale of a deadly new weapons technology wielded by billionaire arms broker Greg Simmonds. Reluctantly teamed up with some of the world's best operatives, Fortune and his crew recruit Hollywood's biggest movie star, Danny Francesco, to help them on their globe-trotting mission to save the world.",
      },
    ],
  };
  render() {
    return (
      <div className="movies">
        {this.state.movies.map((movie) => {
          return (
            <div className="movies-container">

            <Movie
                key={ movie.id }
                image={ movie.image }
                title={ movie.title }
                genre={ movie.genre }
                year={ movie.year }
                synopsis={ movie.synopsis }
              />
              </div>
          );
        })}
      </div>
    );
  }
}
