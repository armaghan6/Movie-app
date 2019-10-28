
import { MoviesCategoriesService } from './movies-categories.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  currentMovie = 'Joker 2019';
  public movies: any = [];

  constructor(
    private moviesCategoriesService: MoviesCategoriesService,
  ) {
    this.movies = [
      {
        cate: 'English Movies',
        name: 'Angel Has Fallen',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'English Movies',
        name: 'Avengers: End Game',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'English Movies',
        name: 'White House Down',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Pakistani Movies',
        name: 'Andheeri Raat mai Diya tery Hath mai',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },     
      {
        cate: 'Pakistani Movies',
        name: 'Maula Jutt',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Pakistani Movies',
        name: 'Kala Nathu Lall',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Indians Movies',
        name: 'Sholly',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Indians Movies',
        name: 'Dill Wale',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Indians Movies',
        name: 'Dill Waly Dhulania Ly Jayen Gy',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Carry On Jutta',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Angrrej',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      },
      {
        cate: 'Punjabi Movies',
        name: 'Jutt James Bond',
        discription: 'Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president',
        country: 'Russia, Tasmania',
        genre: 'Action, Comedy',
        stars: 'Salman khan, Akshay kumar, Rajesh Khanna, Chota Don, Humaiyo Saeed'
      }
    ];
  }

  getMovies() {
    return this.movies;
  }

  getCurrentMovie() {
    return this.currentMovie;
  }

  deleteMovie(namee: any) {
    this.movies = this.movies.filter(e => {
      return e.name !== namee;
    });
  }

  ffilterItems(searchTerm: string) {
    return this.movies.find(item => {
      return item.name.includes(searchTerm);
    });
  }

  filterItems(searchTerm: string) {
    var movieslistt = [];
    var j = 0;
    this.movies.forEach(Data => {
      if (Data.cate == (this.moviesCategoriesService.getCurrentCategory())) {
        movieslistt[j] = Data;
        j++;
      }
    });
    return movieslistt.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
