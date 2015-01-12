
(function(){

window.Timer = new Timer();

function Timer()
{
    if(Timer.prototype.singletonInstance)
    {
        return Timer.prototype.singletonInstance;
    }

    if (!(this instanceof Timer))
    {
        return new Timer();
    }

    Timer.prototype.singletonInstance = this;

    var me = this;

    var startTime;

    me.reset = function()
    {
        startTime = new Date().getTime();
    }

    me.getElapsedTime = function()
    {
        return new Date().getTime() - startTime;
    }

    me.printElapsed = function(message)
    {
        console.log(me.getElapsedTime() + "ms \t" + message);
    }

    return this;
}
})();