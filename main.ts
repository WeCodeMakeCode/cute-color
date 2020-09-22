    /**
     * todo
     */
namespace cuteColor{
    /**
     * Returns selected color
     */
    //% blockId=colorIndexPicker
    //% block="color %color"
    //% color.shadow="colorindexpicker"
    export function colorIndexPicker(color:number){
        return color
    }

    /**
     * returns a colors array
     */
    //% blockId=colorsArray
    //% block
    export function colorsArray(): number[]{
        return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
    /**
     * returns a random color 0-15 excluding up to 3 colors
     */
    //% blockId=randomColor
    //% block=" random color || excluding colors: %c1 %c2 %c3"
    //% inlineInputMode=inline
    export function randomColor(c1:string = "", c2:string = "", c3:string = ""): number{
        let cInts =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        let cIntsText =["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
        let cNamesText =["transparent","white","red","pink","orange","yellow","teal","green","blue","light blue","purple","light purple","dark purple","tan","brown","black"]
        // remove colors to be excluded
        let i1 = colorNumber(c1, cIntsText, cNamesText)
        let i2 = colorNumber(c2, cIntsText, cNamesText)
        let i3 = colorNumber(c3, cIntsText, cNamesText)
        if (i1 > -1) cInts.removeElement(i1)
        if (i2 > -1) cInts.removeElement(i2)
        if (i3 > -1) cInts.removeElement(i3)

        return Math.pickRandom(cInts)
    }
    function colorNumber(c:string, ar1:string[], ar2:string[]):number {
        if (ar1.indexOf(c) > -1) {
            return ar1.indexOf(c)     
        } else if (ar2.indexOf(c) > -1) {
            return ar2.indexOf(c)
        }
        return -1
    }
}

