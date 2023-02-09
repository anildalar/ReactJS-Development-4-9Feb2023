//1. Import Area

import { MyComp2 } from "./MyComp2";


// import something from somelocation/somelibrary



//2. Function Defination Area
function MyComp1(){  // PascalCase
    //Every function return something
    return <h1>OKLABS123 <MyComp2 /> </h1>
}

//3. Export Area
// There are 2 ways you can export in NodeJs
//3.1 Default Export

export default MyComp1;

//3.2 Named Export

