import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-voyage-generator',
  templateUrl: './voyage-generator.component.html',
  styleUrls: ['./voyage-generator.component.scss'],
  standalone : false
})
export class VoyageGeneratorComponent {
  generatedVoyage: Voyage | undefined;

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