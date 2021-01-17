import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  kullanicilar: any[] = [];
  engellenenler: any[] = [];
  constructor(private firestore: AngularFirestore,private router: Router) {
    this.firestore
    .collection("isim")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.kullanicilar.push(doc.data());
      });
    });
    this.firestore
    .collection("engellenenler")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.engellenenler.push(doc.data());
      });
    });
   }

  ngOnInit() {
  }
  girisyap() {
    var mail= (<HTMLInputElement>document.getElementById("mail")).value;
    var sifre = (<HTMLInputElement>document.getElementById("sifre")).value;
    var a = 0;
    for ( var i = 0; i < this.kullanicilar.length; i++){
      if (this.kullanicilar[i].mail == mail && this.kullanicilar[i].sifre==sifre ) {
        alert("Giris Basarili")
        if (!this.kullanicilar[i].yetki) {
          var engelli = 0;
          for (var k = 0; k < this.engellenenler.length; k++) {
            if (this.kullanicilar[i].kullaniciadi ==this.engellenenler[k].kullaniciadi ) {
              alert("Admin Tarafından Engellenmişsiniz!!!")
              engelli++;
            }
          }
          if (engelli == 0)
          {
            this.router.navigate(['ana-sayfa']);
            alert("Kullanıcı!!!")
          }
          
        }
        else
        {
          this.router.navigate(['adminbar'])
          alert("Admin!!!")
        }
        a++;
      }
    }
    if (a == 0)
    {
      alert("Böyle Bir Kullanıcı Yoktur!!")
      }
  }

}
