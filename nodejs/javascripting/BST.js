Object.prototype.toString = function(idx){
	idx = idx || 0;
	idx++;

 	var objStr = '{';
	
	for(let k in this){
		objStr += '\n';
		for(let k1=0; k1< idx; k1++){
			objStr += '\t';
		}

		if(typeof this[k] === 'number' || typeof this[k] === 'string' || this[k] == null) {
			objStr += k + ' : ' + this[k] + ',';
		} else if (typeof this[k] === 'object' && this[k] != null){
			objStr += k + ':';
			objStr += this.toString.call(this[k], idx) + ',';
		}
	}

	objStr = objStr.substr(0, objStr.length - 1 );
	objStr += '\n';

	for(let k1=0; k1<idx-1 ; k1++){
		objStr += '\t';
	}
	objStr += '}';

	return objStr;
}

function BST(rootElement){
	this.rootNode = new Node(rootElement || 100);
	this.currentNode = this.rootNode;
}

function Node(nodeValue){
	this.value = nodeValue;
	this.leftNode = null;
	this.rightNode = null;
}

BST.prototype.insert = function(ele){
	if(!this.contains(ele, this.currentNode)) {
		if(ele > this.currentNode.value) {
			if(this.currentNode.rightNode){
				this.currentNode = this.currentNode.rightNode;
				this.insert.call(this, ele);
			} else {
				this.currentNode.rightNode = new Node(ele);
				this.currentNode = this.rootNode;
			}
		} else if (ele < this.currentNode.value) {
			if(this.currentNode.leftNode) {
				this.currentNode = this.currentNode.leftNode;
				this.insert.call(this, ele);
			} else {
				this.currentNode.leftNode = new Node(ele);
				this.currentNode = this.rootNode;	
			}
		}
	}
};

BST.prototype.contains = function(ele, node){
	if(ele === node.value) {
		console.log(ele + ' : Element Already Exist!!');
		return true;
	} else {
		return false;
	}
};

// BST.prototype.contains = function(ele){
// 	if(ele > this.currentNode.value && this.currentNode.rightNode) {
// 		this.currentNode = this.currentNode.rightNode;
// 		this.contains.call(this, ele);
// 	} else if (ele < this.currentNode.value && this.currentNode.leftNode) {
// 		this.currentNode = this.currentNode.leftNode;
// 		this.contains.call(this, ele);
// 	} else if(ele === this.currentNode.value){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };


var myBST = new BST();
myBST.insert(70);
myBST.insert(110);
myBST.insert(75);
myBST.insert(120);
myBST.insert(105);
myBST.insert(107);
myBST.insert(30);
myBST.insert(65);
myBST.insert(12);
myBST.insert(15);
myBST.insert(27);
myBST.insert(19);
myBST.insert(14);
myBST.insert(6);
console.log(myBST.rootNode.toString());

// var myObj = { v1: '12', rn: { v11: 15, ln: null, rn: {v111: 32, rn: null, ln: null}}, ln: {v12:10, rn: null, ln: null}};
// console.log(myObj.toString());


