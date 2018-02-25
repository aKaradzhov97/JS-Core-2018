function heroicInventory(arr) {
    let heroData = [];
    for (var i = 0; i < arr.length; i++) {
        let currentHeroArgs = arr[i].split(" / ");
        let currentHeroName = currentHeroArgs[0];
        let currentHeroLevel = Number(currentHeroArgs[1]);
        let currentHeroItems = [];
        if (currentHeroArgs.length > 2) {
            currentHeroItems = currentHeroArgs[2].split(", ");
        }
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        }
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}