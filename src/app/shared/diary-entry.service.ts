import { EventEmitter, Injectable } from "@angular/core";
import { DiaryEntryModel } from "./diary-entry.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DiaryEntryService {

    constructor(private http: HttpClient) {}

    diaryEntriesEmit = new EventEmitter<DiaryEntryModel[]>()

    private diaryEntries: DiaryEntryModel[] = [
        new DiaryEntryModel(1, 'July 15th', 'Entry 0'),
        new DiaryEntryModel(2, 'July 16th', 'Entry 1'),
        new DiaryEntryModel(3, 'July 17th', 'Entry 2')
    ];

    getDiaryEntires() {
        this.http.get<{diaryEntriesBackend: DiaryEntryModel[]}>('http://localhost:3000/diary-entries').subscribe(jsonData => {
            this.diaryEntries = jsonData.diaryEntriesBackend;
            this.diaryEntriesEmit.emit(this.diaryEntries);
        })
    }

    onDeleteDiaryEntries(index: number) {
        this.diaryEntries.splice(index, 1);
        this.diaryEntriesEmit.emit(this.diaryEntries);
    }

    onAddDiaryEntries(addDiaryEntries: DiaryEntryModel) {
        this.diaryEntries.push(addDiaryEntries);
        this.diaryEntriesEmit.emit(this.diaryEntries);
    }

    onUpdateDiaryEntries(index: number, updateDiary: DiaryEntryModel) {
        this.diaryEntries[index] = updateDiary;
        this.diaryEntriesEmit.emit(this.diaryEntries);
    }

    getDiaryEntriesByID(index: number) {
        return {...this.diaryEntries[index]};
    }
}