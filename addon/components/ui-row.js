import Ember from 'ember';
import layout from '../templates/components/ui-row';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ui', 'row', 'column'],
  classNameBindings: ['columnCount'],
  columnCount: null
  // didInsertElement: function() {
  //
  // }.on('didInsertElement')
});
