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
    //% help=circle/color-index-picker
    export function colorIndexPicker(color:number){
        return color
    }
    /**
     * returns a random color 0-15 excluding up to 3 colors
     */
    //     export function randomColor(n:number = 2, c1:number = 0, c2: number = 15, c3:number = 0): number{
    //% blockId=randomColor
    //% block=" random color || excluding %n colors: %c1 %c2 %c3"
    //% inlineInputMode=inline
    //% n.min=0 n.max=3 n.defl=2
    //% c1.min=0 c1.max=15 //c1.defl=0
    //% c2.min=0 c2.max=15 //c2.defl=15
    //% c3.min=0 c3.max=15 // c3.defl=0
    //% help=circle/random-color
    export function randomColor(c1:number = null, c2: number = null, c3:number = null ): number{
        let c:number[] = []
        // all colors to c array
        for (let i = 0; i < 16; i++) {
            c[i] = i
        }
        // remove colors to be excluded
        if (c1 != null && (c.indexOf(c1) > -1)) c.removeElement(c.indexOf(c1))
        if (c2 != null && (c.indexOf(c2) > -1)) c.removeElement(c.indexOf(c2))
        if (c3 != null && (c.indexOf(c3) > -1)) c.removeElement(c.indexOf(c3))

        return Math.pickRandom(c)
    }
}

