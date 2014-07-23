
/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Slider', function(Slider) {


  Slider.Controller = Neatline.Shared.Controller.extend({


    slug: 'SLIDER',

    events: [
      'select'
    ],


    /**
     * Create the view.
     */
    init: function() {
      this.view = new Slider.View({ el: $('#slider input') });
    },


    /**
     * Update the slider position.
     *
     * @param {Object} args
     */
    select: function(args) {
      // TODO
    }


  });


});