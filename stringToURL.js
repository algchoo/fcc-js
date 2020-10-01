// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  console.log(title.toLowerCase().split(/\s+/).filter(word => word != '').join('-'))
}
// Only change code above this line

urlSlug(globalTitle)
urlSlug(" Winter Is   Coming")
