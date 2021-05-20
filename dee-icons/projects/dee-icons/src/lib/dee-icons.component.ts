import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DeeIcons, deeIcons } from 'dee-icons';
import { DeeIconsRegistry } from './dee-icons-registry.service';

@Component({
  selector: 'dee-icons',
  template: ` <ng-content></ng-content> `,
  styles: [':host::ng-deep svg{width: 40px; height: 40px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeeIconsComponent {
  private svgIcon: SVGElement | undefined = undefined;

  @Input()
  set name(iconName: deeIcons) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.deeIconRegistry.getIcon(iconName);

    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  constructor(
    private element: ElementRef,
    private deeIconRegistry: DeeIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
