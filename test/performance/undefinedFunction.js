describe("Undefined function. Fastest way to call a function if it's not known whether the function is defined or not", function() {

    var loopCount = 1000000;
    var functionArray1 = createFunctionArray1();
    var functionArray2 = createFunctionArray2();
    var length = functionArray1.length;

    beforeEach(function() {
    });

    afterEach(function() {
    });

    function createFunctionArray1()
    {
        Timer.reset();
        var dummyFunction1 = function() {}
        var dummyFunction2 = undefined;
        var result = [];

        for(var i = 0; i < loopCount; i++)
        {
            if(i%2==0)
            {
                result.push(dummyFunction1)
            }
            else
            {
                result.push(dummyFunction2);
            }
        }

        // takes forever to loop that amount of items
        // this is much faster
        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);

        console.log("creation of functionArray1: " + Timer.getElapsedTime());
        console.log("actual item count = " + result.length);

        return result;
    }

    function createFunctionArray2()
    {
        Timer.reset();
        var dummyFunction1 = function() {}
        var result = [];

        for(var i = 0; i < loopCount; i++)
        {
            result.push(dummyFunction1)
        }

        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);
        result = result.concat(result);

        console.log("creation of functionArray2: " + Timer.getElapsedTime());
        console.log("actual item count = " + result.length);

        return result;
    }

    describe("which is fastest", function() {

        it("", function(done) {

            var fns = functionArray1;

            Timer.reset();

            for(var i = 0; i < length; i++)
            {
                var fn = fns[i];

                if(fn)
                {
                    fn();
                }
            }

            Timer.printElapsed("if(fn) fn()");

            done();
        });

        it("", function(done) {

            var fns = functionArray1;

            Timer.reset();

            for(var i = 0; i < length; i++)
            {
                var fn = fns[i];

                if(typeof fn === 'function')
                {
                    fn();
                }
            }

            Timer.printElapsed("if(typeof fn === 'function') fn()");

            done();
        });

        it("", function(done) {

            var fns = functionArray1;

            Timer.reset();

            for(var i = 0; i < length; i++)
            {
                var fn = fns[i];

                if(fn != undefined)
                {
                    fn();
                }
            }

            Timer.printElapsed("fn != undefined");

            done();
        });

        it("", function(done) {

            var fns = functionArray1;

            Timer.reset();

            for(var i = 0; i < length; i++)
            {
                var fn = fns[i];

                if(fn !== undefined)
                {
                    fn();
                }
            }

            Timer.printElapsed("fn !== undefined");

            done();
        });

        it("", function(done) {

            var fns = functionArray2;

            Timer.reset();

            for(var i = 0; i < length; i++)
            {
                var fn = fns[i];

                fn();
            }

            Timer.printElapsed("fn(), call a dummy function instead of checking it is defined");

            done();
        });
    });


});