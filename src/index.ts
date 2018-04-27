import JsonFile from 'icebear'
var foo = {
    testkey: "testvalue"
}

var bar: JsonFile = new JsonFile(foo)
bar.export2json("demo.json")
