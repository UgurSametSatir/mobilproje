import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-ekleme',
  templateUrl: './ekleme.page.html',
  styleUrls: ['./ekleme.page.scss'],
})
export class EklemePage implements OnInit {
  urunler: any[] = [];
  constructor(private firestore: AngularFirestore) {
    this.firestore
    .collection("urunler")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.urunler.push(doc.data());
      });
    });
   }

  ngOnInit() {
  }
  urunkaydet() {
    var marka= (<HTMLInputElement>document.getElementById("marka")).value;
    var kategori= (<HTMLInputElement>document.getElementById("kategori")).value;
    var urunadi= (<HTMLInputElement>document.getElementById("urunadi")).value;
    var fiyat= (<HTMLInputElement>document.getElementById("fiyat")).value;
    var markavar = 0;
    var kategorivar = 0;
    var urunadivar = 0;
    var fiyatvar = 0;
    var sayac = 0;
    if (this.urunler.length < 1)
    {
      alert("Hiç ürün yoktur!!!")
    }

    for ( var i = 0; i < this.urunler.length; i++){
      if (this.urunler[i].marka == marka ) {
        markavar++;
      }
      else {
        markavar = 0;
      }
      if (this.urunler[i].kategori == kategori ) {
        kategorivar++;
      }
      else {
        kategorivar = 0;
      }
      if (this.urunler[i].urunadi == urunadi ) {
        urunadivar++;
      }
      else {
        urunadivar = 0;
      }
      if (this.urunler[i].fiyat == fiyat ) {
        fiyatvar++;
      }
      else {
        fiyatvar = 0;
      }
      if (markavar == 1 && 1 == fiyatvar && 1 == urunadivar && 1 == kategorivar)
      {
        sayac++;
        break;
      }

    }
    //
    var deneme = {
      marka: (<HTMLInputElement>document.getElementById("marka")).value,
      kategori: (<HTMLInputElement>document.getElementById("kategori")).value,
      urunadi: (<HTMLInputElement>document.getElementById("urunadi")).value,
      fiyat: (<HTMLInputElement>document.getElementById("fiyat")).value,
      urunid : (this.urunler.length.toString()),
    }
    if (sayac == 0) {
      this.firestore.collection("urunler").add(deneme);
      alert("Kayıt Başarılı")
    }
    else {
      alert("Böyle bir ürün vardır!!!")
    }
    
  }

}
