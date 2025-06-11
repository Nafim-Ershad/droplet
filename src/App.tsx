// App.tsx
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PageBuilder from "./components/PageBuilder";
import BlockGallery from "./components/BlockGallery";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ width: "200px", borderRight: "1px solid #ddd", padding: "8px" }}>
        <h3>Blocks</h3>
        <BlockGallery />
      </div>
      <PageBuilder />
    </div>
  );
};

export default App;
