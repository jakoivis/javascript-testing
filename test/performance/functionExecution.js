describe("Calling anonymous function, named function and function variable.", function() {

    var loopCount = 500000;

    beforeEach(function() {
    });

    afterEach(function() {
    });


    it("", function() {

        var x;

        Timer.reset();

        for(var i = 0; i < loopCount; i++)
        {
            x = (function () {
                return 1;
            })();
        }

        Timer.printElapsed("Anonymous self executing function");
    });

    it("", function() {

        var x;

        var fn = function() {
            return 1;
        }

        Timer.reset();

        for(var i = 0; i < loopCount; i++)
        {
            x = fn();
        }

        Timer.printElapsed("function in a variable");
    });

    it("", function() {

        var x;

        function fn() {
            return 1;
        }

        Timer.reset();

        for(var i = 0; i < loopCount; i++)
        {
            x = fn();
        }

        Timer.printElapsed("Named function");
    });


});