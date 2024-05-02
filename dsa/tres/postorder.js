var postorderTraversal = function(root) {
    if (!root) return []; // Return an empty array if the tree is empty
    
    let stack = [{ node: root, state: "1" }];
    let result = [];
    
    while (stack.length > 0) {
        let current = stack[stack.length - 1];
        
        if (current.state === "1") {

            // Update state to process the left child next
            current.state = "2";
            
            // Push the left child onto the stack
            if (current.node.left) {
                stack.push({ node: current.node.left, state: "1" });
            }
        } else if (current.state === "2") {
            // Process the node
            
            // Update state to process the right child next
            current.state = "3";
            
            // Push the right child onto the stack
            if (current.node.right) {
                stack.push({ node: current.node.right, state: "1" });
            }
        } else {
                        result.push(current.node.val)

            // If the state is not "1" or "2", pop the node from the stack
            stack.pop();
        }
    }
    
    return result;
};
