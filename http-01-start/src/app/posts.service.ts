import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-firebaseproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData) => console.log(responseData));
  }

  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-firebaseproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }
  clearPosts() {
    return this.http.delete(
      'https://ng-firebaseproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
