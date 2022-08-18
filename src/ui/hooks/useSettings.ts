import { useContext } from "react";
import { SettingsContext } from "@/ui/contexts/SettingsContext";

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
