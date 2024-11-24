import useData from "./useData";
import platform from "@/data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platform, loading: false, error: null });
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
