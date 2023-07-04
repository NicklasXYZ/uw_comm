<script>
  import { onMount, getContext } from 'svelte'

  export let node
  // export let filteredMessages

  const { getCyInstance } = getContext('graphSharedState')
  const [renderer, refElement, cyInstance] = getCyInstance()

  // cyInstance.add({
  //   group: 'nodes',
  //   id: node.id,
  //   data: { ...node }
  // })

  // console.log(filteredMessages)
  
  // cyInstance.remove()
  // console.log(cyInstance.data)
  // console.log("Node")
  // console.log(node)

  // let updated = filteredMessages.map((data) => (
  //   {
  //     id: data.id,
  //     // group: 'nodes' 
  // }));
  // cyInstance.add(updated)
  // cyInstance.json(updated)


  // function addNodes(graphInstance, dataIn) {

  //   for (let i = 0; i < dataIn.length; i++) {
  //     graphInstance.addNode(
  //       dataIn[i].id,
  //       {
  //         x: 0,
  //         y: 0,
  //         size: 20,
  //         color: "red",
  //         label: dataIn[i].id,
  //       }
  //     ) 
  //   }
  //   // return graphInstance
  // }

  // addNodes(cyInstance, filteredMessages)

  // console.log("Graph instance:")
  // console.log(cyInstance)
  // console.log("Data in: ")
  // console.log(node)

  // https://codesandbox.io/s/sigma-example-use-reducers-p85ez?file=/index.ts 

  if (cyInstance) {
    cyInstance.addNode(
      node.id,
      {
          x: 0,
          y: 0,
          size: 20,
          color: "red",
          label: node.id,
        }
    )
  }
    // console.log("Hello world!")
  // console.log(renderer)
  // renderer.render()

</script>
