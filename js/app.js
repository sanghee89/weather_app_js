/**
 *
 * @param {NodeList} elmts selscted elements from HTML to add evnt
 * @param {string} event event type e.g. 'click', 'mouseenter'...
 * @param {Function} callback callback function to be executed when evnt is triggered
 */

export function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
}
