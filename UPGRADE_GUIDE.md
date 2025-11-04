# Upgrade Guide
In this upcoming release 1.4.9, we are changing the order arguments for the following fuction

- getData
- jsonToArray
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

## The order of arguments in functions
### getData
From 
``getData({"s":1},"s")``
to 
``getData("s", {"s":1})``
as we are changeing the search value in list or object data
### jsonToArray
From
``jsonToArray({"a":{"a":2},"b":{"a":3}},"a")
``
to 
``jsonToArray("a",{"a":{"a":2},"b":{"a":3}})
``
as we are changeing the search value in list or object data
### mapGetData
From 
``mapGetData([{"Asd":1}],"Asd")``
to 
``mapGetData("Asd",[{"Asd":1}])``
as we are changeing the search value in list or object data
### setData
From 
``setData({"s":1},"s",2)``
to 
``setData("s", {"s":1},2)``
as we are changeing the search value in list or object data
### selectInData
From 
``selectInData({"s":1},{"ss":"s"})``
to 
``selectInData({"ss":"s"}, {"s":1})``
as we are changeing the search value in list or object data


### sortBy
From 
``sortBy([2,3,1], (orderA, orderB) => orderA - orderB)``
to 
``sortBy((orderA, orderB) => orderA - orderB, [2,3,1])``
as we are changeing the search value in list or object data
### filter
From 
``filter([1,2,3,34],function(value, key){ return value%2 === 0 })``
to 
``filter(function(value, key){ return value%2 === 0 }, [1,2,3,34])``
as we are changeing the search value in list or object data
### groupBy
From 
``groupBy([1,2,3,4,5,6,7], function (value) { return value % 2})``
to 
``groupBy(function (value) { return value % 2}, [1,2,3,4,5,6,7])``
as we are changeing the search value in list or object data
### indexOf
From 
``indexOf([1,2], 1)``
to 
``indexOf(1, [1,2])``
as we are changeing the search value in list or object data
### indexOfExist
From 
``indexOindexOfExistf([1,2], 1)``
to 
``indexOfExist(1, [1,2])``
as we are changeing the search value in list or object data
### indexOfNotExist
From 
``indexOfNotExist([1,2], 1)``
to 
``indexOfNotExist(1, [1,2])``
as we are changeing the search value in list or object data
### isExact
From 
``isExact({"test": 11,"test2": 11}, {"test2": 11})``
to 
``isExact({"test2": 11}, {"test": 11,"test2": 11})``
as we are changeing the search value in list or object data
### isExactbyRegExp
From 
``isExactbyRegExp({"test": 11,"test2": 11}, {"test2": /\d/g})``
to 
``isExactbyRegExp({"test2": /\d/g}, {"test": 11,"test2": 11})``
as we are changeing the search value in list or object data
### lastIndexOf
From 
``lastIndexOf([1,2], 1)``
to 
``lastIndexOf(1,[1,2])``
as we are changeing the search value in list or object data
### map
From 
``map([1,2],function(value) { return value+2 } )``
to 
``map(function(value) { return value+2 } ,[1,2])``
as we are changeing the search value in list or object data
### like
From 
``like({"s1":1,"s2":1},{"s1":1})``
to 
``like({"s1":1}, {"s1":1,"s2":1})``
as we are changeing the search value in list or object data