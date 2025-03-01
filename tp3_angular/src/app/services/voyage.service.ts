import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage.model';
import { BehaviorSubject } from 'rxjs';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data';

@Injectable({ providedIn: 'root' })
export class VoyageService {
  private voyages: Voyage[] = [];
  private voyagesSubject = new BehaviorSubject<Voyage[]>(this.voyages);

  voyages$ = this.voyagesSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('voyages');
    if (data) {
      this.voyages = JSON.parse(data);
      this.voyagesSubject.next(this.voyages);
    }
  }

  addVoyage(voyage: Voyage) {
    this.voyages.push(voyage);
    this.voyagesSubject.next(this.voyages);
    this.saveToLocalStorage();
  }

  getVoyage(id: string): Voyage | undefined {
    return this.voyages.find(v => v.id === id);
  }

  deleteVoyage(id: string) {
    this.voyages = this.voyages.filter(v => v.id !== id);
    this.voyagesSubject.next(this.voyages);
    this.saveToLocalStorage();
  }

  generateRandomVoyage(): Voyage {
    const id = Math.random().toString(36).substr(2, 9);
    const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const prix = PRIX[Math.floor(Math.random() * PRIX.length)];

    return { id, destination, description, prix };
  }
}
