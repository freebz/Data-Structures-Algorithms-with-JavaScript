// 예제 11-4 어떤 정점에 이르는 최단 경로 찾기

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
	return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
	path.push(i);
    }
    path.push(s);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
	this.adj[i] = [];
	this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
	this.marked[i] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
}

load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
    if (paths.length > 1) {
	putstr(paths.pop() + '-');
    }
    else {
	putstr(paths.pop());
    }
}


// 0-2-4
