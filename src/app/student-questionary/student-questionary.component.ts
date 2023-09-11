import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

interface Types {
  name: string;
  code: string;
}
@Component({
  selector: 'app-student-questionary',
  templateUrl: './student-questionary.component.html',

})
export class StudentQuestionaryComponent implements OnInit {
  visible: boolean = false;
  selctedtypeId: any;
  getquestionList: any = [];
  public service: MainService;
  getAnswerList: any = [];
  getQuestionList: any = [];
  questions: any;
  answerLists: any = [];
  reviewData: any = [];
  visible1: boolean;
  selftinstroduction: any;
  question: any = [];
  IntroductionField: boolean = false;

  constructor(public fb: FormBuilder, private injector: Injector) {
    this.service = this.injector.get(MainService);
  }

  typeList: any;

  selectedType: '';
  QuationaryForm: FormGroup;
  IntroductionForm: FormGroup;
  contact = {
    contacts: [{ answer: '', checked: false }]
  }
  ngOnInit() {
    this.QuationaryForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      qustion: new FormControl(null, []),
      answer: new FormControl(null, []),
      // Rows: this.fb.array([this.initRows()])
      contacts: this.buildContacts(this.contact.contacts)
    });
    this.IntroductionForm = new FormGroup({
      introduction: new FormControl(null, [Validators.required]),
      anscheckbox: new FormControl(false, []),
    });

    this.typeList = [
      { name: 'Paragraph', code: '1' },
      { name: 'CheckboxList', code: '2' }
    ];

  }
  buildContacts(contacts: { answer: string, checked: boolean }[] = []) {
    return this.fb.array(contacts.map(contact => this.fb.group(contact)));
  }

  get contacts(): FormArray {
    return this.QuationaryForm.get('contacts') as FormArray;
  }
  initRows() {
    return this.fb.group({
      name: [""]
    });
  }

  addNewRow() {
    this.contacts.push(this.fb.group({ answer: null, checked: false }))

  }
  removeContactField(index: number): void {
    if (this.contacts.length > 1) this.contacts.removeAt(index);
    else this.contacts.patchValue([{ answer: null, checked: false }]);
  }

  showDialog() {
    this.visible = true;
  }
  changeSelections(e) {
    this.name.setValue(e.target.value)
    this.selctedtypeId = e.target.value;
  }
  get name() {
    return this.QuationaryForm.get('name');
  }
  getcheckboxvalue(bool, Checkboxvalue, data) {
    this.answerLists.push()
    for (let i = 0; i < this.answerLists.length; i++) {
      for (let j = 0; j < this.answerLists[i].answerList.length; j++) {
        if (this.answerLists[i].answerList[j].answer == data.answer) {
          this.answerLists[i].answerList[j]['checked'] = true;
        }
      }
    }
  }
  addNew() {
    this.IntroductionForm.reset(this.IntroductionForm.value);
    this.QuationaryForm.reset(this.QuationaryForm.value);

    this.visible = true;
  }
  onSubmit(value: any) {
    this.QuationaryForm.reset();
    var input: any = [];
    input = [{
      question: value.qustion,
      questionType: value.name,
      answer: value.answer,
      answerList: value.contacts
    }]
    this.questions = input.question;
    input.forEach(element => {
      this.answerLists.push(element);
    });
    this.visible = false;
    this.IntroductionField = true;
  }
  onSubmitIntro() {
    this.visible1 = true;
    this.visible = false;
    console.log(this.IntroductionForm.get('introduction').value);
    this.selftinstroduction = this.IntroductionForm.get('introduction').value;
  }
}
