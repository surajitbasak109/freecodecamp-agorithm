/* 
 * Falsy Bouncer
 * Remove all falsy values from an array.
 */

function bouncer(arr)
{
	return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, '']);

