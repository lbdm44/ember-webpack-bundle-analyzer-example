import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ExampleButtonComponent extends Component {
  @tracked count = 0;

  @action
  decrement() {
    this.count--;
  }

  @action
  increment() {
    this.count++;
  }
}
