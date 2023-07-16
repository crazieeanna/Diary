export class DiaryEntryModel {
    public date: string;
    public entry: string;

    constructor(date: string, entry: string) {
        this.date = date;
        this.entry =  entry;
    }
}