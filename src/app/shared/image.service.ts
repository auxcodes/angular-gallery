import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

// fake photo db
const IMAGES = [
  { "id": 1, "category": "cats", "caption": "Cat number one", "url": "assets/img/Cat_01.jpg" },
  { "id": 2, "category": "cats", "caption": "Cat number two", "url": "assets/img/Cat_02.jpg" },
  { "id": 3, "category": "cats", "caption": "Cat number three", "url": "assets/img/Cat_03.jpg" },
  { "id": 4, "category": "huts", "caption": "Hut number one", "url": "assets/img/Hut_01.jpg" },
  { "id": 5, "category": "huts", "caption": "Hut number two", "url": "assets/img/Hut_02.jpg" },
  { "id": 6, "category": "huts", "caption": "Hut number three", "url": "assets/img/Hut_03.jpg" },
  { "id": 7, "category": "huts", "caption": "Hut number four", "url": "assets/img/Hut_04.jpg" },
  { "id": 8, "category": "rally", "caption": "Rally number one", "url": "assets/img/Rally_01.jpg" },
  { "id": 9, "category": "rally", "caption": "Rally number two", "url": "assets/img/Rally_02.jpg" },
  { "id": 10, "category": "rally", "caption": "Rally number three", "url": "assets/img/Rally_03.jpg" },
  { "id": 11, "category": "rally", "caption": "Rally number four", "url": "assets/img/Rally_04.jpg" },
  { "id": 12, "category": "rally", "caption": "Rally number five", "url": "assets/img/Rally_05.jpg" },
  { "id": 13, "category": "rally", "caption": "Rally number six", "url": "assets/img/Rally_06.jpg" },
  { "id": 14, "category": "trees", "caption": "Tree number one", "url": "assets/img/Tree_01.jpg" },
  { "id": 15, "category": "trees", "caption": "Tree number two", "url": "assets/img/Tree_02.jpg" },
  { "id": 17, "category": "trees", "caption": "Tree number three", "url": "assets/img/Tree_03.jpg" },
  { "id": 18, "category": "trees", "caption": "Tree number four", "url": "assets/img/Tree_04.jpg" }
]
