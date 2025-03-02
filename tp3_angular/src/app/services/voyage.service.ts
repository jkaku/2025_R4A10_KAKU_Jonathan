import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyages();
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyage(id: string): Voyage | undefined {
    return this.voyages.find(voyage => voyage.id === id);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.saveVoyages();
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
    this.saveVoyages();
  }

  generateRandomVoyage(): Voyage {
    const destinations = ['Paris', 'New York', 'Tokyo', 'Londres', 'Sydney'];
    const descriptions = [
      'Un voyage inoubliable',
      'Découvrez des paysages magnifiques',
      'Profitez de la culture locale',
      'Relaxez-vous sur des plages paradisiaques'
    ];
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomPrice = Math.floor(Math.random() * 1000) + 100;

    return {
      id: Math.random().toString(36).replace('.', ''),
      destination: randomDestination,
      description: randomDescription,
      prix: randomPrice
    };
  }

  private saveVoyages(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private loadVoyages(): void {
    const savedVoyages = localStorage.getItem('voyages');
    if (savedVoyages) {
      this.voyages = JSON.parse(savedVoyages);
    }
  }
}