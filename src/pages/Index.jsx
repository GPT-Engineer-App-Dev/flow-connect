import React, { useState, useEffect } from 'react';
import { Container, Box, Button, VStack, HStack } from "@chakra-ui/react";
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';

const initialElements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Start Node' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'default', // default node
    data: { label: 'Second Node' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
];

const Index = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (rfi) => setReactFlowInstance(rfi);

  const addNode = () => {
  const newNode = {
    id: (elements.length + 1).toString(),
    data: { label: `Node ${elements.length + 1}` },
    position: { x: Math.random() * 250, y: Math.random() * 250 },
  };
  setElements((es) => [...es, newNode]);
};

  useEffect(() => {
    console.log(elements);
  }, [elements]);

  return (
    <Container maxW="100vw" maxH="100vh" p={0} centerContent>
      <Box w="100%" h="100vh">
        <HStack spacing={4} p={4} bg="gray.100" justifyContent="center">
          <Button onClick={addNode} colorScheme="teal">Add Node</Button>
        </HStack>
        <Box w="100%" h="calc(100vh - 64px)">
          <ReactFlow
  elements={elements}
  onConnect={onConnect}
  onLoad={onLoad}
  style={{ width: '100%', height: '100%' }}
>
  <MiniMap />
  <Controls />
  <Background />
</ReactFlow>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;