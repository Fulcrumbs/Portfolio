
export default function Reset(reset, setArtifact){
    if (reset) {
        setArtifact(artifact.piece.type)};
        setArtifact(artifact.piece.stat);
        setArtifact(artifact.piece.value);
        setArtifact(artifact.sub1.stat);
        setArtifact(artifact.sub1.value);
        setArtifact(artifact.sub2.stat);
        setArtifact(artifact.sub2.value);
        setArtifact(artifact.sub3.stat);
        setArtifact(artifact.sub3.value);
        setArtifact(artifact.sub4.stat);
        setArtifact(artifact.sub4.value);
        setReset(false);
        console.log(reset);
};