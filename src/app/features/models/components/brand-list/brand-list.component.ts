import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Brand } from '../../models/model-list-item-dto';
import { BrandsApiService } from '../../services/brands-api.service';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandListComponent implements OnInit{
  public list : Brand[] = [];

  constructor(private brandsApiService: BrandsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
}
