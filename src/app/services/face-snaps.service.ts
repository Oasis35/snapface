import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps() : Observable<FaceSnap[]>
    {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number) : Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): Observable<FaceSnap> 
    {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)})),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap))
        );
    }
}