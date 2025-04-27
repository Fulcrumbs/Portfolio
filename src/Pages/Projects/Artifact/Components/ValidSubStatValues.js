
export default function ValidSubStatValues(uinput, sn){
    let modVal = [];
    const val = uinput;
    let low;
    let high;
    switch (sn)//Using the actual values but not the practical values
    {
      case "Elemental Mastery":
          modVal = [16, 19, 21, 23]; //16.32, 18.65, 20.98, 23.31
          low = 16;
          high = 140;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "Energy Recharge":
          modVal = [4.5, 5.2, 5.8, 6.5]; //4.53, 5.18, 5.83, 6.48
          low = 4.5;
          high = 39;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "ATK":
          modVal = [14, 16, 18, 19]; //13.62, 15.56, 17.51, 19.45
          low = 13.62;
          high = 117;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "DEF":
          modVal= [16, 19, 21, 23]; //16.2, 18.52, 20.83, 23.15
          low = 16;
          high = 139;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "HP":
          modVal=[209, 239, 269, 299]; //209.13, 239, 268.88, 298.75
          low = 209;
          high = 1794;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "ATK%":
          modVal = [4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
          low = 4.1;
          high = 35;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "DEF%":
          modVal=[5.1, 5.8, 6.6, 7.3]; //5.1, 5.83, 6.56, 7.29
          low = 5.1;
          high = 43.8;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "HP%":
          modVal=[4.1, 4.7, 5.3, 5.8]; //4.08, 4.66, 5.25, 5.83
          low = 4.1;
          high = 35;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "Critical DMG":
          modVal = [5.4, 6.2, 7, 7.8];// 5.44, 6.22, 6.99, 7.77
          low = 5.4;
          high = 46.8;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      case "Critical Rate":
          modVal = [2.7, 3.1, 3.5, 3.9];// 2.72, 3.11, 3.5, 3.89
          low = 2.7;
          high = 23.4;
          if (val >= low && val <= high && (val % modVal[0] === 0 | 
                                            val % modVal[1] === 0 | 
                                            val % modVal[2] === 0 | 
                                            val % modVal[3] === 0)) return true;
          return false;
      default:
          console.log("Invalid Entry");
          return false;
    }
  };