/* Name: Jan Maarten de Vries Student number: 11408731 */
/* use this to test out your function */
window.onload = function()
{
  var countryID = []
  var color = [];
  id = ["fr","ro","be","nl"];
  color = ["#008080", "#57454d", "ed5d09", "edcf09"];
  changeColor(id, color);
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color)
{
  for (var i = 0; i < id.length; i++)
  {
    document.getElementById(id[i]).style.fill = color[i];
  }
}
