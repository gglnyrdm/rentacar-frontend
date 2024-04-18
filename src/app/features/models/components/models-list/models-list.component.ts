import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelsApiService} from '../../services/models-api-service';
import { CommonModule } from '@angular/common';
import { ModelListItemDto } from '../../models/model-list-item-dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush//araştır
})
export class ModelsListComponent implements OnInit {

  public list : ModelListItemDto[] = [];

  constructor(private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modelsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }

}
  // list = [
  //   {
  //     id: 1,
  //     name: 'A3',
  //     description: 'model1 description',
  //   },
  //   {
  //     id: 2,
  //     name: 'A4',
  //     description: 'model2 description',
  //   },
  //   {
  //     id: 3,
  //     name: 'A5',
  //     description: 'model3 description',
  //   }
  // ]
  // constructor(){ BU NE İŞE YARIYOR?
  //   let a: number = 1;
  //   for(let item of this.list){
  //     console.log(item);
  //   }
  // }