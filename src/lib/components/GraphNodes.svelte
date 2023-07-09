<script lang="ts">
  import { getContext } from 'svelte'
  const { getGraphInstance } = getContext('graphSharedState')
  const [ graphInstance ] = getGraphInstance()
  import { random } from 'graphology-layout';
  import circular from 'graphology-layout/circular';
  import forceAtlas2 from 'graphology-layout-forceatlas2';
  import ForceSupervisor from "graphology-layout-force/worker";
  import noverlap from 'graphology-layout-noverlap';
  import FA2Layout from 'graphology-layout-forceatlas2/worker';
  import InfoDisplay from './InfoDisplay.svelte';


  export let nodes

  let categories = [
    {
      "id": "cat0",
      "name": "Emotions & Expressions",
      "abbreviation": "EE",
      "size": 15
    },
    {
      "id": "cat1",
      "name": "Environmental Conditions",
      "abbreviation": "EC",
      "size": 15
    },
    {
      "id": "cat2",
      "name": "Navigation & Positioning",
      "abbreviation": "NP",
      "size": 15
    },
    {
      "id": "cat3",
      "name": "Safety & Emergency",
      "abbreviation": "SE",
      "size": 15
    },
    {
      "id": "cat4",
      "name": "Wildlife Sightings",
      "abbreviation": "WS",
      "size": 15
    },
    {
      "id": "cat5",
      "name": "Quantitative Information",
      "abbreviation": "QI",
      "size": 15
    }
  ]

  $: if (graphInstance) {
    graphInstance.clear()
    for (let index = 0; index < nodes.length; index++) {
      if (!graphInstance._nodes.has(nodes[index].id)) {
        graphInstance.addNode(
          nodes[index].id,
        {
            x: 0,
            y: 0,
            size: 7.5,
            label: nodes[index].message,
            color: "#495a8fff",
          }
      )
    }
  }



    for (let index = 0; index < categories.length; index++) {
      if (!graphInstance._nodes.has(categories[index].id)) {
        // console.log(categories[index])
        graphInstance.addNode(
          categories[index].id,
        {
            x: 0,
            y: 0,
            size: categories[index].size,
            label: categories[index].name,
            color: "#0075ffff",
          }
      )
    }
  }

  // Add edges
  for (let outerIndex = 0; outerIndex < nodes.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < nodes[outerIndex].categories.length; innerIndex++) {
      // console.log(nodes[outerIndex].categories)
      // for (let index0 = 0; index0 < nodes[outerIndex].categories.length; index0++) {
        for (let index1 = 0; index1 < categories.length; index1++) {
          if (categories[index1].abbreviation === nodes[outerIndex].categories[innerIndex]) {
            graphInstance.addEdge(nodes[outerIndex].id, categories[index1].id, { type: "arrow", label: "", size: 1.5 });
        }
        }
      // }
    }
  }

  graphInstance.nodes().forEach((node, i) => {
    const angle = (i * 2 * Math.PI) / graphInstance.order;
    graphInstance.setNodeAttribute(node, "x", 100 * Math.cos(angle));
    graphInstance.setNodeAttribute(node, "y", 100 * Math.sin(angle));
  });


  // const positions = random(graphInstance);
  // random.assign(graphInstance);
  
  // const positions = circular(graphInstance);
  // circular.assign(graphInstance);


  // Create the spring layout and start it
  // const layout = new ForceSupervisor(graphInstance);
  // layout.start();
  
  // const positions = forceAtlas2(graphInstance, 50)//, {iterations: 50});
  // forceAtlas2.assign(graphInstance);

// With settings:
// const positions = noverlap(graphInstance, {
//   maxIterations: 50,
//   settings: {
//     ratio: 2
//   }
// });

// To directly assign the positions to the nodes:
// noverlap.assign(graphInstance);


// The parameters are the same as for the synchronous version, minus `iterations` of course
const layout = new FA2Layout(graphInstance, {
  settings: {
    gravity: 100,
    barnesHutOptimize: true,
    linLogMode: false,
    outboundAttractionDistribution: true,
    slowDown: 25,
    scalingRatio: 50,
  }
});

// To start the layout
layout.start();

function stopWW(){
  // console.log(graphInstance.order)
 
  layout.stop();
}

setTimeout(stopWW, 2 * graphInstance.order) ;

}

    // const positions = circular(graph, {scale: 100});
    // To directly assign the positions to the nodes:
    // circular.assign(graphInstance);


  // console.log("Removing nodes...")
  //   for (let index = 0; index < toRemove.length; index++) {
  //     if (cyInstance._nodes.has(toRemove[index])) {
  //       cyInstance.dropNode(toRemove[index])
  //   }
  // }
</script>


<!-- Display Some info about a selected node -->
<!-- <InfoDisplay/>					 -->
