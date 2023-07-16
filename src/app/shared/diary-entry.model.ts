export class DiaryEntryModel {
    public index: number;
    public date: string;
    public entry: string;

    constructor(id: number, date: string, entry: string) {
        this.index = id;
        this.date = date;
        this.entry =  entry;
    }
}