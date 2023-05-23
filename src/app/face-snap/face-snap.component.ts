import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!:  string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'John Does';
    this.description = 'Un super pote';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  }

  onAddSnap(){
    this.snaps ++;
  }
}
