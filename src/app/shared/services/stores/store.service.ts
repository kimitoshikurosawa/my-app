import {Injectable} from '@angular/core';
import {Selfie} from "../../../models/selfie";
import {Wookie} from "../../../models/wookie";
import {Observable, of, interval, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Stores} from "../../../models/stores.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(private _httpClient: HttpClient) {
  }
  url = environment.apis.stores.featured ;
  getAll(): Selfie[] {
    const data: Selfie[] = [];
    let selfie = new Selfie();
    selfie.image = '';
    selfie.titre = "yaya dombo"
    selfie.wookie = new Wookie();
    selfie.wookie.name = "Cheeesseee";
    data.push(selfie);
    data.push({
      image: '',
      titre: 'photo de ouf',
      wookie: {
        name: '',
        selfies: []
      }
    })
    return data;
  }



  getAllstores(): Stores[] {
    const data: Stores[]= []
    data.push(
      {
        id: 14,
        title: "Extrême tatoo",
        slug: "extremetatoo",
        location: "5.300590942905682",
        description: "<p>Bienvenue chez <strong>Extr&ecirc;me&nbsp;Tattoo</strong>,&nbsp;votre salon de tatouage &agrave; Abidjan vous accueille,</p>\r\n\r\n<p>avec ou sans rendez-vous pour parler de votre projet de&nbsp;tattoo.<br />\r\n<br />\r\nLaissez-vous guider par un tatoueur reconnu pour son professionnalisme et sa cr&eacute;ativit&eacute;.<br />\r\n<br />\r\n<strong>Extr&ecirc;me&nbsp;Tattoo</strong>&nbsp;vous accueille et vous oriente pour vous offrir le tatouage qui vous plaira parfaitement</p>\r\n\r\n<p>:&nbsp;emplacement id&eacute;al, taille du tatouage,&nbsp;choix de la technique du tatouage&hellip;</p>\r\n\r\n<p><strong>AUTRE</strong><br />\r\n<br />\r\n<strong>&nbsp;Extr&ecirc;me&nbsp;Tattoo</strong>, est aussi sp&eacute;cialiste en tatouage permanent, <strong>temporaire</strong>, &eacute;pilation de sourcil et de piercings de tout gens.</p>",
        adresse: "Marcory grand marché",
        Products: [],
        cities: {
          name: "Abidjan"
        },
        categories: {
          title: "Beauté"
        },
        coverimages: [
          {
            id: 6,
            imageName: "bannier-5f560a04c2c2e672424458.jpg",
            store: "/api/stores/14",
            imageFile: null
          }
        ],
        number1: "+2250757687623",
        number2: "+2250747603693",
        views: 619,
        location2: "-3.9719215749269208"
      })
    data.push(
      {
        id: 15,
        title: "super tatoo",
        slug: "supraatatoooo",
        location: "5.300590942905682",
        description: "<p>Bienvenue chez <strong>Extr&ecirc;me&nbsp;Tattoo</strong>,&nbsp;votre salon de tatouage &agrave; Abidjan vous accueille,</p>\r\n\r\n<p>avec ou sans rendez-vous pour parler de votre projet de&nbsp;tattoo.<br />\r\n<br />\r\nLaissez-vous guider par un tatoueur reconnu pour son professionnalisme et sa cr&eacute;ativit&eacute;.<br />\r\n<br />\r\n<strong>Extr&ecirc;me&nbsp;Tattoo</strong>&nbsp;vous accueille et vous oriente pour vous offrir le tatouage qui vous plaira parfaitement</p>\r\n\r\n<p>:&nbsp;emplacement id&eacute;al, taille du tatouage,&nbsp;choix de la technique du tatouage&hellip;</p>\r\n\r\n<p><strong>AUTRE</strong><br />\r\n<br />\r\n<strong>&nbsp;Extr&ecirc;me&nbsp;Tattoo</strong>, est aussi sp&eacute;cialiste en tatouage permanent, <strong>temporaire</strong>, &eacute;pilation de sourcil et de piercings de tout gens.</p>",
        adresse: "Marcory grand marché",
        Products: [],
        cities: {
          name: "Abidjan"
        },
        categories: {
          title: "Beauté"
        },
        coverimages: [
          {
            id: 6,
            imageName: "bannier-5f560a04c2c2e672424458.jpg",
            store: "/api/stores/14",
            imageFile: null
          }
        ],
        number1: "+2250757687623",
        number2: "+2250747603693",
        views: 619,
        location2: "-3.9719215749269208"
      })
    data.push(
      {
        id: 15,
        title: "super tatoo",
        slug: "supraatatoooo",
        location: "5.300590942905682",
        description: "<p>Bienvenue chez <strong>Extr&ecirc;me&nbsp;Tattoo</strong>,&nbsp;votre salon de tatouage &agrave; Abidjan vous accueille,</p>\r\n\r\n<p>avec ou sans rendez-vous pour parler de votre projet de&nbsp;tattoo.<br />\r\n<br />\r\nLaissez-vous guider par un tatoueur reconnu pour son professionnalisme et sa cr&eacute;ativit&eacute;.<br />\r\n<br />\r\n<strong>Extr&ecirc;me&nbsp;Tattoo</strong>&nbsp;vous accueille et vous oriente pour vous offrir le tatouage qui vous plaira parfaitement</p>\r\n\r\n<p>:&nbsp;emplacement id&eacute;al, taille du tatouage,&nbsp;choix de la technique du tatouage&hellip;</p>\r\n\r\n<p><strong>AUTRE</strong><br />\r\n<br />\r\n<strong>&nbsp;Extr&ecirc;me&nbsp;Tattoo</strong>, est aussi sp&eacute;cialiste en tatouage permanent, <strong>temporaire</strong>, &eacute;pilation de sourcil et de piercings de tout gens.</p>",
        adresse: "Marcory grand marché",
        Products: [],
        cities: {
          name: "Abidjan"
        },
        categories: {
          title: "Beauté"
        },
        coverimages: [
          {
            id: 6,
            imageName: "bannier-5f560a04c2c2e672424458.jpg",
            store: "/api/stores/14",
            imageFile: null
          }
        ],
        number1: "+2250757687623",
        number2: "+2250747603693",
        views: 619,
        location2: "-3.9719215749269208"
      })
    data.push(
      {
        id: 15,
        title: "super tatoo",
        slug: "supraatatoooo",
        location: "5.300590942905682",
        description: "<p>Bienvenue chez <strong>Extr&ecirc;me&nbsp;Tattoo</strong>,&nbsp;votre salon de tatouage &agrave; Abidjan vous accueille,</p>\r\n\r\n<p>avec ou sans rendez-vous pour parler de votre projet de&nbsp;tattoo.<br />\r\n<br />\r\nLaissez-vous guider par un tatoueur reconnu pour son professionnalisme et sa cr&eacute;ativit&eacute;.<br />\r\n<br />\r\n<strong>Extr&ecirc;me&nbsp;Tattoo</strong>&nbsp;vous accueille et vous oriente pour vous offrir le tatouage qui vous plaira parfaitement</p>\r\n\r\n<p>:&nbsp;emplacement id&eacute;al, taille du tatouage,&nbsp;choix de la technique du tatouage&hellip;</p>\r\n\r\n<p><strong>AUTRE</strong><br />\r\n<br />\r\n<strong>&nbsp;Extr&ecirc;me&nbsp;Tattoo</strong>, est aussi sp&eacute;cialiste en tatouage permanent, <strong>temporaire</strong>, &eacute;pilation de sourcil et de piercings de tout gens.</p>",
        adresse: "Marcory grand marché",
        Products: [],
        cities: {
          name: "Abidjan"
        },
        categories: {
          title: "Beauté"
        },
        coverimages: [
          {
            id: 6,
            imageName: "bannier-5f560a04c2c2e672424458.jpg",
            store: "/api/stores/14",
            imageFile: null
          }
        ],
        number1: "+2250757687623",
        number2: "+2250747603693",
        views: 619,
        location2: "-3.9719215749269208"
      })
    return data;
  }

  public getApi(){
    return this._httpClient.get<Stores[]>(this.url);
  }


  /*
  * Retourne une observable pour s'insrire à la reception des tableaux
  * */
  getAll_obs(): Observable<Stores[]> {
    // const myData = this.getAllstores();
    //return  of(myData);

/*      const data = this.getAllstores();
      return of(data);*/

    return this._httpClient.get<Stores[]>(this.url);
  }
}
