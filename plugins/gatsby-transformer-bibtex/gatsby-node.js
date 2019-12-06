const Cite = require('citation-js')
const _ = require(`lodash`)

async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
    function transformObject(obj, id, type) {
      const bibtexNode = {
        ...obj,
        id,
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(obj),
          type,
        },
      }
      createNode(bibtexNode)
      createParentChildLink({ parent: node, child: bibtexNode })
    }
    
    const { createNode, createParentChildLink } = actions

    if (node.internal.mediaType !== `application/octet-stream`) {
        return
    }

    const content = await loadNodeContent(node)
    const parsedContent = await Cite.async(content);
    parsedContent.data.forEach((obj, i) => {
        c = new Cite(obj)
        objCopy = c.get()[0]
        objCopy._graph = undefined
        objCopy.html = c.format("bibliography", {
            format: "html",
            style: "citation-vancouver",
            lang: "en-US"
        })
        objCopy.bibtex = c.format("bibtex")
        transformObject(
            objCopy,
            objCopy.id ? objCopy.id : createNodeId(`${node.id} [${i}] >>> bibtex`),
            _.upperFirst(_.camelCase(`${node.name} Bibtex`))
        )

    })
}


exports.onCreateNode = onCreateNode
