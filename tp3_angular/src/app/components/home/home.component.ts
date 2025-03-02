import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone : false
})
export class HomeComponent implements OnInit {
  voyages: Voyage[] = [];
  paginatedVoyages: Voyage[] = [];
  currentPage = 1;
  itemsPerPage = 20;

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyages = this.voyageService.getVoyages();
    this.updatePagination();
  }

  deleteVoyage(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.updatePagination();
    }
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedVoyages = this.voyages.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.voyages.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}