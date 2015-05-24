import Ember from 'ember';
import layout from '../templates/components/ui-grid';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ui', 'grid'],
  classNameBindings: ['fixedWidth:page'],
  columns: null,
  fixedWidth: false
  // didInsertElement: function() {
  //
  // }.on('didInsertElement')
});
