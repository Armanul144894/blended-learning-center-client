import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` ${title} - blended-learning-center`;
  }, [title]);
};
export default useTitle;
