
export default function CritValue(artifact){
    let critValue = 0;
    if(artifact.Sub1.Stat === 'Critical DMG' && artifact.Sub2.Stat === 'Critical Rate'){
        critValue = artifact.Sub1.Value * (artifact.Sub2.Value * 0.01)
    };
    if(artifact.Sub1.Stat === 'Critical DMG' && artifact.Sub3.Stat === 'Critical Rate'){
       critValue = artifact.Sub1.Value * (artifact.Sub3.Value * 0.01)
    };
    if(artifact.Sub1.Stat === 'Critical DMG' && artifact.Sub4.Stat === 'Critical Rate'){
       critValue = artifact.Sub1.Value * (artifact.Sub4.Value * 0.01)
    };
    //1^
    if(artifact.Sub2.Stat === 'Critical DMG' && artifact.Sub1.Stat === 'Critical Rate'){
        critValue = artifact.Sub2.Value * (artifact.Sub1.Value * 0.01)
    };
    if(artifact.Sub2.Stat === 'Critical DMG' && artifact.Sub3.Stat === 'Critical Rate'){
       critValue = artifact.Sub2.Value * (artifact.Sub3.Value * 0.01)
    };
    if(artifact.Sub2.Stat === 'Critical DMG' && artifact.Sub4.Stat === 'Critical Rate'){
       critValue = artifact.Sub2.Value * (artifact.Sub4.Value * 0.01)
    };
    //2^
    if(artifact.Sub3.Stat === 'Critical DMG' && artifact.Sub1.Stat === 'Critical Rate'){
       critValue = artifact.Sub3.Value * (artifact.Sub1.Value * 0.01)
    };
    if(artifact.Sub3.Stat === 'Critical DMG' && artifact.Sub2.Stat === 'Critical Rate'){
       critValue = artifact.Sub3.Value * (artifact.Sub2.Value * 0.01)
    };
    if(artifact.Sub3.Stat === 'Critical DMG' && artifact.Sub4.Stat === 'Critical Rate'){
       critValue = artifact.Sub3.Value * (artifact.Sub4.Value * 0.01);        
    };
    //3^
    if(artifact.Sub4.Stat === 'Critical DMG' && artifact.Sub1.Stat === 'Critical Rate'){
       critValue = artifact.Sub4.Value * (artifact.Sub1.Value * 0.01);
    };
    if(artifact.Sub4.Stat === 'Critical DMG' && artifact.Sub2.Stat === 'Critical Rate'){
        critValue = artifact.Sub4.Value * (artifact.Sub2.Value * 0.01); 
    };
    if(artifact.Sub4.Stat === 'Critical DMG' && artifact.Sub3.Stat === 'Critical Rate'){
       critValue = artifact.Sub4.Value * (artifact.Sub3.Value * 0.01);
    };
    //4^
    return critValue;
};