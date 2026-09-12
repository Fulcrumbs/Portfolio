import DropMenu from "./DropMenu";

export default function MainSelectionDropMenu({artifact, handleValue, statArrays, data}) {
    if (artifact.Piece.Type === "Timepiece")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.sandMain}
          data={data}
        />
      );
    if (artifact.Piece.Type === "Goblet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.gobletMain}
          data={data}
        />
      );
    if (artifact.Piece.Type === "Circlet")
      return (
        <DropMenu
          handleValue={handleValue}
          useArray={statArrays.hatMain}
          data={data}
        />
      );
  };
  