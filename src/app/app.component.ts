import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ListCardComponent } from './list-card/list-card.component';
import { FooterComponent } from './footer/footer.component'


export type ListItem = {
  title: string;
  description: string;
  lien?: string;
  image: string;
};

export type ListInfo = {
  title: string;
  description: string;
  lien: string;
};

export type InfoRate = {
  title: string;
  description: string;
  name: string;
  photo: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ArticleComponent, ListCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  box_article : ListItem[] = [
    { title: 'Virtual healthcare for you',
      description: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
      lien: 'consult today',
      image: 'ff',
    },
    { title: 'Leading healthcare providers',
      description: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
      lien: 'Learn more',
      image: 'ff',
    },
    { title: 'Download our mobile apps',
      description: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
      lien: 'Download',
      image: 'ff',
    }
  ];

  box_services : ListItem[] = [
    { 
      title: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
      image: ""
    },
    { 
      title: "Online pharmacy",
      description: "Buy your medicines with our mobile application with a simple delivery system.",
      image: ""
    },
    { 
      title: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recommendations.",
      image: ""
    },
    { 
      title: "Details info",
      description: "Free consultation with our trusted doctors and get the best recommendations.",
      image: ""
    },
    { 
      title: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your lovely family.",
      image: ""
    },
    { 
      title: "Tracking",
      description: "Track and save your medical history and health data.",
      image: ""
    }
  ];
  lowerListArticle : ListItem[] = [
    { 
      title: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
      image: ""
    },
    
  ]  
}
