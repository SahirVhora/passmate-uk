# Spaced Repetition Plan

PassMate already tracks weak areas, bookmarks, and session history. The next low-risk learning enhancement is a local spaced-repetition queue.

## Queue Rules

- Add every wrong answer to a review queue.
- Add bookmarked questions to the queue with a lower priority than wrong answers.
- Promote questions after repeated correct answers.
- Keep all state in `localStorage`; no account or backend required.

## Suggested Intervals

| Review outcome | Next review |
|---|---|
| Wrong | Same day |
| Correct once | 1 day |
| Correct twice | 3 days |
| Correct three times | 7 days |
| Correct four times | 14 days |

## UI Shape

- Add a **Due Review** card to the dashboard.
- Add a quiz mode that pulls due questions first, then weak-area questions.
- Show "due today" and "mastered" counts without changing the existing mock-test flow.
