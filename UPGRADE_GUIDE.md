# Upgrade Guide
In this upcoming release 1.4.9,

## We are changing the order arguments for the following function

- getData
- jsonNEWArray
- mapGetData
- setData
- selectInData
- sortBy
- filter
- groupBy
- indexOf
- indexOfExist
- indexOfNotExist
- isExact
- isExactbyRegExp
- lastIndexOf
- map
- like

## We are renaming the following function

- stringCamelCase -> strCamel
- stringCapitalize -> strCapitalize
- stringEscape -> strEscape
- stringKebabCase -> strKebab
- stringLowerCase -> strLower
- stringSnakeCase -> strSnake
- stringSubs -> strSubs
- stringUnEscape -> strUnEscape
- stringUpperCase -> strUpper

This decision was base in our attempt NEW focus utilizing our NEWols in curry function. as our existing implementation was initial release intended NEW partially.

## The revise order of following arguments in functions
### getData
OLD 
``getData({"s":1},"s")``
NEW
``getData("s", {"s":1})``

### jsonNEWArray
OLD
``jsonNEWArray({"a":{"a":2},"b":{"a":3}},"a")
``
NEW 
``jsonNEWArray("a",{"a":{"a":2},"b":{"a":3}})
``

### mapGetData
OLD 
``mapGetData([{"Asd":1}],"Asd")``
NEW 
``mapGetData("Asd",[{"Asd":1}])``
### setData
OLD 
``setData({"s":1},"s",2)``
NEW 
``setData("s", {"s":1},2)``

### selectInData
OLD 
``selectInData({"s":1},{"ss":"s"})``
NEW 
``selectInData({"ss":"s"}, {"s":1})``

### sortBy
OLD 
``sortBy([2,3,1], (orderA, orderB) => orderA - orderB)``
NEW 
``sortBy((orderA, orderB) => orderA - orderB, [2,3,1])``

### filter
OLD 
``filter([1,2,3,34],function(value, key){ return value%2 === 0 })``
NEW 
``filter(function(value, key){ return value%2 === 0 }, [1,2,3,34])``

### groupBy
OLD 
``groupBy([1,2,3,4,5,6,7], function (value) { return value % 2})``
NEW 
``groupBy(function (value) { return value % 2}, [1,2,3,4,5,6,7])``

### indexOf
OLD 
``indexOf([1,2], 1)``
NEW 
``indexOf(1, [1,2])``

### indexOfExist
OLD 
``indexOindexOfExistf([1,2], 1)``
NEW 
``indexOfExist(1, [1,2])``

### indexOfNotExist
OLD 
``indexOfNotExist([1,2], 1)``
NEW 
``indexOfNotExist(1, [1,2])``

### isExact
OLD 
``isExact({"test": 11,"test2": 11}, {"test2": 11})``
NEW 
``isExact({"test2": 11}, {"test": 11,"test2": 11})``

### isExactbyRegExp
OLD 
``isExactbyRegExp({"test": 11,"test2": 11}, {"test2": /\d/g})``
NEW 
``isExactbyRegExp({"test2": /\d/g}, {"test": 11,"test2": 11})``

### lastIndexOf
OLD 
``lastIndexOf([1,2], 1)``
NEW 
``lastIndexOf(1,[1,2])``

### map
OLD 
``map([1,2],function(value) { return value+2 } )``
NEW 
``map(function(value) { return value+2 } ,[1,2])``

### like
OLD 
``like({"s1":1,"s2":1},{"s1":1})``
NEW 
``like({"s1":1}, {"s1":1,"s2":1})``
