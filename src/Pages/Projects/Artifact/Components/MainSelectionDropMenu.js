import DropMenu from "./DropMenu";

export default function MainSelectionDropMenu({piece, handleValue, statArrays, reset, loaded, data}) {
    if (piece === "Timepiece")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.sandMain}
          reset={reset}
          load={loaded}
          data={data}
        />
      );
    if (piece === "Goblet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.gobletMain}
          reset={reset}
          load={loaded}
          data={data}
        />
      );
    if (piece === "Circlet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.hatMain}
          reset={reset}
          load={loaded}
          data={data}
        />
      );
  };