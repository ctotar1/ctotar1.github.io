let project1 = {
  id: 1,
  title: 'New Orleans',
  hasThumbnail: true
}
let project2 = {
  id: 2,
  title: 'Population',
  hasThumbnail: true
}
let projects = [
  project1,
  project2
]
for (let i = 0; i < projects.lenth; i++) {
  console.log('project' + i + 'New Orleans' + projects[i].title)
  if (projects[i].hasThumbnail === true) {
  console.log('images/screenshot' + projects[i].id + '.jpg')
}
}