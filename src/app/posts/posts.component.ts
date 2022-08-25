import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { 
    httpClient.get(this.url).subscribe(response =>{
      this.post = response.json();
    });

    createPost(title){
      let post: any = {title.value};
      title.value = "";

      this.httpClient.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          this.post.id = response.json().id;
          this.post.splice(0, 0, post);
        })
    };
    
    deletePost(post){
      this.httpClient.delete(this.url, + '/' + post.id)
        .subscribe(response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        })
    }
    
  }



  ngOnInit() {
  }

}