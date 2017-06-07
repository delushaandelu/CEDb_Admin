import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Drama} from'../../services/auth';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dramainfo',
  templateUrl: './dramainfo.component.html',
  styleUrls: ['./dramainfo.component.css'],
  providers: [ValidateService]
})
export class DramainfoComponent implements OnInit {
  movie: any[];


  movieTitle: String;
  tvChannel: String;
  startedYear: String;
  showTime: String;
  status: String;
  imagePath: String;
  rating: String;
  likes: String;
  overview: String;
  category: String;
  trailerURL: String;
  Director: String;
  id: string;
  numberOfSeasons: String;
  numberOfEpisodes: String;

  constructor(private authservice: AuthService,
              private rrouter: Router,
              private router: ActivatedRoute,
  ) { }
//  movie:Object;

  // dramaInfo(id:any)
  // {
  //   var dramas = this.dramas;
  //   this.authservice.dramaInfo(id)
  //     .subscribe(data =>{
  //       if(data.n==1){
  //         for(var i = 0; i< dramas.length; i++){
  //           if(dramas[i]._id == id){
  //             dramas.splice(i, 1);
  //           }
  //         }
  //       }
  //     })
  // }



  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['drama'];
      this.authservice.getInfoDrama(this.id).subscribe(movie => {
        console.log(movie[0].movieTitle);
        this.movie = movie;
        this.movieTitle = movie[0].movieTitle;
        this.tvChannel = movie.tvChannel;
        this.startedYear = movie[0].startedYear;
        this.showTime = movie.showTime;
        this.status = movie.status;
        this.imagePath = movie[0].imagePath;
        this.rating = movie.rating;
        this.likes = movie.likes;
        this.overview = movie.overview;
        this.category = movie.category;
        this.trailerURL = movie.trailerURL;
        this.Director = movie.Director;
        this.numberOfSeasons = movie.numberOfSeasons;
        this.numberOfEpisodes = movie.numberOfEpisodes;
      });
    });
  }

}
