function systemComponents(arr) {
    let systems = new Map();
    for (let line of arr) {
        //So firstly - split each input line and take the tokens.
        let [systemName, componentName, subcomponentName] = line.split(/\s*\|\s*/g).filter(w => w !== "");
        //Then - if systems MAP doesn't contain the systemName - we set the systemName and new Map() as a value.
        if (!systems.get(systemName)) {
            systems.set(systemName, new Map());
        }
        //After that we check if the systemName has a componentName -
        //and if doesn't > we  set the current componentName and new array -
        //because we will have multiply subcomponents.
        if (!systems.get(systemName).get(componentName)) {
            systems.get(systemName).set(componentName, []);
        }
        //Now after everything else checked - we push the componentNames to the array.
        systems.get(systemName).get(componentName).push(subcomponentName);
    }
    //Time for sorting - check the sort functions below.

    let sortedSystems = Array.from(systems.keys()).sort((sys1, sys2) => sortSystems(sys1, sys2));

    for (let system of sortedSystems) {
        console.log(system);
        let sortedComponents = Array.from(systems.get(system).keys()).sort((comp1, comp2) => sortComponents(system, comp1, comp2));
        for (let component of sortedComponents) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(subcomp => console.log(`||||||${subcomp}`));
        }
    }
    function sortSystems(sys1, sys2) {
        if (systems.get(sys1).size !== systems.get(sys2).size) {
            return systems.get(sys2).size - systems.get(sys1).size;
        } else {
            return sys1.toLowerCase().localeCompare(sys2.toLowerCase());
        }
    }
    function sortComponents(system, comp1, comp2) {
        return systems.get(system).get(comp2).length - systems.get(system).get(comp1).length;
    }
}