import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.scss']
})
export class ColorDetailsComponent implements OnInit {
  @Input() public name: string;
  @Input() public year: string;
  @Input() public color: string;
  @Input() public pantoneValue: string;
  public isCopied: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public copyColor(value: any) {
    this.selectcolor(value);
    document.execCommand('copy');
    const select = window.getSelection();
    select.removeAllRanges();
  }

  private selectcolor(node: any) {
    this.isCopied = true;
    const range = document.createRange();
    range.selectNodeContents(node);
    const select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

}
