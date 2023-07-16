import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryEntryService } from '../shared/diary-entry.service';
import { DiaryEntryModel } from '../shared/diary-entry.model';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  diaryForm!: FormGroup;
  editMode = false;
  diaryEntryInput!: DiaryEntryModel;
  diaryEntryInputID!: number;

  constructor(private router: Router,private diaryEntryService: DiaryEntryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.editMode = true;
        this.diaryEntryInputID = +params['id'];
        this.diaryEntryInput = this.diaryEntryService.getDiaryEntriesByID(this.diaryEntryInputID);
      } else {
        this.editMode = false;
      }
    });
    this.diaryForm = new FormGroup({
      "date": new FormControl(this.editMode ? this.diaryEntryInput.date : null, [Validators.required]),
      "entry": new FormControl(this.editMode ? this.diaryEntryInput.entry :null, [Validators.required])
    });
  }

  onSubmit() {
    const addNewDiaryEntry = new DiaryEntryModel(this.diaryForm.value.date, this.diaryForm.value.entry);
    if(this.editMode) {
      this.diaryEntryService.onUpdateDiaryEntries(this.diaryEntryInputID, addNewDiaryEntry);
    } else {
      this.diaryEntryService.onAddDiaryEntries(addNewDiaryEntry);
    }
    this.router.navigateByUrl('');
  }

}
