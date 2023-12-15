// Tree.tsx
import React from 'react';
import TreeNode from '@/lib/Tree';

interface TreeNodeProps {
  node: TreeNode;
}

const Tree: React.FC<TreeNodeProps> = ({ node }) => (
  <ul>
    <li>
      {node.name} ({node.type})
      {node.children.length > 0 && (
        <TreeNodes nodes={node.children} />
      )}
    </li>
  </ul>
);

interface TreeNodesProps {
  nodes: TreeNode[];
}

const TreeNodes: React.FC<TreeNodesProps> = ({ nodes }) => (
  <ul>
    {nodes.map((childNode, index) => (
      <Tree key={index} node={childNode} />
    ))}
  </ul>
);

export default Tree;
