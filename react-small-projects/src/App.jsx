import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import { LightDarkMode } from "./components/light-dark-mode";
import { LoadMoreData } from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import { RandomColor } from "./components/random-color";
import StarRating from "./components/star-rating";
import { TreeView } from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div>
      <Accordian />

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={5} /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}
    </div>
  );
}

export default App;
