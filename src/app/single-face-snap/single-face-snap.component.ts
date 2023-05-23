import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  
  faceSnap!: FaceSnap;
  
  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) { }
  
    titrebouton!: string;
    snap!: boolean;
  
    ngOnInit(): void 
    {
      this.titrebouton='Oh Snap !';
      this.snap = false;
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
  
    onClickSnap(){
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
  }
