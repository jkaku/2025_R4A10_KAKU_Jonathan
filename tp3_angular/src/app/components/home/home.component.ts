import { Component } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone : false
})

export class HomeComponent {
  voyages: Voyage[];
  currentPage = 1;
  itemsPerPage = 20;
  paginatedVoyages: Voyage[];

  constructor(private voyageService: VoyageService) {
    this.voyages = this.voyageService.getVoyages();
    this.paginatedVoyages = this.updatePagination();
  }

  deleteVoyage(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.voyages = this.voyageService.getVoyages();
      this.paginatedVoyages = this.updatePagination();
    }
  }

  updatePagination(): Voyage[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.voyages.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.voyages.length) {
      this.currentPage++;
      this.paginatedVoyages = this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatedVoyages = this.updatePagination();
    }
  }
}