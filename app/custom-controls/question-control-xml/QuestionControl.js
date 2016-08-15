var Color = require('color').Color;

var control = null, selectedAnswerView = null;

exports.onLoaded = function(args){
    //assigning the control object to be used in other functions
    control = args.object;
}

exports.onAnswerTap = function(args){

    if(selectedAnswerView == null){
        //if no object is selected, select the current tapped object
        selectedAnswerView = args.object;
        selectedAnswerView.className = 'selected-answer';
    }else{
        //first deselect the previously selected object
        selectedAnswerView.className = 'answer';
        selectedAnswerView = args.object;
        selectedAnswerView.className = 'selected-answer';
    }
}
