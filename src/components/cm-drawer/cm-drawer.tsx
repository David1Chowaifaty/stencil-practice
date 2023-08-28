import { Component, Host, Method, Prop, h } from '@stencil/core';

@Component({
  tag: 'cm-drawer',
  styleUrl: 'cm-drawer.css',
  shadow: true,
})
export class CmDrawer {
  @Prop({ reflect: true }) drawertitle: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  @Method()
  async close() {
    this.opened = false;
  }
  @Method()
  async open() {
    this.opened = true;
  }
  render() {
    return (
      <Host>
        <aside>
          <header>
            <h1>{this.drawertitle || 'drawer title'}</h1>
            <button type="button" autoFocus={true} onClick={() => this.close()} aria-label="close slider" class={'closeBtn'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>
          <section class={'container'}>
            <slot></slot>
          </section>
        </aside>
        <div class={'backdrop'} onClick={() => this.close()}></div>
      </Host>
    );
  }
}
