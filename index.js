// Code your solution here
function findMatching(drivers, search){
    return drivers.filter(driver => driver.toLowerCase().includes(search.toLowerCase()));

}

function fuzzyMatch(drivers, search){
    return drivers.filter(driver => driver.toLowerCase().startsWith(search.toLowerCase()));
}

function matchName(drivers, search){
    return drivers.filter(driver => driver.name.toLowerCase() === search.toLowerCase());
}