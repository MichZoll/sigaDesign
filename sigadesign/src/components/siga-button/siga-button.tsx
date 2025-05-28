import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'siga-button',
  styleUrl: 'siga-button.css',
  shadow: true,
})
export class SigaButton {
  @Prop() label: string;
  @Event() clicked: EventEmitter<void>;

  private handleClick = () => {
    console.log("button was clicked");
    this.clicked.emit();
  }

  render() {
    return <button onClick={ this.handleClick }>{ this.label }</button>;
  }
}
