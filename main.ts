    /**
     * todo
     */
//% weight=100 color=#008080 
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
     * returns a sprit list with colors from a colors list
     */
    //% blockId=colorsSpriteList
    //% blockSetVariable=mySpriteList
    //% block "list of sprites with colors %colorNumberLists=variables_get(colorNumbersList) || of width %width and height %height"
    //% width.min=1 width.max=160 width.defl=16
    //% height.min=1 height.max=140 height.defl=16
    export function colorsSpriteList( colorNumbersList: number[], width:number, height:number): Sprite[]{ 
        let spriteList:Sprite[] = []

        for (let i = 0; i < colorNumbersList.length; i++) {
            let newImage = image.create(width, height)
            newImage.fill(colorNumbersList[i])
            let mySprite = sprites.create(newImage)
            mySprite.data["sprite color"]=colorNumbersList[i]
            spriteList.push(mySprite)
        }
        return spriteList
    }
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
    //% block "color number of color name %colorName"
    export function colorNumberFromName(colorName:string):number {
        let cs = new CuteColor()
        return cs.colorNames.indexOf(colorName)
    }
    //% blockId=colorNameFromNumber
    //% blockSetVariable=myColorName
    //% block "color name of color number %colorNumber"
    export function colorNameFromNumber(colorNumber:number):string {
        let cs = new CuteColor()
        return cs.colorNames[colorNumber]
    }
}
// //% blockNamespace=cuteColor
    class CuteColor{
        private _colorNames: string[] = []
        private _colorNumbers: number[] = []
        constructor(){
            this._colorNames =["transparent","white","red","pink","orange","yellow","teal","green","blue","light blue","purple","light purple","dark purple","tan","brown","black"]
            this._colorNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            // do exclusions here
        }
        get colorNames(): string[] {
            return this._colorNames
        }
        get colorNumbers(): number[] {
            return this._colorNumbers
        }
        get randomizedColorNumbers(): number[] {
            // TO DO 
            return this._colorNumbers
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


