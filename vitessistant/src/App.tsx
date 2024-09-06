import { MyAssistantModal } from "@/components/ui/assistant-ui/assistant-modal";
import "./App.css";
import { MyRuntimeProvider } from "@/components/MyRuntimeProvider";

function App() {
  return (
    <>
      <MyRuntimeProvider>
        <MyAssistantModal />
      </MyRuntimeProvider>
    </>
  );
}

export default App;
