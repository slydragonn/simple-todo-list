export default function removeFalseChilds(el){

    for(let i = 0; i < el.childNodes.length; i++) {

        let node = el.childNodes[i];

        if(node.nodeType == 3 && !/\S/.test(node.nodeValue)) node.parentNode.removeChild(node);

    }
}