import { useContext } from "react";
import { CollapseDrawerContext } from "@/ui/contexts/CollapseDrawerContext";

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
