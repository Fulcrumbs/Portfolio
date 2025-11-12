export default function handleArtifactValues(e, parentKey, childKey){
    setArtifact({
      ...artifact, 
      [parentKey]:{
      ...artifact[parentKey],
      [childKey]: e.target.value
      }}
    )
  };