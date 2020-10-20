    /**
     * todo
     */
//% weight=100 color=#008080
//% groups=[ "Color", "List"]
namespace cuteColor{
    /**
     * Returns selected color
     */

    //% group=Color
    //% blockId=colorIndexPicker
    //% block="color %color"
    //% color.shadow="colorindexpicker"
    export function colorIndexPicker(color:number){
        return color
    }
    /**
     * returns a sprit list with colors from a colors list
     */
    //% group=List
    //% blockId=colorsSpriteList
    //% blockSetVariable=mySpriteList
    //% block="sprites for colors %colors of width $width and height $height"
    //% width.min=1 width.max=160 width.defl=16
    //% height.min=1 height.max=140 height.defl=16
    export function colorsSpriteList(  colors: number[], width:number, height:number): Sprite[]{ 
        let spriteList:Sprite[] = []

        for (let i = 0; i < colors.length; i++) {
            let newImage = image.create(width, height)
            newImage.fill(colors[i])
            let mySprite = sprites.create(newImage)
            mySprite.data["sprite color"]=colors[i]
            spriteList.push(mySprite)
        }
        return spriteList
    }
    //% group=Color
    //% blockId=spriteColor
    //% blockSetVariable=mySpriteColor
    //% block="sprite color of sprite %s=variables_get(myColorSprite)"
    export function spriteColor(s:Sprite):number {
        if(s.data["sprite color"] != null ){
            return s.data["sprite color"]
        } else return -1
    }
    /**
     * returns a random color 0-15 excluding up to 3 colors
     */
    //% group=Color
    //% blockId=randomColor
    //% blockSetVariable=myRandomColor
    //% block="random color excluding colors: %c1 %c2 %c3"
    //% c1.min=0 c1.max=15 c1.defl=0
    //% c2.min=0 c2.max=15 c2.defl=0
    //% c3.min=0 c3.max=15 c3.defl=0
    //% inlineInputMode=inline
    export function randomColor(c1:number, c2:number, c3:number ): number{
        let cc = newCs(c1,c2,c3)
        return Math.pickRandom(cc.colorNumbers)
    }
    //% group=List
    //% blockId=randomColorsList
    //% blockSetVariable=myRandomColorsList
    //% block="random colors list excluding colors: %c1 %c2 %c3"
    //% c1.min=0 c1.max=15 c1.defl=0
    //% c2.min=0 c2.max=15 c2.defl=0
    //% c3.min=0 c3.max=15 c3.defl=0
    //% inlineInputMode=inline
    export function randomColorsList(c1:number, c2:number, c3:number): number[]{
        let cc = new CuteColor()
        cc.excludeColorNumber(c1)
        cc.excludeColorNumber(c2)
        cc.excludeColorNumber(c3)
        return cc.randomizedColorNumbers
    }
    function newCs(c1:number = -1, c2:number = -1, c3:number = -1): CuteColor{
        let cc = new CuteColor()
        cc.excludeColorNumber(c1)
        cc.excludeColorNumber(c2)
        cc.excludeColorNumber(c3)
        return cc
    }
    //% group=Color
    //% blockId=colorNumberFromName
    //% blockSetVariable=myColorNumber
    //% block "color number of color name %colorName"
    export function colorNumberFromName(colorName:string):number {
        let cs = new CuteColor()
        return cs.colorNames.indexOf(colorName)
    }
    //% group=Color
    //% blockId=colorNameFromNumber
    //% blockSetVariable=myColorName
    //% block "name of color number %colorNumber"
    export function colorNameFromNumber(colorNumber:number):string {
        let cs = new CuteColor()
        return cs.colorNames[colorNumber]
    }
}
    //% blockNamespace=cuteColor
    class CuteColor{
        private _colorNames: string[] = []
        private _colorNumbers: number[] = []
        private _randomizedColors: number[] = []
        constructor(){
            this._colorNames =["transparent","white","red","pink","orange","yellow","teal","green","blue","light blue","purple","light purple","dark purple","tan","brown","black"]
            this._colorNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
        get colorNames(): string[] {
            return this._colorNames
        }
        get colorNumbers(): number[] {
            return this._colorNumbers
        }
        get randomizedColorNumbers(): number[] {
            // copy 
            for (let i = 0; i < this._colorNumbers.length; i++) {
                this._randomizedColors[i] = this._colorNumbers[i]
            }
            // Fisher–Yates shuffle
            let n = this._randomizedColors.length-1
            for (let i = 0; i < n - 1; i++) {
                let j = randint(i, n)
                let tmp = this._randomizedColors[i]
                this._randomizedColors[i] = this._randomizedColors[j]
                this._randomizedColors[j] = tmp
            }
            return this._randomizedColors
        }
        public excludeColorNumber(c:number): boolean {
            let i = this._colorNumbers.indexOf(c)
            if (i > -1) {
                this._colorNumbers.removeAt(i)
                this._colorNames.removeAt(i)
                return true
            } else return false
        }
        public excludeColorName(cName:string): boolean {
            let i = this._colorNames.indexOf(cName) 
            if ( i > -1) {
                this._colorNumbers.removeAt(i)
                this._colorNames.removeAt(i)
                return true
            } else return false
        }

       
    }


