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
    //% blockSetVariable=mySprites
    //% block
    export function colorsSpriteArray(): Sprite[]{  // add excluded colors
        let spriteList:Sprite[] = []
        let cs = new CuteColor()
        let colorNumbers = cs.colorNumbers
        
        for (let i = 0; i < colorNumbers.length; i++) {
            let newImage = image.create(8, 8)
            newImage.fill(i)
            let mySprite = sprites.create(newImage)
            spriteList.push(mySprite)
        }
        return spriteList
    }
    /**
     * returns a random color 0-15 excluding up to 3 colors
     */
    //% blockId=randomColor
    //% blockSetVariable=myRandomColor
    //% block="random color || excluding colors: %c1 %c2 %c3"
    //% inlineInputMode=inline
    export function randomColor(c1:number = -1, c2:number = -1, c3:number = -1): number{
        let cc = newCs(c1,c2,c3)
        return Math.pickRandom(cc.colorNumbers)
    }
    //% blockId=randomColorsList
    //% blockSetVariable=myRandomColorsList
    //% block="random colors list || excluding colors: %c1 %c2 %c3"
    //% inlineInputMode=inline
    export function randomColorsList(c1:number = -1, c2:number = -1, c3:number = -1): number[]{
        let cc = newCs(c1,c2,c3)
        return cc.colorNumbers
    }
    function newCs(c1:number = -1, c2:number = -1, c3:number = -1): CuteColor{
        let cc = new CuteColor()
        cc.excludeColorNumber(c1)
        cc.excludeColorNumber(c2)
        cc.excludeColorNumber(c3)
        return cc
    }
    //% blockId=colorNumberFromName
    //% blockSetVariable=myColorNumber
    //% block find color number form color name %colorName
    export function colorNumberFromName(colorName:string):number {
        let cs = new CuteColor()
        return cs.colorNames.indexOf(colorName)
    }
    //% blockId=colorNameFromNumber
    //% blockSetVariable=myColorName
    //% block find color name from color number %colorNumber
    export function colorNameFromNumber(colorNumber:number):string {
        let cs = new CuteColor()
        return cs.colorNames[colorNumber]
    }
}
//% blockNamespace=cuteColor
    class CuteColor{
        private _colorNames: string[] = []
        private _colorNumbers: number[] = []
        constructor(){
            this._colorNames =["transparent","white","red","pink","orange","yellow","teal","green","blue","light blue","purple","light purple","dark purple","tan","brown","black"]
            this._colorNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            // do exclusions here
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
        //% blockId=colorNumbersArray
        //% blockSetVariable=myColorNumbersArray
        //% block
        get randomizedColorNumbers(): number[] {
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

       
    }


