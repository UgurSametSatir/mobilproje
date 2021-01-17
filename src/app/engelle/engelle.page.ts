import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-engelle',
  templateUrl: './engelle.page.html',
  styleUrls: ['./engelle.page.scss'],
})
export class EngellePage implements OnInit {
  engellenenler: any[] = [];
  kullanicilar: any[] = []; 
  idler: any[] = [];

  constructor(private firestore: AngularFirestore) { 
    this.firestore
    .collection("engellenenler")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.engellenenler.push(doc.data());
        this.idler.push(doc.id);
      });
    });
    this.firestore
    .collection("isim")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.kullanicilar.push(doc.data());
      });
    });
  }

  ngOnInit() {
  }
  engelAt()
  {
    var kisi = (<HTMLInputElement>document.getElementById("engellenecek_kullanici")).value;
    var sayac = 0;
   
    for ( var i = 0; i < this.kullanicilar.length; i++){
      if (this.kullanicilar[i].kullaniciadi == kisi ) {
        sayac++;
      }
    }
    var deneme={
      kullaniciadi:(<HTMLInputElement>document.getElementById("engellenecek_kullanici")).value,
    }
    if (sayac != 0) {
      var sayi = 0;
      for (var i = 0; i < this.engellenenler.length;i++) {
        if (this.engellenenler[i].kullaniciadi==kisi) {
          sayi++;
          
        }
      }
      if (sayi != 0)
      {
        alert("Kullanıcı Zaten Engelli!!!")
        this.yenile();
      }
      else {
        this.firestore.collection("engellenenler").add(deneme);
     // this.firestore.doc(this.collectionName + '/' + record_id).delete();
      alert("Engelleme Başarılı!!!")
      this.yenile();
      }
      
    }
    else {
      alert("Kullanıcı Adı Bulunmamaktadır. Başka Kullanıcı Adı Seçiniz!!!")
    }
  }
  engelKaldir()
  {
    var index = -5;
    var kisi = (<HTMLInputElement>document.getElementById("engellenecek_kullanici")).value;
    var sayac = 0;
    for (var i = 0; i < this.engellenenler.length;i++) {
      if (this.engellenenler[i].kullaniciadi==kisi) {
        this.firestore.doc("engellenenler" + '/' + this.idler[i]).delete();
        alert("Engel Kaldırma Başarılı!!!")
        this.yenile();
      }
    }
  }
  yenile()
  {
    this.engellenenler =[];
    this.idler= [];
    this.firestore
    .collection("engellenenler")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.engellenenler.push(doc.data());
        this.idler.push(doc.id);
      });
    });
  }

}
