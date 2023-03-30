import { modifier } from 'ember-modifier';
import { install, uninstall } from '@github/hotkey';

export default modifier(function hotkey(element /*, positional, named*/) {
  install(element);

  return () => {
    uninstall(element);
  };
});
