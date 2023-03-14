document.addEventListener("DOMContentLoaded", function () {
  const mermaidDiagram = `
    flowchart TD
        Root[Leetcode] --> arrayString(Arrays & Strings)
        Root --> design(Design)
        Root --> tree(Tree)
        Root --> linkedlist(Linked List)
        Root --> math(Math)
        Root --> others(Others)
        arrayString --> hasing(Hash Table & Maps)
        arrayString --> stack(Stack)
        arrayString --> heap(Heap)
        arrayString --> queue(Queue) --> dfsBfs(DFS & BFS)
        arrayString --> recursion(Recursion/Backtracking) --> dfsBfs
        arrayString --> twoPointers(Two Pointers & Sliding Window)
        arrayString --> matrix(Matrix)
        arrayString --> sorting(Sort & Search)
        matrix --> graphs(Graph)
        graphs --> trie(Trie)
        graphs --- dfsBfs
        sorting --> greedy(Greedy)
        greedy --> dp(Dynamic Programming)

    click Root "posts_all.json" "Json"
    click arrayString "arrayString.html" "Arrays & Strings"
    `;
  const mermaidContainer = document.querySelector(".mermaid");
  mermaidContainer.textContent = mermaidDiagram;
});
