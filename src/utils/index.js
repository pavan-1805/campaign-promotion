export function setMenu(currentStatus, listOfItems = ['view','edit','active','inactive','archive','unarchive','changelogs']) {
    return listOfItems.filter(item=>(item !== currentStatus))
}
// console.log(setMenu('active')); => [ 'view', 'edit', 'inactive', 'archive', 'unarchive', 'changelogs' ]