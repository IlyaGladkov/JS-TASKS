let div = document.querySelector('.myDiv')
function traversal(tree) {
    console.log(tree.tagName)

    if (tree.children[0]) {
        traversal(tree.children[0])
    }
}

traversal(div)