import { Component, OnInit, OnDestroy } from '@angular/core';
// SERVICES
import { ColorServices } from 'src/app/services/colors/colors.service';
import { ColorInterface, ColorsInterface } from 'src/app/services/colors/colors.model';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, OnDestroy {
  public arrayColors: ColorInterface[];
  public totalPages: number;
  public page: number;
  public isTotalPages: boolean;
  public isLoading: boolean;
  private getColors: any;

  constructor(private colorsApi: ColorServices) { }

  ngOnInit(): void {
    this.getDataColors();
  }

  /**
   * RETURN NEXT PAGE
   */
  public nextPage() {
    if (this.page === this.totalPages) {
      return;
    }
    const nextTo = this.page + 1;
    this.getDataColors(nextTo);
  }

  /**
   * RETURN PREV PAGE
   */
  public prevPage() {
    const prevTo = this.page - 1;
    this.getDataColors(prevTo);
  }

  /**
   * RETURN DATA [ColorServices]
   * @param page [number]
   */
  getDataColors(page?: number) {
    this.isLoading = true;
    this.getColors = this.colorsApi.getColors(page).subscribe(res => {
      this.arrayColors = res.data;
      this.totalPages = res.total_pages;
      this.page = res.page;
      this.isTotalPages = this.page === this.totalPages;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.getColors.unsubscribe();
  }

}
