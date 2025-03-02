import { Component } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage-generator',
  templateUrl: './voyage-generator.component.html',
  styleUrls: ['./voyage-generator.component.scss']
})
export class VoyageGeneratorComponent {
  generatedVoyage?: Voyage;

  constructor(private voyageService: VoyageService, private router: Router) {}

  generateVoyage(): void {
    this.generatedVoyage = this.voyageService.generateRandomVoyage();
  }

  addVoyage(): void {
    if (this.generatedVoyage) {
      this.voyageService.addVoyage(this.generatedVoyage);
      this.router.navigate(['/voyage', this.generatedVoyage.id]);
    }
  }
}