import { Injectable } from '@angular/core';
import { DeeIcons, deeIcons } from '../icons';

@Injectable({
  providedIn: 'any',
})
export class DeeIconsRegistry {
  private registry = new Map<deeIcons, string>();

  public registerIcons(icons: DeeIcons[]): void {
    icons.forEach((icon: any) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: deeIcons): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
