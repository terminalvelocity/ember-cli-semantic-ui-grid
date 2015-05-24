import Ember from 'ember';
import layout from '../templates/components/ui-column';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['column'],
  classNameBindings: ['columns', 'type', 'alignment', 'centered:centered'],
  columns: null,
  type: null,
  centered: false

  // didInsertElement: function() {
  //
  // }.on('didInsertElement')
});
