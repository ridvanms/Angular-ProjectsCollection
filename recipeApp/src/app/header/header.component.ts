import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}

  onLogOut() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onStorage() {
    this.dataStorage.storeRecipe();
  }
  onFetching() {
    this.dataStorage.fetchRecipe().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
