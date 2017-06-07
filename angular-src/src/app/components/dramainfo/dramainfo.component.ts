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
        this.movie = movie[0];
        this.movieTitle = movie[0].movieTitle;
        this.tvChannel = movie[0].tvChannel;
        this.startedYear = movie[0].startedYear;
        this.showTime = movie[0].showTime;
        this.status = movie[0].status;
        this.imagePath = movie[0].imagePath;
        this.rating = movie[0].rating;
        this.likes = movie[0].likes;
        this.overview = movie[0].overview;
        this.category = movie[0].category;
        this.trailerURL = movie[0].trailerURL;
        this.Director = movie[0].Director;
        this.numberOfSeasons = movie[0].numberOfSeasons;
        this.numberOfEpisodes = movie[0].numberOfEpisodes;
      });
    });
  }

}
