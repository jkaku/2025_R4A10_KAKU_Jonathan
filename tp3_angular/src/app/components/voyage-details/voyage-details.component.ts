import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-voyage-details',
  templateUrl: './voyage-details.component.html',
  styleUrls: ['./voyage-details.component.scss']
})
export class VoyageDetailsComponent implements OnInit {
  voyage?: Voyage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyage(id);
    }
  }

  deleteVoyage() {
    if (this.voyage) {
      this.voyageService.deleteVoyage(this.voyage.id);
      this.router.navigate(['/home']);
    }
  }
}