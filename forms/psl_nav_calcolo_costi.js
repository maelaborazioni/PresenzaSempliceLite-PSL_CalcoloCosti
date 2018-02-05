/**
 * @properties={typeid:24,uuid:"71755713-32CC-4650-94A2-62C2094A12D6"}
 */
function getName()
{
	return scopes.psl.Sezioni.CALCOLOCOSTI['nome'];
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EB9DF3D6-7F52-465D-A259-66B529A1B49A"}
 */
function onShow(firstShow, event)
{
	if(firstShow)
		plugins.busy.prepare();
}
