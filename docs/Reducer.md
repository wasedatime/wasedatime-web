```javascript
{
  addedCourses: {},
  fetchedBuildings: {},
  fetchedCourses: {},
  //TODO change stats to a better name like scraperStats, syllabusStats?
  stats: {},
  user: {
    // Boolean true or false
    isFirstTimeAccess: false,
    // Support "en" and "jp"
    displayLang: "en",
    // Limited to at most 5 schools
    // Will be set at first time access.
    // Can be changed at 'filter by' in syllabus
    schools:[]
  }
}
```

#### Potential BUG:

BUG: Assume a user selected school `FSE`, added a course `C Programming` which belongs to `FSE`, and then deleted school `FSE` in syllabus. How do we rehydrate `C Programming` in `addedCourses` when the user visits next time? We only have `id` in localStorage.

SOL: Add a new key called `school` in user's localStorage for tracking the school that each course belongs to. If we cannot find the course by `id` and confirm that the school it belongs to is indeed not selected by the user, we fetch the api json file which corresponds to the not selected `school`. Else, we drop the course.
