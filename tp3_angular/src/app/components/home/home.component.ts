import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  voyages: Voyage[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  paginatedVoyages: Voyage[] = [];
  
  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.voyageService.voyages$.subscribe(voyages => {
      this.voyages = voyages;
      this.updatePagination();
    });
  }

  deleteVoyage(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.updatePagination();
    }
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedVoyages = this.voyages.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.voyages.length / this.itemsPerPage);
  }
}