// 예제 11-3 너비 우선 검색 수행

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 큐로 삽입
    while (queue.length > 0) {
	var v = queue.shift(); // 큐에서 가져옴
	if (v != undefined) {
	    print("Visited vertex: " + v);
	}
	for each (var w in this.adj[v]) {
	    if (!this.marked[w]) {
		this.edgeTo[w] = v;
		this.marted[w] = true;
		queue.push(w);
	    }
	}
    }
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
}


load("Graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0);


/*
0 -> 1 2
1 -> 0 3
2 -> 0 4
3 -> 1
4 -> 2
Visited vertex: 0
Visited vertex: 1
Visited vertex: 2
Visited vertex: 3
Visited vertex: 4
*/
