import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from './data';

export type Trip = {
  destination:string;
  description:string;
  prix:number;
  id: number;
};

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly trips: Trip[] = [];

  constructor() {
    this.trips = DESTINATIONS.map((destination, index) => ({
      id: index + 1,
      destination,
      description: DESCRIPTIONS[index % DESCRIPTIONS.length],
      prix: PRIX[index % PRIX.length], 
    }));
  }

  findAll(): Trip[] {
    return this.trips;
  }

  findOne(id: number): Trip | null {
    return this.trips.find((trip) => trip.id === id) ?? null;
  }
}

