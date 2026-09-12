export default function SelectionValidation(value, artifact){
  const stats = [artifact.Piece.Stat, artifact.Sub1.Stat, artifact.Sub2.Stat, artifact.Sub3.Stat, artifact.Sub4.Stat]
  const filteredStats = stats.filter(stat => stat !== "")
  if (value === "") {
    return console.log("Empty String entered"), true;
  }
  return console.log("True"), filteredStats.includes(value)
}

//I need this to be more generic, at the moment I can't use this when an artifact is loade