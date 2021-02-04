interface PayloadProps {
  sortingOption: string;
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

const sortingOption = (state = "ADDED_ORDER", action: ActionProps): string => {
  return state;
  // switch (action.type) {
  //   case ADD_COURSE:
  //     return [...state, action.payload.course[SYLLABUS_KEYS.ID]];
  //   case REMOVE_COURSE:
  //     let newIds = [...state];
  //     const index = newIds.indexOf(action.payload.id);
  //     if (index > -1) {
  //       newIds.splice(index, 1);
  //     }
  //     return newIds;
  //   case SAVE_TIMETABLE:
  //     return action.payload.coursesAndPrefs.map(
  //       (cp) => cp.course[SYLLABUS_KEYS.ID]
  //     );
  //   default:
  //     return state;
  // }
};

export default sortingOption;