type GlobalObject = {
    id: number
}

declare var __THE_GLOBAL__: GlobalObject;

(function() {
    // Here's the typechecking, well at compile time
    function getObjectKey(myObject: GlobalObject): string {
        const id = myObject.id;
        if(!id) {
            alert('Runtime error : __THE_GLOBAL__.id is undefined')
        }
        return 'The global object id is : ' + id;
    }

    function setOutput() {
        document.getElementById('output').innerHTML = getObjectKey(__THE_GLOBAL__ as GlobalObject)
    }

    document.getElementById('run').addEventListener('click', setOutput)
 })();