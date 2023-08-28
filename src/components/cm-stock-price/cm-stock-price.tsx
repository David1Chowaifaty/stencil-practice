import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-stock-price',
  styleUrl: 'cm-stock-price.css',
  shadow: true,
})
export class CmStockPrice {
  render() {
    return (
      <Host>
        <input placeholder="Stock Name"></input>
        <slot></slot>
      </Host>
    );
  }
}
