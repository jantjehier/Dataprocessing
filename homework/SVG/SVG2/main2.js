/* use this to test out your function */
/*Name: Jan Maarten de Vries Student number: 11408731 */
window.onload = function()
{
  var countryID = []
  var color = [];
  id =
  color =
  changeColor(id, color);
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color)
{
  for (var i = 0; i < id.length; i++)
  {
    if(document.getElementById(id[i]) != null)
    {
      document.getElementById(id[i]).style.fill = color[i];
    }
  }
}
