import { EventEmitter, Injectable } from "@angular/core";
import { DiaryEntryModel } from "./diary-entry.model";

@Injectable({providedIn: 'root'})
export class DiaryEntryService {

    diaryEntriesEmit = new EventEmitter<DiaryEntryModel[]>()

    private diaryEntries: DiaryEntryModel[] = [
        new DiaryEntryModel('July 15th', 'Entry 0'),
        new DiaryEntryModel('July 16th', 'Entry 1'),
        new DiaryEntryModel('July 17th', 'Entry 2')
    ];

    getDiaryEntires() {
        return this.diaryEntries.slice();
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