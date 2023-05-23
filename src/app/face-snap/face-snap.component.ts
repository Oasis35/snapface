import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

@Input() faceSnap!: FaceSnap;

constructor(private faceSnapsService: FaceSnapsService,
            private router : Router) { }

  titrebouton!: string;
  snap!: boolean;

  ngOnInit(): void 
  {
    this.titrebouton='Oh Snap !';
    this.snap = false;
  }

  onClickSnap(): void{
    if (this.snap == false)
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.snap = true;
      this.titrebouton='Oops, un Snap!';
    }
    else if (this.snap == true)
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.snap = false;
      this.titrebouton='Oh Snap !';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
