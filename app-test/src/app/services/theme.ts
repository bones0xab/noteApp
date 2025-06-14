// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  private renderer: Renderer2;
  private dark = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.dark = !!localStorage.getItem('darkMode');
    this.updateBody();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('darkMode', this.dark ? '1' : '');
    this.updateBody();
  }

  private updateBody() {
    if (this.dark) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
