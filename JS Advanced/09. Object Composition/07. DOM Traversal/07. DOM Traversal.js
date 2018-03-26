function highlight(selector) {
    let deepestPath = 0;
    let deepestElement;
    let allLeafElements = $(`${selector} *:not(:has(*))`);
    allLeafElements.each(function(index, element) {
        let currentDeepestLevel = 0;
        let originalLeaf = element;
        while (element) {
            currentDeepestLevel++;
            element = $(element).parent()[0];
        }
        if (currentDeepestLevel > deepestPath) {
            deepestPath = currentDeepestLevel;
            deepestElement = originalLeaf;
        }
    });

    let selectedEl = $(selector)[0];

    while (deepestElement && deepestElement !== selectedEl) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }
    $(selector).addClass('highlight');
}