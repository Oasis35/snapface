import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'john doe',
            description : 'Un super gars', 
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            location: 'Lyon'
        },
        {
            id: 2,
            title : 'Pierre Martin',
            description : 'Unique au monde', 
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190414500/120957417-illustration-cr%C3%A9ative-de-l-espace-r%C3%A9serv%C3%A9-de-profil-d-avatar-par-d%C3%A9faut-isol%C3%A9-sur-fond-maquette-de.jpg?ver=6',
            location : 'Rennes'
        },
        {
            id: 3,
            title : 'Antoine Dupont',
            description : 'Encore une identité folle', 
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPDar96daoFgWQ2Sck4bmtt3EZreS6G8P-g&usqp=CAU'
            }
      ];

        getAllFaceSnaps() : FaceSnap[] 
        {
            return this.faceSnaps;
        }

        getFaceSnapById(faceSnapId: number) : FaceSnap{
            const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
            if (!faceSnap) {
                throw new Error('FaceSnap not found!');
            }
            else {
                return faceSnap;
            }
        }

        snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): void 
        {
            const faceSnap = this.getFaceSnapById(faceSnapId);
            
            snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        }
}