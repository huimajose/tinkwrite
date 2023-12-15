// TreeNode.ts
class TreeNode {
    name: string;
    type: string;
    children: TreeNode[];
  
    constructor(name: string, type: string) {
      this.name = name;
      this.type = type;
      this.children = [];
    }
  
    addChild(childNode: TreeNode): void {
      this.children.push(childNode);
    }
  }
  
  export default TreeNode;
  