import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  kullanicilar: any[] = [];
  constructor(private firestore: AngularFirestore,private router: Router) {
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
  kayitol() {
    var deneme = {
      kullaniciadi: (<HTMLInputElement>document.getElementById("kullanici")).value,
      mail: (<HTMLInputElement>document.getElementById("mail")).value,
      sifre: (<HTMLInputElement>document.getElementById("sifre")).value,
      yetki:false,
    }
    
    var sayac = 0;
    var kullanacimaili = (<HTMLInputElement>document.getElementById("mail")).value;
    for ( var i = 0; i < this.kullanicilar.length; i++){
      if (this.kullanicilar[i].mail == kullanacimaili ) {
        sayac++;
        
      }
    }
    if (sayac == 0) {
      this.firestore.collection("isim").add(deneme);
      alert("Kayıt Başarılı")
      this.router.navigate(['home']);
    }
    else {
      alert("Kullanıcı Maili Kullanılmaktadır. Başka Kullanıcı Maili Seçiniz")
    }
    
  //  this.firestore.collection("isim").add(deneme);
   // alert("Kayıt Başarılı")
  }

}
