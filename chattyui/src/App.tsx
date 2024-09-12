import { MyRuntimeProvider } from "@/components/MyRuntimeProvider";
import { MyAssistantModal } from "@/components/ui/assistant-ui/assistant-modal";
import "./App.css";

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
