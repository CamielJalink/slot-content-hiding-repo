import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  @Prop({mutable: true}) show = true;

  onClick(){
    this.show = !this.show;
  }

  renderContentSlot(){
    if(this.show){
      return(
        <slot name={"content"}></slot>
      )
    } else {
      return null;
    }
  }

  render() {
    return (<div onClick={() => this.onClick()}>
      <h1>Click me to hide component. Currently show is set to {`${this.show}`}</h1>
      {this.renderContentSlot()}
    </div>);
  }
}
