(function () {
    // Here's the typechecking, well at compile time
    function getObjectKey(myObject) {
        var id = myObject.id;
        if (!id) {
            alert('Runtime error : __THE_GLOBAL__.id is undefined');
        }
        return 'The global object id is : ' + id;
    }
    function setOutput() {
        document.getElementById('output').innerHTML = getObjectKey(__THE_GLOBAL__);
    }
    document.getElementById('run').addEventListener('click', setOutput);
})();
