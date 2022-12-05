import { PrimaryButton } from "./components/atoms/button/PrimaryButtons";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>poteto</PrimaryButton>
      <SecondaryButton>ペンギン</SecondaryButton>
    </div>
  );
}
