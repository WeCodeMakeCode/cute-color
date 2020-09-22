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
    //% c1.min=0 c1.max=15 c1.defl=0
    //% c2.min=0 c2.max=15 c2.defl=15
    //% c3.min=0 c3.max=15 c3.defl=0
    //% help=circle/random-color
    export function randomColor(n:number, c1:number , c2: number = 15, c3:number ): number{
        switch(n) { 
            case 0: {    
                c1 = -1
                c2 = -1
                c3 = -1
                break; 
            }
            case 1: { 
                c2 = -1
                c3 = -1
                break; 
            } 
            case 2: { 
                c3 = -1
                break; 
            } 
            default: { 
                break; 
            } 
        } 
        let clr = randint(0, 15)
        // c1 or c2 or c3 = -1 will not be color
        while(clr == c1 || clr == c2 || clr == c3) { 
            clr = randint(0, 15)
        }
        return clr
    }
}

