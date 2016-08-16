
exports.onLoaded = function(args){
    var page = args.object;
    page.bindingContext = {
        question1:"How many continents are there?",
        answers1:["7 Continents",
                "1 Continent",
                "There are no continents"
            ],
        question2:"Are we done yet?",
        answers2:["No",
                "Not At All",
                "Almost Done"]
    }

    var questionControl = page.getViewById('question-1');
    questionControl.on('selectedValueChanged',function(eventData){
        console.log(eventData.selectedView.text);
    });

}
