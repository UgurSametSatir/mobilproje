import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.page.html',
  styleUrls: ['./urunler.page.scss'],
})
export class UrunlerPage implements OnInit {
  urunler: any[] = [];
  yorumlar: any[] = [];
  constructor(private firestore: AngularFirestore) {
    this.firestore
    .collection("urunler")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.urunler.push(doc.data());
      });
    });
    this.firestore
    .collection("yorumlar")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.yorumlar.push(doc.data());
      });
    });
   }

  ngOnInit() {
  }
  yorumEkle(urununid)
  {
    var deneme = {
      yorum: (<HTMLInputElement>document.getElementById(urununid)).value,
      urunid: urununid,
    }
    this.firestore.collection("yorumlar").add(deneme);
    alert("Yorum Eklendi")
    this.guncelle();
  }
  guncelle() {
    this.yorumlar= [];
    this.firestore
    .collection("yorumlar")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.yorumlar.push(doc.data());
      });
    });
    var tutus = (<HTMLInputElement>document.getElementById("tut")).value;
   // tutus=""
  }
}
