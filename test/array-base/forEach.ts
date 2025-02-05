import { runTestSuit, getArrBase, shouldBeEqual, noop } from '../_util';

function changeDraft(arrDraft) {
  arrDraft.forEach((item, i) => {
    arrDraft[i] = 100 + item;
  });
}

function compare(arrNew, arrBase) {
  expect(arrNew !== arrBase).toBeTruthy();
  expect(arrNew).toMatchObject([101, 102, 103]);
}

runTestSuit('test forEach change item', 'forEach', getArrBase, changeDraft, compare);

function noopDraftItem(arrDraft) {
  arrDraft.forEach((item) => {
    noop(item);
  });
}

runTestSuit('test forEach noop', 'forEach', getArrBase, noopDraftItem, shouldBeEqual);
