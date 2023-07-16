import { Component, OnInit } from '@angular/core';
import { DiaryEntryModel } from '../shared/diary-entry.model';
import { DiaryEntryService } from '../shared/diary-entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaryEntryInput!: DiaryEntryModel[];

  constructor(private diaryEntryService: DiaryEntryService, private router: Router) {}

  ngOnInit() {
    this.diaryEntryInput = this.diaryEntryService.getDiaryEntires();
    this.diaryEntryService.diaryEntriesEmit.subscribe(diaryEntires => {
      this.diaryEntryInput = diaryEntires;
    });
  }

  onDelete(index: number) {
    this.diaryEntryService.onDeleteDiaryEntries(index);
  }

  onEdit(index: number) {
    this.router.navigate(["edit", index]);
  }

}
