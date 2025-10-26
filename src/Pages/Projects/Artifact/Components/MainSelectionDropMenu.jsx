import DropMenu from "./DropMenu";

export default function MainSelectionDropMenu({piece, handleValue, statArrays, data}) {
    if (piece === "Timepiece")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.sandMain}
          data={data}
        />
      );
    if (piece === "Goblet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.gobletMain}
          data={data}
        />
      );
    if (piece === "Circlet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.hatMain}
          data={data}
        />
      );
  };
  