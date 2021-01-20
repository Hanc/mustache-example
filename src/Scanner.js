/*
    扫描器类
*/
export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;
        console.log('Scanner', templateStr);
        //指针
        this.pos = 0;
        //模板字符串原文
        this.tail = templateStr;
    }

    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            this.pos += tag.length;
            this.tail = this.templateStr.substring(this.pos)
        }
    }

    scanUntil(stopTag) {
        const pos_backup = this.pos;
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            this.tail = this.templateStr.substr(this.pos);
        }

        return this.templateStr.substring(pos_backup, this.pos);
    }

    eos(){
        return this.pos >= this.templateStr.length;
    }
}