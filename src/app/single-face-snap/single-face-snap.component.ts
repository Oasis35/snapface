import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  
  faceSnap$!: Observable<FaceSnap>;
  
  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) { }
  
    titrebouton!: string;
    snap!: boolean;
  
    ngOnInit(): void 
    {
      this.titrebouton='Oh Snap !';
      this.snap = false;
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
  
    onClickSnap(faceSnapId: number){
      if (this.snap == false)
      {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => {
            this.titrebouton = 'Oops, un Snap!';
            this.snap = true;
        })); 
      }
      else if (this.snap == true)
      {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => {
            this.titrebouton = 'Oh Snap !';
            this.snap = false;
        }));
      }
    }
  }
