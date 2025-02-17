import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ListCardComponent } from './list-card/list-card.component';
import { FooterComponent } from './footer/footer.component'
import { RateComponent } from './rate/rate.component';

export type ListItem = {
  title: string;
  description: string;
  link?: string;
  image: string;
};
export type ListInfo = {
  title: string;
  description?: string;
  link : string
};
export type RateInfo = {
  photo : string;
  name : string;
  title: string;
  comment: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ArticleComponent, ListCardComponent, FooterComponent, RateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {

  articleList: ListItem[] = [
    { title: 'Virtual healthcare for you',
      description: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
      link: 'Consult today',
      image: 'virtualHealth.png',
    },
    { title: 'Leading healthcare providers',
      description: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
      link: 'Learn more',
      image: 'lhp.png',
    },
    { title: 'Download our mobile apps',
      description: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
      link: 'Download',
      image: 'dom.png',
    }
  ];

  servicesList : ListItem[] = [
      { 
        title: "Search doctor",
        description: "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
        image: "services/loupe.png"
      },
      { 
        title: "Online pharmacy",
        description: "Buy your medicines with our mobile application with a simple delivery system.",
        image: "services/online.png"
      },
      { 
        title: "Consultation",
        description: "Free consultation with our trusted doctors and get the best recommendations.",
        image: "services/consultation.png"
      },
      { 
        title: "Details info",
        description: "Free consultation with our trusted doctors and get the best recommendations.",
        image: "services/detailsinfo.png"
      },
      { 
        title: "Emergency care",
        description: "You can get 24/7 urgent care for yourself or your children and your lovely family.",
        image: "services/emergency.png"
      },
      { 
        title: "Tracking",
        description: "Track and save your medical history and health data.",
        image: "services/tracking.png"
      }
  ]
  lateArticleList = [
      { 
          title: "Disease detection, check up in the laboratory",
          description: "In this case, the role of the health laboratory is very important to do a disease detection...",
          link: "Read more",
          image: "latesteArticle/1.png"
      },
      { 
          title: "Herbal medicines that are safe for consumption",
          description: "Herbal medicine is very widely used at this time because of its very good for your health...",
          link: "Read more",
          image: "latesteArticle/2.png"
      },
      { 
          title: "Natural care for healthy facial skin",
          description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
          link: "Read more",
          image: "latesteArticle/3.png"
      }
  ];
  
  listCardInfo : ListInfo[] = [
    {
      title: "Our services",
      description : "We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health",
      link: "Learn more"
    },
    {
      title: "Check out our latest article",
      link: "View All"
    }
  ]

  rateList :  RateInfo[] = [
    {
      photo : "profil/lego_1.jpg",
      name : "Jo",
      title: "Founder Circle",
      comment: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
    },
    {
      photo : "profil/lego_2.jpg",
      name : "Jo2",
      title: "2",
      comment: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
    },
    {
      photo : "profil/lego_3.jpg",
      name : "Jo3",
      title: "Magicien",
      comment: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
    }
    
  ];

  cpt = 0;
  currentRate = this.rateList[0] || null; 

  nextRate() {
    if (this.cpt < this.rateList.length - 1) {
      this.cpt++;
      this.currentRate = this.rateList[this.cpt];
    }
  }

  previousRate() {
    if (this.cpt > 0) {
      this.cpt--;
      this.currentRate = this.rateList[this.cpt];
    }
  }
  
}