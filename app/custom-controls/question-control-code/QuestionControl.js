var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Label = require("ui/label").Label;
var enums = require("ui/enums");


var Control = (function (_super) {
    global.__extends(QuestionControl, _super);

    Object.defineProperty(QuestionControl.prototype, "question",{
        get: function(){
            return this._question;
        },
        set: function(value){
            this._question = value;
            this.populateData();
        }
    });

    Object.defineProperty(QuestionControl.prototype, "answers",{
        get: function(){
            return this._answers;
        },
        set: function(value){
            this._answers = value;
            this.populateData();
        }
    });


    function QuestionControl() {
        _super.call(this);

        this._question="";
        this._answers=[];
        var selectedAnswerView = null;

        this.populateData = function(){
            this.removeChildren();
            var lblQuestion = new Label();
            lblQuestion.text = this._question;
            lblQuestion.className = "question";
            this.addChild(lblQuestion);

            for(var i=0; i<this._answers.length; i++){
                var lblAnswer = new Label();
                lblAnswer.className = "answer";
                lblAnswer.text = this._answers[i];

                lblAnswer.on('tap', function(){
                    onAnswerTap(this);
                }.bind(lblAnswer));

                this.addChild(lblAnswer);

            }

        }

    var onAnswerTap = function(args){

        if(selectedAnswerView == null){
            //if no object is selected, select the current tapped object
            selectedAnswerView = args;
            selectedAnswerView.className = 'selected-answer';
        }else{
            //first deselect the previously selected object
            selectedAnswerView.className = 'answer';
            selectedAnswerView = args;
            selectedAnswerView.className = 'selected-answer';
        }
        this.notify({
            eventName:"selectedValueChanged",
            object:this,
            selectedView: args
        });
    }.bind(this);


    }
    return QuestionControl;

})(StackLayout);

exports.QuestionControl = Control;
