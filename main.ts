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
     * returns a sprit arrau of colors
     */
    //% blockId=spriteArray
    //% block
    export function colorsSpriteArray(): Sprite[]{
        let s:Sprite[] = []
        return s
    }
    /**
     * returns a random color 0-15 excluding up to 3 colors
     */
    //% blockId=randomColor
    //% block=" random color || excluding colors: %c1 %c2 %c3"
    //% inlineInputMode=inline
    export function randomColor(c1:number = -1, c2:number = -1, c3:number = -1): number{
        let cs = new CuteColor()
        cs.excludeColorNumber(c1)
        cs.excludeColorNumber(c2)
        cs.excludeColorNumber(c3)
        return Math.pickRandom(cs.colorNumbers)
    }
    class CuteColor{
        private _colorNames: string[] = []
        private _colorNumbers: number[] = []
        constructor(){
            this._colorNames =["transparent","white","red","pink","orange","yellow","teal","green","blue","light blue","purple","light purple","dark purple","tan","brown","black"]
            this._colorNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
        //% blockId=colorNamesArray
        //% blockSetVariable=myColorNamesArray
        //% block
        get colorNames(): string[] {
            return this._colorNames
        }
        //% blockId=colorNumbersArray
        //% blockSetVariable=myColorNumbersArray
        //% block
        get colorNumbers(): number[] {
            return this._colorNumbers
        }
        //% blockId=excludeColorNumber
        //% blockSetVariable=myBoolean
        //% block %c
        public excludeColorNumber(c:number): boolean {
            let i = this._colorNumbers.indexOf(c)
            if (i > -1) {
                this._colorNumbers.removeAt(i)
                this._colorNames.removeAt(i)
                return true
            } else return false
        }
        //% blockId=excludeColorName
        //% blockSetVariable=myBoolean
        //% block %cName
        public excludeColorName(cName:string): boolean {
            let i = this._colorNames.indexOf(cName) 
            if ( i > -1) {
                this._colorNumbers.removeAt(i)
                this._colorNames.removeAt(i)
                return true
            } else return false
        }
        //% blockId=colorNumberFromName
        //% blockSetVariable=myNumber
        //% block %colorName
        public colorNumberFromName(colorName:string):number {
            return this._colorNames.indexOf(colorName)
        }
        //% blockId=colorNameFromNumber
        //% blockSetVariable=myString
        //% block %colorNumber
        public colorNameFromNumber(colorNumber:number):string {
            return this._colorNames[colorNumber]
        }
       
    }
}

