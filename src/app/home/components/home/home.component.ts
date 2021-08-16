import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../core/service/posts/posts.service'

@Component({
  selector: 'app-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.fetchAllInfo();
    this.fetchInfo('2');
  }

  fetchAllInfo(){

    this.postsService.getAllInfo()
      .subscribe(posts => {
        console.log(posts);
      });

  }


  fetchInfo(id:string){
    this.postsService.getInfo(id)
      .subscribe(post => {
        console.log(post);
      })
  }

  postInfo(){
    const newInfo = {
      id: '22',
      title: 'Hii',
      image: 'xd',
      price: 200,
      description: 'blaa bla bla'
    };
    this.postsService.postInfo(newInfo)
    .subscribe(post =>{
      console.log(post);
    })
  }

  updateInfo(){
    const newInfo = {
      id: '27',
      title: 'Hola acabas de ser editado',
      image: 'porque la verdad si me da hueva',
      price: 200,
      description: 'blaa bla bla'
    };
    this.postsService.putInfo('2',newInfo)
    .subscribe(post =>{
      console.log(post);
    })
  }

  deleteInfo(){
    this.postsService.deleteInfo('2')
    .subscribe(post =>{
      console.log(post);
    })
  }
  
}
