export default function handleError(value, artifact) {
  const stats = [
    artifact.Piece.Stat,
    artifact.Sub1.Stat,
    artifact.Sub2.Stat,
    artifact.Sub3.Stat,
    artifact.Sub4.Stat,
  ];
  
  const filteredStats = stats.filter((stat) => stat !== "");
  if (artifact.Piece.Stat === "") {
    return alert("Select Artifact Piece"), (value.target.value = "");
  }

  if (filteredStats.includes(value)) {
    return alert("Duplicate Stat selected"), (value.target.value = "");
  }
}
